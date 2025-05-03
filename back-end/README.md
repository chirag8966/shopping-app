# Shopping App - Backend

## Overview
This is the backend application for the Shopping App, providing API endpoints for product and offer management. It's built with NestJS and connects to a PostgreSQL database to store and retrieve data.

## Technology Stack
- **NestJS**: Progressive Node.js framework for building server-side applications
- **TypeORM**: Object-Relational Mapper for TypeScript and JavaScript
- **PostgreSQL**: Powerful, open-source object-relational database
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript

## Requirements
- Node.js 18.x or later
- npm 8.x or later
- PostgreSQL 14.x or later

## Project Structure
```
back-end/
├── src/
│   ├── products/
│   │   ├── entities/
│   │   │   └── product.entity.ts
│   │   ├── products.controller.ts
│   │   ├── products.module.ts
│   │   └── products.service.ts
│   ├── offers/
│   │   ├── entities/
│   │   │   └── offer.entity.ts
│   │   ├── offers.controller.ts
│   │   ├── offers.module.ts
│   │   └── offers.service.ts
│   ├── database/
│   │   └── seed.ts
│   ├── app.module.ts
│   ├── app.controller.ts
│   ├── app.service.ts
│   └── main.ts
├── .env
└── ...
```

## API Endpoints
- **GET /products**: Fetch all products
- **GET /products/:id**: Fetch a specific product by ID
- **GET /offers**: Fetch all available offers
- **GET /offers/:id**: Fetch a specific offer by ID

## Installation
```bash
# Clone the repository
git clone <repository-url>

# Navigate to the backend directory
cd shopping-app/back-end

# Install dependencies
npm install
```

## Database Setup
1. Make sure PostgreSQL is installed and running
2. Create a database named "postgres" (or customize in .env)
3. Configure your database connection in the `.env` file:
```
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=secret
DB_NAME=postgres
```

## Seeding the Database
```bash
# Run the database seeder
npm run seed
```

## Development Server
```bash
# Start the development server
npm run start:dev
```
The API will be available at `http://localhost:3000`.

## Build
```bash
# Build the app for production
npm run build
```

## Additional Commands
```bash
# Run tests
npm run test

# Run linting
npm run lint
```

## Integration with Frontend
The backend is designed to work with the Shopping App frontend, which connects to these API endpoints for product and offer data.