const StudentModel = require('../MODELS/Student');
const bcrypt = require('bcrypt');
const { validateSignupData, validateStudentUpdateData } = require('../utilies/validation');

// Helper function for error responses
const errorResponse = (res, status, message, error, details = null) => {
    const response = {
        success: false,
        message,
        error
    };
    if (details) response.details = details;
    return res.status(status).json(response);
};

// Helper function for success responses
const successResponse = (res, status, message, data = null) => {
    const response = {
        success: true,
        message
    };
    if (data) response.data = data;
    return res.status(status).json(response);
};

exports.registerStudent = async (req, res, next) => {
    try {
        validateSignupData(req);
        const { email, password, fname, lname, phone } = req.body;
        
        // Check if student already exists
        const existingStudent = await StudentModel.findOne({ email });
        if (existingStudent) {
            return errorResponse(res, 409, 'Email already registered', 'DUPLICATE_EMAIL');
        }

        const passwordHash = await bcrypt.hash(password, 10);
        const student = new StudentModel({
            fname: fname.trim(),
            lname: lname.trim(),
            email: email.toLowerCase(),
            password: passwordHash,
            phone: parseInt(phone)
        });
        
        await student.save();
        return successResponse(res, 201, 'Student registered successfully');
    } catch (err) {
        console.error('Error registering student:', err);
        if (err.name === 'ValidationError') {
            return errorResponse(res, 400, 'Validation error', 'VALIDATION_ERROR', err.message);
        }
        return errorResponse(res, 500, 'Error registering student', 'SERVER_ERROR', err.message);
    }
};

exports.loginStudent = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const student = await StudentModel.findOne({ email: email.toLowerCase() });
        
        if (!student) {
            return errorResponse(res, 401, 'Invalid credentials', 'AUTH_ERROR');
        }

        const isPasswordValid = await bcrypt.compare(password, student.password);
        if (!isPasswordValid) {
            return errorResponse(res, 401, 'Invalid credentials', 'AUTH_ERROR');
        }

        return successResponse(res, 200, 'Login successful');
    } catch (err) {
        console.error('Login error:', err);
        return errorResponse(res, 500, 'Login failed', 'SERVER_ERROR', err.message);
    }
};

exports.updateStudent = async (req, res, next) => {
    try {
        validateStudentUpdateData(req);
        const { email } = req.body;
        const student = await StudentModel.findOne({ email: email.toLowerCase() });
        
        if (!student) {
            return errorResponse(res, 404, 'Student not found', 'NOT_FOUND');
        }

        const updateFields = {};
        if (req.body.fname) updateFields.fname = req.body.fname.trim();
        if (req.body.lname) updateFields.lname = req.body.lname.trim();
        if (req.body.phone) updateFields.phone = parseInt(req.body.phone);
        if (req.body.gender) updateFields.gender = req.body.gender;
        if (req.body.course) updateFields.course = req.body.course;
        if (req.body.year) updateFields.year = req.body.year;
        if (req.body.password) {
            updateFields.password = await bcrypt.hash(req.body.password, 10);
        }

        if (Object.keys(updateFields).length === 0) {
            return errorResponse(res, 400, 'No fields provided for update', 'INVALID_REQUEST');
        }

        const updatedStudent = await StudentModel.findOneAndUpdate(
            { email: email.toLowerCase() },
            { $set: updateFields },
            { new: true, runValidators: true, context: 'query' }
        );

        const studentResponse = {
            fname: updatedStudent.fname,
            lname: updatedStudent.lname,
            email: updatedStudent.email,
            phone: updatedStudent.phone,
            gender: updatedStudent.gender,
            course: updatedStudent.course,
            year: updatedStudent.year,
            updatedAt: updatedStudent.updatedAt
        };

        return successResponse(res, 200, 'Student profile updated successfully', studentResponse);
    } catch (err) {
        console.error('Error updating student:', err);
        if (err.name === 'ValidationError') {
            return errorResponse(res, 400, 'Validation error', 'VALIDATION_ERROR', err.message);
        }
        return errorResponse(res, 500, 'Error updating student profile', 'SERVER_ERROR', err.message);
    }
};
