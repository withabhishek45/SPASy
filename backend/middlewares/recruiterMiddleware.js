const RecruiterModel = require('../MODELS/Recruiter');
const bcrypt = require('bcrypt');
const { validateRecruiterSignupData, validateRecruiterUpdateData } = require('../utilies/validation');

// Helper function for error responses
const errorResponse = (res, status, message, error, details = null) => {
    const response = {
        success: false,
        message,
        error,
    };
    if (details) response.details = details;
    return res.status(status).json(response);
};

// Helper function for success responses
const successResponse = (res, status, message, data = null) => {
    const response = {
        success: true,
        message,
    };
    if (data) response.data = data;
    return res.status(status).json(response);
};

exports.registerRecruiter = async (req, res, next) => {
    try {
        validateRecruiterSignupData(req);
        const { email, password, companyName, contactPerson, phone } = req.body;

        // Check if recruiter already exists
        const existingRecruiter = await RecruiterModel.findOne({ email });
        if (existingRecruiter) {
            return errorResponse(res, 409, 'Email already registered', 'DUPLICATE_EMAIL');
        }

        const passwordHash = await bcrypt.hash(password, 10);

        // Prepare recruiter data, only add phone if valid
        const recruiterData = {
            companyName: companyName.trim(),
            contactPerson: contactPerson.trim(),
            email: email.toLowerCase(),
            password: passwordHash,
        };

        if (phone !== undefined && phone !== null && phone !== '' && !isNaN(phone)) {
            recruiterData.phone = Number(phone);
        }

        const recruiter = new RecruiterModel(recruiterData);
        await recruiter.save();

        return successResponse(res, 201, 'Recruiter registered successfully');
    } catch (err) {
        console.error('Error registering recruiter:', err);
        if (err.name === 'ValidationError') {
            return errorResponse(res, 400, 'Validation error', 'VALIDATION_ERROR', err.message);
        }
        return errorResponse(res, 500, 'Error registering recruiter', 'SERVER_ERROR', err.message);
    }
};

exports.loginRecruiter = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const recruiter = await RecruiterModel.findOne({ email: email.toLowerCase() });

        if (!recruiter) {
            return errorResponse(res, 401, 'Invalid credentials', 'AUTH_ERROR');
        }

        const isPasswordValid = await bcrypt.compare(password, recruiter.password);
        if (!isPasswordValid) {
            return errorResponse(res, 401, 'Invalid credentials', 'AUTH_ERROR');
        }

        return successResponse(res, 200, 'Login successful');
    } catch (err) {
        console.error('Login error:', err);
        return errorResponse(res, 500, 'Login failed', 'SERVER_ERROR', err.message);
    }
};

exports.updateRecruiter = async (req, res, next) => {
    try {
        validateRecruiterUpdateData(req);
        const { email } = req.body;

        const recruiter = await RecruiterModel.findOne({ email: email.toLowerCase() });
        if (!recruiter) {
            return errorResponse(res, 404, 'Recruiter not found', 'NOT_FOUND');
        }

        const updateFields = {};
        if (req.body.companyName) updateFields.companyName = req.body.companyName.trim();
        if (req.body.contactPerson) updateFields.contactPerson = req.body.contactPerson.trim();

        if (req.body.phone !== undefined && req.body.phone !== null && req.body.phone !== '' && !isNaN(req.body.phone)) {
            updateFields.phone = Number(req.body.phone);
        }

        if (req.body.password) {
            updateFields.password = await bcrypt.hash(req.body.password, 10);
        }

        if (Object.keys(updateFields).length === 0) {
            return errorResponse(res, 400, 'No fields provided for update', 'INVALID_REQUEST');
        }

        const updatedRecruiter = await RecruiterModel.findOneAndUpdate(
            { email: email.toLowerCase() },
            { $set: updateFields },
            { new: true, runValidators: true, context: 'query' }
        );

        const recruiterResponse = {
            companyName: updatedRecruiter.companyName,
            contactPerson: updatedRecruiter.contactPerson,
            email: updatedRecruiter.email,
            phone: updatedRecruiter.phone,
            updatedAt: updatedRecruiter.updatedAt,
        };

        return successResponse(res, 200, 'Recruiter profile updated successfully', recruiterResponse);
    } catch (err) {
        console.error('Error updating recruiter:', err);
        if (err.name === 'ValidationError') {
            return errorResponse(res, 400, 'Validation error', 'VALIDATION_ERROR', err.message);
        }
        return errorResponse(res, 500, 'Error updating recruiter profile', 'SERVER_ERROR', err.message);
    }
};
