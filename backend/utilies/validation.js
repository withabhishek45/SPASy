const validator = require('validator');

// Common validation functions
const validateEmail = (email) => {
    if (!email) throw new Error('Email is required');
    if (!validator.isEmail(email)) throw new Error('Email is invalid');
};

const validatePassword = (password) => {
    if (!password) throw new Error('Password is required');
    if (!validator.isStrongPassword(password)) {
        throw new Error('Password must be at least 8 characters long and contain uppercase, lowercase, number, and special character');
    }
};

const validateLoginPassword = (password) => {
    if (!password) throw new Error('Password is required');
};

const validateString = (value, fieldName) => {
    if (value && typeof value !== 'string') {
        throw new Error(`${fieldName} must be a string`);
    }
    if (value && value.trim().length === 0) {
        throw new Error(`${fieldName} cannot be empty`);
    }
};

// Student validation
const validateSignupData = (req) => {
    const { fullName, email, password } = req.body;

    validateString(fullName, 'Full name');
    validateEmail(email);
    validatePassword(password);
};

const validateStudentUpdateData = (req) => {
    const { fullName, email, password } = req.body;

    if (fullName) validateString(fullName, 'Full name');
    validateEmail(email);
    if (password) validatePassword(password);
};

// Recruiter validation
const validateRecruiterSignupData = (req) => {
    const { companyName, contactPerson, email, password } = req.body;

    validateString(companyName, 'Company name');
    validateString(contactPerson, 'Contact person');
    validateEmail(email);
    validatePassword(password);
};

const validateRecruiterUpdateData = (req) => {
    const { email, companyName, contactPerson, password } = req.body;

    validateEmail(email);
    validateString(companyName, 'Company name');
    validateString(contactPerson, 'Contact person');
    // Phone validation removed here
    if (password) validatePassword(password);
};

// ✅ New login validation
const validateLoginData = (req) => {
    const { email, password } = req.body;

    validateEmail(email);
    validateLoginPassword(password);
};

module.exports = {
    validateSignupData,
    validateRecruiterSignupData,
    validateStudentUpdateData,
    validateRecruiterUpdateData,
    validateLoginData,
};
