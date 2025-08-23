const request = require('supertest');
const app = require('../App');
const mongoose = require('mongoose');
const StudentModel = require('../MODELS/Student');
const RecruiterModel = require('../MODELS/Recruiter');

jest.setTimeout(30000); // Increase timeout to 30 seconds

// Test data
const studentData = {
    fname: 'John',
    lname: 'Doe',
    email: 'john.doe@example.com',
    password: 'StrongPass123!',
    phone: 1234567890
};

const recruiterData = {
    companyName: 'Tech Corp',
    contactPerson: 'Alice Smith',
    email: 'alice.smith@techcorp.com',
    password: 'StrongPass123!',
    phone: 9876543210
};

beforeAll(async () => {
  // Connect to the test database
  await mongoose.connect('mongodb://localhost:27017/placement_test');
  await StudentModel.deleteMany({});
  await RecruiterModel.deleteMany({});
});

afterAll(async () => {
  // Clean up test data and close connection
  await StudentModel.deleteMany({});
  await RecruiterModel.deleteMany({});
  await mongoose.connection.close();
});

describe('Student Routes', () => {
    describe('POST /student/register', () => {
        test('should register a new student successfully', async () => {
            const res = await request(app)
                .post('/student/register')
                .send(studentData);
            
            expect(res.statusCode).toBe(201);
            expect(res.body).toEqual({
                success: true,
                message: 'Student registered successfully'
            });
        });

        test('should not register student with existing email', async () => {
            const res = await request(app)
                .post('/student/register')
                .send(studentData);
            
            expect(res.statusCode).toBe(409);
            expect(res.body).toEqual({
                success: false,
                message: 'Email already registered',
                error: 'DUPLICATE_EMAIL'
            });
        });

        test('should not register student with invalid data', async () => {
            const invalidData = {
                fname: 'John',
                lname: 'Doe',
                email: 'invalid-email',
                password: 'weak',
                phone: 'not-a-number'
            };

            const res = await request(app)
                .post('/student/register')
                .send(invalidData);
            
            expect(res.statusCode).toBe(400);
            expect(res.body.success).toBe(false);
            expect(res.body.error).toBe('VALIDATION_ERROR');
        });
    });

    describe('POST /student/login', () => {
        test('should login successfully with correct credentials', async () => {
            const res = await request(app)
                .post('/student/login')
                .send({
                    email: studentData.email,
                    password: studentData.password
                });
            
            expect(res.statusCode).toBe(200);
            expect(res.body).toEqual({
                success: true,
                message: 'Login successful'
            });
        });

        test('should not login with incorrect password', async () => {
            const res = await request(app)
                .post('/student/login')
                .send({
                    email: studentData.email,
                    password: 'wrongpassword'
                });
            
            expect(res.statusCode).toBe(401);
            expect(res.body).toEqual({
                success: false,
                message: 'Invalid credentials',
                error: 'AUTH_ERROR'
            });
        });

        test('should not login with non-existent email', async () => {
            const res = await request(app)
                .post('/student/login')
                .send({
                    email: 'nonexistent@example.com',
                    password: 'anypassword'
                });
            
            expect(res.statusCode).toBe(401);
            expect(res.body).toEqual({
                success: false,
                message: 'Invalid credentials',
                error: 'AUTH_ERROR'
            });
        });
    });

    describe('PUT /student/update', () => {
        test('should update student profile successfully', async () => {
            const updateData = {
                email: studentData.email,
                fname: 'Johnny',
                phone: 9876543210
            };

            const res = await request(app)
                .put('/student/update')
                .send(updateData);
            
            expect(res.statusCode).toBe(200);
            expect(res.body.success).toBe(true);
            expect(res.body.data.fname).toBe('Johnny');
            expect(res.body.data.phone).toBe(9876543210);
        });

        test('should not update non-existent student', async () => {
            const res = await request(app)
                .put('/student/update')
                .send({
                    email: 'nonexistent@example.com',
                    fname: 'New Name'
                });
            
            expect(res.statusCode).toBe(404);
            expect(res.body).toEqual({
                success: false,
                message: 'Student not found',
                error: 'NOT_FOUND'
            });
        });

        test('should not update with invalid data', async () => {
            const res = await request(app)
                .put('/student/update')
                .send({
                    email: studentData.email,
                    phone: 'not-a-number'
                });
            
            expect(res.statusCode).toBe(400);
            expect(res.body.success).toBe(false);
            expect(res.body.error).toBe('VALIDATION_ERROR');
        });
    });
});

describe('Recruiter Routes', () => {
    describe('POST /recruiter/register', () => {
        test('should register a new recruiter successfully', async () => {
            const res = await request(app)
                .post('/recruiter/register')
                .send(recruiterData);
            
            expect(res.statusCode).toBe(201);
            expect(res.body).toEqual({
                success: true,
                message: 'Recruiter registered successfully'
            });
        });

        test('should not register recruiter with existing email', async () => {
            const res = await request(app)
                .post('/recruiter/register')
                .send(recruiterData);
            
            expect(res.statusCode).toBe(409);
            expect(res.body).toEqual({
                success: false,
                message: 'Email already registered',
                error: 'DUPLICATE_EMAIL'
            });
        });

        test('should not register recruiter with invalid data', async () => {
            const invalidData = {
                companyName: 'Tech Corp',
                contactPerson: 'Alice Smith',
                email: 'invalid-email',
                password: 'weak',
                phone: 'not-a-number'
            };

            const res = await request(app)
                .post('/recruiter/register')
                .send(invalidData);
            
            expect(res.statusCode).toBe(400);
            expect(res.body.success).toBe(false);
            expect(res.body.error).toBe('VALIDATION_ERROR');
        });
    });

    describe('POST /recruiter/login', () => {
        test('should login successfully with correct credentials', async () => {
            const res = await request(app)
                .post('/recruiter/login')
                .send({
                    email: recruiterData.email,
                    password: recruiterData.password
                });
            
            expect(res.statusCode).toBe(200);
            expect(res.body).toEqual({
                success: true,
                message: 'Login successful'
            });
        });

        test('should not login with incorrect password', async () => {
            const res = await request(app)
                .post('/recruiter/login')
                .send({
                    email: recruiterData.email,
                    password: 'wrongpassword'
                });
            
            expect(res.statusCode).toBe(401);
            expect(res.body).toEqual({
                success: false,
                message: 'Invalid credentials',
                error: 'AUTH_ERROR'
            });
        });

        test('should not login with non-existent email', async () => {
            const res = await request(app)
                .post('/recruiter/login')
                .send({
                    email: 'nonexistent@example.com',
                    password: 'anypassword'
                });
            
            expect(res.statusCode).toBe(401);
            expect(res.body).toEqual({
                success: false,
                message: 'Invalid credentials',
                error: 'AUTH_ERROR'
            });
        });
    });

    describe('PUT /recruiter/update', () => {
        test('should update recruiter profile successfully', async () => {
            const updateData = {
                email: recruiterData.email,
                companyName: 'New Tech Corp',
                phone: 1234567890
            };

            const res = await request(app)
                .put('/recruiter/update')
                .send(updateData);
            
            expect(res.statusCode).toBe(200);
            expect(res.body.success).toBe(true);
            expect(res.body.data.companyName).toBe('New Tech Corp');
            expect(res.body.data.phone).toBe(1234567890);
        });

        test('should not update non-existent recruiter', async () => {
            const res = await request(app)
                .put('/recruiter/update')
                .send({
                    email: 'nonexistent@example.com',
                    companyName: 'New Company'
                });
            
            expect(res.statusCode).toBe(404);
            expect(res.body).toEqual({
                success: false,
                message: 'Recruiter not found',
                error: 'NOT_FOUND'
            });
        });

        test('should not update with invalid data', async () => {
            const res = await request(app)
                .put('/recruiter/update')
                .send({
                    email: recruiterData.email,
                    phone: 'not-a-number'
                });
            
            expect(res.statusCode).toBe(400);
            expect(res.body.success).toBe(false);
            expect(res.body.error).toBe('VALIDATION_ERROR');
        });
    });
});
