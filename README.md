# Hack Backend API

A secure and scalable backend API built with Node.js, Express, and MongoDB, featuring JWT authentication and role-based authorization.

## Features

- 🔐 JWT-based Authentication
- 👥 User Management
- 👮‍♂️ Role-based Authorization (User/Admin)
- 🔒 Password Hashing
- 🛡️ Security Middleware
- 🎯 Error Handling
- 📝 Request Validation

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hack-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/hack-backend
JWT_SECRET=your_jwt_secret_here
```

## Running the Application

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### Authentication

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### User Management

#### Get Current User
```http
GET /api/users/me
Authorization: Bearer <token>
```

#### Update User
```http
PUT /api/users/me
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Updated Name",
  "email": "updated@example.com"
}
```

#### Delete User
```http
DELETE /api/users/me
Authorization: Bearer <token>
```

### Admin Routes

#### Get All Users
```http
GET /api/users
Authorization: Bearer <admin_token>
```

#### Get User by ID
```http
GET /api/users/:id
Authorization: Bearer <admin_token>
```

#### Update User Role
```http
PUT /api/users/:id/role
Authorization: Bearer <admin_token>
Content-Type: application/json

{
  "role": "admin"
}
```

## Project Structure

```
src/
├── common/
│   ├── config/
│   │   ├── config.js
│   │   └── db.js
│   ├── middleware/
│   │   ├── errorHandler.js
│   │   └── notFoundHandler.js
│   └── utils/
│       └── AppError.js
├── modules/
│   ├── auth/
│   │   ├── controllers/
│   │   │   └── authController.js
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   └── authorize.js
│   │   └── routes/
│   │       └── index.js
│   └── users/
│       ├── controllers/
│       │   └── userController.js
│       ├── models/
│       │   └── User.js
│       └── routes/
│           └── index.js
└── server.js
```

## Security Features

- Password hashing using bcrypt
- JWT token-based authentication
- Role-based access control
- Input validation
- Error handling middleware
- Security headers with helmet
- CORS enabled
- Request logging with morgan

## Error Handling

The API uses a centralized error handling system with custom error classes. All errors are properly formatted and returned to the client with appropriate status codes.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License. 