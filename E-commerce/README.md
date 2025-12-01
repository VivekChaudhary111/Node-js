# Shopping App - E-Commerce Platform

A full-stack e-commerce web application built with Node.js, Express.js, MongoDB, and EJS templating engine. This application provides a complete shopping experience with user authentication, product management, shopping cart functionality, and comprehensive review system.

## Features

### User Authentication & Authorization
- User registration and login system powered by Passport.js
- Role-based access control supporting buyer and seller roles
- Secure session management with express-session
- Password encryption using passport-local-mongoose

### Product Management
- Comprehensive product listing with responsive grid layout
- Detailed product pages with image display and descriptions
- Product creation and editing capabilities for sellers
- Product deletion functionality with proper authorization
- Image URL validation and support

### Shopping Cart System
- Add to cart functionality across the platform
- Real-time quantity management with intuitive controls
- Dynamic invoice generation with automatic total calculations
- Remove items functionality with confirmation
- Persistent cart storage in MongoDB database

### Review & Rating System
- Five-star rating system with interactive star selection
- Comment-based reviews with full CRUD operations
- Average rating calculation and display for products
- Review management with deletion capabilities
- Custom CSS styling for star rating visualization

### User Interface & Experience
- Fully responsive design using Bootstrap 5 framework
- Professional landing page with hero section and category showcases
- Modern product cards with smooth hover effects
- Modal-based flash message system for user feedback
- Sticky footer design for consistent layout
- Mobile-friendly navigation with collapsible menu system

## Technology Stack

### Backend Technologies
- Node.js - JavaScript runtime environment
- Express.js - Web application framework
- MongoDB Atlas - Cloud-based NoSQL database
- Mongoose - Object Document Mapper for MongoDB

### Frontend Technologies
- EJS with ejs-mate - Server-side templating engine
- Bootstrap 5 - CSS framework for responsive design
- Font Awesome - Icon library for UI elements
- Custom CSS - Specialized styling for components

### Authentication & Security
- Passport.js - Authentication middleware
- Passport-Local - Local authentication strategy
- Express-Session - Session management middleware
- Connect-Flash - Flash message middleware

### Validation & Middleware
- Joi - Schema validation library
- Method-Override - HTTP method override middleware
- Custom middleware functions for authorization and validation

## Project Architecture

```
E-commerce/
├── models/
│   ├── Product.js          # Product schema and model
│   ├── Review.js           # Review schema and model
│   └── User.js             # User schema with cart functionality
├── routes/
│   ├── auth.js             # Authentication route handlers
│   ├── cart.js             # Shopping cart route handlers
│   ├── product.js          # Product CRUD route handlers
│   └── review.js           # Review management route handlers
├── views/
│   ├── layouts/
│   │   └── boiler-plate.ejs # Main layout template
│   ├── partials/
│   │   ├── navbar.ejs      # Navigation component
│   │   ├── footer.ejs      # Footer component
│   │   └── flash.ejs       # Flash message modal component
│   ├── auth/
│   │   ├── login.ejs       # User login form
│   │   └── signup.ejs      # User registration form
│   ├── products/
│   │   ├── index.ejs       # Product listing page
│   │   ├── show.ejs        # Product detail page
│   │   ├── new.ejs         # Product creation form
│   │   └── edit.ejs        # Product editing form
│   ├── cart/
│   │   └── index.ejs       # Shopping cart page
│   ├── landing.ejs         # Application landing page
│   └── error.ejs           # Error handling page
├── public/
│   └── css/
│       └── star.css        # Star rating component styles
├── middleware.js           # Custom middleware functions
├── schema.js               # Joi validation schemas
├── seed.js                 # Database seeding utility
├── app.js                  # Main application entry point
└── package.json            # Project dependencies and scripts
```

## Installation & Setup

### Prerequisites
- Node.js version 14 or higher
- MongoDB Atlas account or local MongoDB installation
- Git version control system

### Installation Steps

**Step 1: Clone the Repository**
```bash
git clone <repository-url>
cd E-commerce
```

**Step 2: Install Dependencies**
```bash
npm install
```

**Step 3: Database Configuration**
The application is configured to use MongoDB Atlas. The connection string is set in `app.js`:
```javascript
mongoose.connect('mongodb://127.0.0.1:27017/shopping-app-v1')
```

**Step 4: Database Seeding (Optional)**
To populate the database with sample products, uncomment the `seedDB()` function call in `app.js` and restart the server.

**Step 5: Start the Application**
```bash
npm start
```

The application will be accessible at `http://localhost:8080`

## Usage Guide

### For Buyers
1. Create a buyer account through the registration page
2. Browse available products on the products page
3. View detailed product information by clicking on any product
4. Add desired items to cart from product detail pages
5. Manage cart contents including quantity adjustments and total calculations
6. Submit reviews and ratings for purchased products

### For Sellers
1. Register as a seller during account creation
2. Access product management through the "Add Product" navigation link
3. Create new product listings with images, descriptions, and pricing
4. Edit existing product information and manage inventory
5. Monitor and manage product reviews and ratings

### Navigation Structure
- **Home** - Application landing page with featured products
- **Products** - Complete product catalog with search and filtering
- **Cart** - Shopping cart management for authenticated users
- **Authentication** - Login and registration pages

## Core Feature Implementation

### Authentication System
- Secure user registration and login processes
- Role-based access control for buyers and sellers
- Session persistence with 24-hour expiration
- Protected route access with custom middleware

### Shopping Cart Functionality
- Client-side quantity management with JavaScript
- Real-time invoice calculation and display
- Persistent cart storage in MongoDB
- Professional checkout interface design

### Review System Implementation
- Interactive five-star rating interface
- Average rating calculation across all reviews
- User-friendly review submission process
- Complete review management capabilities

### Responsive Design Strategy
- Mobile-first development approach using Bootstrap 5
- Collapsible navigation for mobile devices
- Adaptive grid layouts for various screen sizes
- Touch-optimized interface elements

## User Interface Components

### Landing Page Design
- Hero section with compelling call-to-action
- Category showcase with high-quality imagery
- Featured products grid layout
- Statistics section highlighting platform metrics
- Professional design with smooth animations

### Product Card System
- Uniform card heights with flexible content arrangement
- Image containers with gradient backgrounds
- Smooth hover effects and transitions
- Clear pricing and action button placement

### Flash Message System
- Modal-based notification system
- Distinct styling for success and error states
- Automatic triggering with appropriate icons
- Professional and user-friendly design

## Security Implementation

- Password hashing using passport-local-mongoose
- Session-based authentication with secure cookies
- CSRF protection through proper form handling
- Input validation using Joi schemas
- Authorization middleware for protected routes

## Responsive Design Support

The application provides full responsive support across:
- Desktop computers (1200px and above)
- Tablet devices (768px to 1199px)
- Mobile phones (below 768px)

## Deployment Considerations

The application is deployment-ready for platforms including:
- Heroku
- Vercel
- Railway
- DigitalOcean

### Production Setup Requirements
1. Configure environment variables for sensitive data
2. Set up production database connections
3. Update session settings for production environment
4. Configure HTTPS and security headers

## Contributing Guidelines

1. Fork the repository to your GitHub account
2. Create a feature branch for your contributions
3. Commit changes with descriptive commit messages
4. Push changes to your feature branch
5. Submit a pull request for review

## License Information

This project is licensed under the ISC License.

## Development Team

**Vivek Chaudhary**
- Full-stack web application developer
- Specializing in Node.js and Express.js development

## Support & Contact

For technical support, bug reports, or feature requests, please create an issue in the project repository or contact the development team directly.

---

**Experience seamless online shopping with our comprehensive e-commerce platform.**
