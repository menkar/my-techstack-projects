# Learning Management System (LMS)

A modern, scalable Learning Management System built with NestJS and MongoDB. This application provides secure authentication, user management, and a robust foundation for educational platform functionality.

## Features

### Authentication & Security
- **User Registration**: Register new users with email and password
- **User Login**: Secure login with JWT token-based authentication
- **Password Security**: Bcrypt hashing with salt rounds (10) for passwords
- **JWT Tokens**: JSON Web Token-based authentication for protected routes
- **Protected Routes**: Use JWT guards to protect endpoints

### User Management
- **User Profiles**: Retrieve and manage user profile information
- **User Search**: Find users by email address
- **User Validation**: Class-based validation for DTOs

### Database
- **MongoDB Integration**: Using Mongoose ODM for database operations
- **User Schema**: Defined schema for user data with email uniqueness

### Development Experience
- **TypeScript**: Fully typed codebase for better development experience
- **Hot Reloading**: Watch mode for development
- **Comprehensive Testing**: Unit and E2E test suites
- **Code Quality**: ESLint and Prettier for code formatting

## Technology Stack

- **Framework**: NestJS 11.0
- **Language**: TypeScript 5.7
- **Database**: MongoDB with Mongoose 9.6
- **Authentication**: JWT (@nestjs/jwt)
- **Security**: Bcrypt 6.0
- **Validation**: Class-validator & Class-transformer
- **Testing**: Jest 30.0
- **Environment**: Docker Compose support

## Description

A progressive [Node.js](http://nodejs.org) framework for building efficient and scalable server-side applications, specifically configured for a Learning Management System.

## Project setup

```bash
$ pnpm install
```

## API Endpoints

### Authentication Routes (`/auth`)

#### 1. Register User
- **Endpoint**: `POST /auth/register`
- **Description**: Register a new user with email and password
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "securePassword123",
    "name": "John Doe"
  }
  ```
- **Response**:
  ```json
  {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```
- **Status Code**: 201 Created

#### 2. Login User
- **Endpoint**: `GET /auth/login` (Note: Consider changing to POST)
- **Description**: Authenticate user and receive JWT token
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "securePassword123"
  }
  ```
- **Response**:
  ```json
  {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```
- **Status Code**: 200 OK

#### 3. Get User Profile
- **Endpoint**: `GET /auth/profile`
- **Description**: Retrieve authenticated user's profile (requires JWT token)
- **Headers**:
  ```
  Authorization: Bearer <your_jwt_token>
  ```
- **Response**:
  ```json
  {
    "_id": "507f1f77bcf86cd799439011",
    "email": "user@example.com",
    "name": "John Doe",
    "createdAt": "2024-01-15T10:30:00Z"
  }
  ```
- **Status Code**: 200 OK
- **Auth**: Required (JWT Token)

### Application Routes (`/`)

#### Health Check
- **Endpoint**: `GET /`
- **Description**: Basic health check endpoint
- **Response**: Welcome message
- **Status Code**: 200 OK

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Deployment

When you're ready to deploy your NestJS LMS application to production, follow these steps:

1. Build the application:
```bash
$ pnpm run build
```

2. Set up environment variables for production (JWT secret, MongoDB URI, etc.)

3. Run the production build:
```bash
$ pnpm run start:prod
```

For cloud-based deployments, check out [NestJS Mau](https://mau.nestjs.com) for AWS deployment options.

## Docker Support

The project includes Docker Compose configuration for easy local development with MongoDB:

```bash
# Start Docker containers
$ docker compose up -d

# Stop Docker containers
$ docker compose down
```

## Environment Variables

Create a `.env` file in the project root with the following variables:

```env
JWT_SECRET=your_jwt_secret_key_here
MONGODB_URI=mongodb://localhost:27017/lms
NODE_ENV=development
```

## Project Structure

```
src/
├── app.controller.ts        # Main application controller
├── app.module.ts            # Main application module
├── app.service.ts           # Main application service
├── main.ts                  # Application entry point
├── auth/                    # Authentication module
│   ├── auth.controller.ts   # Auth endpoints
│   ├── auth.service.ts      # Auth business logic
│   ├── auth.guard.ts        # JWT authentication guard
│   ├── constants.ts         # Auth constants
│   └── dto/                 # Data Transfer Objects
│       ├── loginUser.dto.ts
│       └── registerUser.dto.ts
└── user/                    # User management module
    ├── user.service.ts      # User business logic
    ├── user.types.ts        # TypeScript types
    └── schemas/
        └── user.schema.ts   # MongoDB user schema
```

## Resources

### NestJS Documentation
- [NestJS Official Documentation](https://docs.nestjs.com) - Complete guide to the framework
- [JWT Authentication](https://docs.nestjs.com/security/authentication) - JWT implementation guide
- [Guards](https://docs.nestjs.com/guards) - Guards documentation for protecting routes
- [Mongoose Integration](https://docs.nestjs.com/techniques/mongodb) - MongoDB/Mongoose setup

### Technology Docs
- [MongoDB Documentation](https://docs.mongodb.com/) - Database documentation
- [Mongoose Documentation](https://mongoosejs.com/) - ODM documentation
- [JWT (json web token)](https://jwt.io/) - JWT standard reference
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js) - Password hashing library

### Learning Resources
- [NestJS Discord Community](https://discord.gg/G7Qnnhy) - Ask questions and get help
- [NestJS Video Courses](https://courses.nestjs.com/) - Official video tutorials
- [Debugging NestJS Applications](https://docs.nestjs.com/recipes/terminal-logger) - Debug guide

## Common Commands

```bash
# Development with hot reload
$ pnpm run start:dev

# Debug mode
$ pnpm run start:debug

# Run tests with coverage
$ pnpm run test:cov

# Format code
$ pnpm run format

# Lint code
$ pnpm run lint
```

## Support

This is an open source project built with [NestJS](https://nestjs.com). For questions and support:
- Visit our [GitHub](https://github.com/nestjs/nest) 
- Join the [Discord community](https://discord.gg/G7Qnnhy)
- Check the [documentation](https://docs.nestjs.com)

## Authors

- NestJS Team - [https://nestjs.com](https://nestjs.com)
- Framework: [Kamil Myśliwiec](https://twitter.com/kammysliwiec)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
