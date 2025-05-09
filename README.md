# NestJS Gateway

A modern API Gateway built with NestJS framework, designed to handle and route requests efficiently.

## Description

This project is a NestJS-based API Gateway that serves as an entry point for client applications. It's built using the latest version of NestJS (v11) and follows best practices for API gateway implementation.

## Features

- Built with NestJS v11
- Express.js as the underlying HTTP framework
- JSON request body size limit of 10MB
- TypeScript support
- Comprehensive testing setup with Jest
- ESLint and Prettier for code formatting
- Development and production configurations
- File upload support
- Multiple service routing capabilities

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

## Installation

```bash
# Clone the repository
git clone [your-repository-url]

# Navigate to the project directory
cd nestjs-gateway

# Install dependencies
npm install
```

## Running the Application

```bash
# Development mode
npm run start:dev

# Production mode
npm run start:prod

# Debug mode
npm run start:debug
```

## Available Scripts

- `npm run build` - Build the application
- `npm run format` - Format code using Prettier
- `npm run start` - Start the application
- `npm run start:dev` - Start the application in watch mode
- `npm run start:debug` - Start the application in debug mode
- `npm run start:prod` - Start the application in production mode
- `npm run lint` - Lint the code
- `npm run test` - Run unit tests
- `npm run test:watch` - Run unit tests in watch mode
- `npm run test:cov` - Run unit tests with coverage
- `npm run test:debug` - Run unit tests in debug mode
- `npm run test:e2e` - Run end-to-end tests

## Project Structure

```
src/
├── common/         # Common utilities and shared code
│   └── constants.ts # Service URLs and configuration
├── gateway/        # Gateway-specific implementations
│   ├── gateway.controller.ts # Route handlers
│   └── gateway.service.ts    # Business logic
├── app.module.ts   # Root application module
└── main.ts         # Application entry point
```

## API Documentation

The API Gateway runs on port 3000 by default. You can access it at `http://localhost:3000`.

### Available Routes

#### POST /gateway/:service
Handles requests to different services with file upload support.

**Parameters:**
- `service` (path parameter): The target service to route the request to
  - Available services: service1, service2, service3, service4

**Request Body:**
- `file` (multipart/form-data): File to be uploaded
- `text` (form-data): Text content to be processed

**Example Request:**
```bash
curl -X POST http://localhost:3000/gateway/service1 \
  -F "file=@/path/to/file" \
  -F "text=your text content"
```

### Service Endpoints

The gateway routes requests to the following services:

#### AI Services
| Service Name | Endpoint URL |
|--------------|--------------|
| Service 1    | `http://localhost:8001/analyze` |
| Service 2    | `http://localhost:8002/analyze` |
| Service 3    | `http://localhost:8003/analyze` |
| Service 4    | `http://localhost:8004/analyze` |

#### Document Parser
| Service Name | Endpoint URL |
|--------------|--------------|
| Document Parser | `http://localhost:9000/parse` |

### Response Format

The gateway returns responses in the following format:

```json
{
  "text": "combined text content from input and parsed file"
}
```

## Testing

The project uses Jest as its testing framework. You can run tests using the following commands:

```bash
# Unit tests
npm run test

# e2e tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the UNLICENSED License - see the package.json file for details.
