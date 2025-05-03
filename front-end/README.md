# Shopping App - Frontend

## Overview
This is the frontend application for the Shopping App, a modern e-commerce platform built with Angular 19. The application provides a responsive user interface with features like product browsing, interactive shopping cart with special offers, and a fully mobile responsive design.

## Technology Stack
- **Angular 19**: Latest version with improved performance and features
- **PrimeNG**: Rich set of UI components with built-in accessibility and theming support
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **RxJS**: Reactive programming library for handling asynchronous operations
- **Angular Signals**: For efficient state management

## Requirements
- Node.js 18.x or later
- npm 8.x or later
- Angular CLI 19.x

## Project Structure
```
front-end/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── cart-modal/
│   │   │   ├── product-card/
│   │   │   └── ...
│   │   ├── layout/
│   │   ├── pages/
│   │   ├── services/
│   │   └── ...
│   ├── assets/
│   ├── environments/
│   └── styles/
└── ...
```

## Features
- **Responsive Design**: Mobile-first approach ensuring the app looks great on all devices
- **Shopping Cart**: Interactive cart with special offers like 1+1 and 3-for-2 deals
- **Theming Options**: Dynamic theme switching with light and dark mode support
- **Performance Optimized**: Using Angular Signals for reactive state management
- **Google Maps Integration**: Store locator with interactive map interface
- **Lazy Loading**: Modules loaded on demand to improve initial load time

## Installation
```bash
# Clone the repository
git clone <repository-url>

# Navigate to the frontend directory
cd shopping-app/front-end

# Install dependencies
npm install
```

## Development Server
```bash
# Start the development server
ng serve
# or
npm start
```
Navigate to `http://localhost:4200/` to access the application.

## Build
```bash
# Build the app for production
ng build --prod
```

## Additional Commands
```bash
# Run tests
ng test

# Run linting
ng lint

# Run e2e tests
ng e2e
```

## Connecting to Backend
By default, the application connects to the backend running at `http://localhost:3000`. This can be modified in the environment configuration.

## Live Demo
Visit [https://shopbychirag.netlify.app/](https://shopbychirag.netlify.app/) to see the live demo.

## Documentation
For more detailed documentation, run the application and visit the /documentation route.