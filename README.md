# roxboro-medical-office-react
Modern React application for Roxboro Medical Office - A professional medical office leasing platform featuring property listings, tour scheduling, and contact management. Built with React, React Router, and CSS Modules following enterprise-level architecture patterns.

 **Note:** This is an educational portfolio project built from scratch to demonstrate React development skills and modern frontend architecture. Not affiliated with any official medical office.

 ## 🎯 Project Overview

A comprehensive medical office leasing platform featuring property listings, interactive tour scheduling, detailed property information, and contact management. Built with React to showcase modern web development practices and clean architecture principles.

### Live Demo
🚧 *Coming Soon* - Currently in development


## ✨ Features

### Current Features
- ✅ Responsive navigation header
- ✅ Hero section with background imagery
- ✅ Reusable component library (Button, Input, Card)
- ✅ CSS Modules for scoped styling
- ✅ Clean folder structure


### Planned Features
- 🔄 Interactive tour booking form with validation
- 🔄 Property details page with image gallery
- 🔄 FAQ accordion component
- 🔄 Contact form with email integration
- 🔄 Multi-page routing with React Router
- 🔄 Proximity/location map integration
- 🔄 Responsive mobile design
- 🔄 Loading states and error handling
- 🔄 Form validation and user feedback
- 🔄 Custom React hooks for reusable logic

## 🛠️ Tech Stack

### Core Technologies
- **React 18** - UI library with hooks
- **React Router v6** - Client-side routing
- **CSS Modules** - Scoped component styling
- **JavaScript ES6+** - Modern JavaScript features

### Development Tools
- **Create React App** - Build tooling and configuration
- **Git** - Version control
- **npm** - Package management

### Future Additions
- TypeScript (planned)
- React Testing Library (planned)
- ESLint & Prettier (planned)

## 📂 Project Architecture

roxboro-medical-office-react/
├── src/
│   ├── components/
│   │   ├── common/                    # Reusable UI components
│   │   │   ├── Button/
│   │   │   │   ├── Button.jsx
│   │   │   │   └── Button.module.css
│   │   │   ├── Input/
│   │   │   │   ├── Input.jsx
│   │   │   │   └── Input.module.css
│   │   │   ├── Card/
│   │   │   │   ├── Card.jsx
│   │   │   │   └── Card.module.css
│   │   │   └── Badge/
│   │   │       ├── Badge.jsx          # "NOW LEASING" badge
│   │   │       └── Badge.module.css
│   │   │
│   │   ├── layout/                     # Layout components
│   │   │   ├── Header/
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Navigation.jsx
│   │   │   │   └── Header.module.css
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── Footer.module.css
│   │   │   └── Layout.jsx              # Wrapper for all pages
│   │   │
│   │   └── features/                   # Feature-specific components
│   │       ├── TourForm/
│   │       │   ├── TourForm.jsx        # Schedule tour form
│   │       │   └── TourForm.module.css
│   │       ├── LeaseCard/
│   │       │   ├── LeaseCard.jsx       # Lease details card
│   │       │   └── LeaseCard.module.css
│   │       ├── PropertyFeatures/
│   │       │   ├── FeatureGrid.jsx     # 4-card grid
│   │       │   ├── FeatureCard.jsx
│   │       │   └── Features.module.css
│   │       ├── ContactForm/
│   │       │   ├── ContactForm.jsx     # Full contact form
│   │       │   └── ContactForm.module.css
│   │       ├── FAQ/
│   │       │   ├── FAQSection.jsx      # Accordion
│   │       │   ├── FAQItem.jsx
│   │       │   └── FAQ.module.css
│   │       └── ProximityList/
│   │           ├── ProximityList.jsx   # Nearby locations
│   │           └── ProximityList.module.css
│   │
│   ├── pages/                          # Page-level components
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   ├── sections/
│   │   │   │   ├── HeroSection.jsx
│   │   │   │   ├── InfoSection.jsx
│   │   │   │   ├── LeaseSection.jsx
│   │   │   │   ├── FeaturesSection.jsx
│   │   │   │   └── CTASection.jsx
│   │   │   └── Home.module.css
│   │   │
│   │   ├── PropertyDetail/
│   │   │   ├── PropertyDetail.jsx
│   │   │   ├── sections/
│   │   │   │   ├── PropertyHero.jsx
│   │   │   │   ├── AboutProperty.jsx
│   │   │   │   ├── LeasingSummary.jsx
│   │   │   │   ├── Neighborhood.jsx
│   │   │   │   └── FAQSection.jsx
│   │   │   └── PropertyDetail.module.css
│   │   │
│   │   └── Contact/
│   │       ├── Contact.jsx
│   │       ├── sections/
│   │       │   ├── ContactHero.jsx
│   │       │   ├── InquiryForm.jsx
│   │       │   └── DirectionsMap.jsx
│   │       └── Contact.module.css
│   │
│   ├── hooks/                          # Custom hooks
│   │   ├── useForm.js                  # Form validation logic
│   │   ├── useToggle.js                # FAQ accordion toggle
│   │   └── useScrollToTop.js           # Route change scroll
│   │
│   ├── services/                       # API/Services
│   │   ├── emailService.js             # Send tour requests
│   │   └── api.js                      # API configuration
│   │
│   ├── utils/                          # Utilities
│   │   ├── validation.js               # Email, phone validation
│   │   ├── constants.js                # Site constants
│   │   └── helpers.js                  # Helper functions
│   │
│   ├── data/                           # Static data
│   │   ├── propertyData.js             # Property details
│   │   ├── featuresData.js             # Medical features
│   │   ├── faqData.js                  # FAQ questions
│   │   └── proximityData.js            # Nearby locations
│   │
│   ├── styles/                         # Global styles
│   │   ├── variables.css               # CSS variables
│   │   ├── global.css                  # Global styles
│   │   └── utilities.css               # Utility classes
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx               # Route definitions
│   │
│   ├── App.jsx
│   ├── index.js
│   └── index.css
│
├── public/
│   ├── images/
│   │   ├── hero-building.jpg
│   │   ├── property-interior.jpg
│   │   └── logo.png
│   └── index.html
│
└── package.json
