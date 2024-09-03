# MERN + PostgreSQL Ed-Tech Application

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
This project is a full-stack educational technology (Ed-Tech) application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js) with PostgreSQL integration. The application is designed to guide students through a structured learning process divided into multiple phases, each containing a set of questions. Admins can manage the content, track student progress, and provide feedback.

## Features
### User Roles
- **Admin**: 
  - Manage phases and questions.
  - Monitor student progress and provide feedback.
  - Enable or disable phases or specific questions.
  - Manage additional resources linked to each phase.
- **Students**: 
  - Register and log in.
  - Progress through phases and answer questions.
  - Track progress and receive feedback.

### Core Features
- **User Authentication**: Secure login with traditional email/password or Google OAuth.
- **Phases and Questions Management**: Admins can create, edit, and manage phases and questions.
- **Student Interaction**: Students progress through phases and receive feedback.
- **Admin Dashboard**: A comprehensive dashboard for managing students, phases, and content.
- **Progress Tracking and Feedback**: Automated tracking of student progress with feedback features.
- **Analytics and Reporting**: Generate reports on student performance and engagement.
- **Notifications**: Notify students of updates and feedback.

## Technology Stack
- **Frontend**: 
  - React.js
  - CSS (Material-UI)
  - Axios for API requests
- **Backend**: 
  - Node.js
  - Express.js
  - Sequelize ORM for PostgreSQL
  - Mongoose for MongoDB
- **Databases**: 
  - PostgreSQL for primary application data
  - MongoDB for metadata and logs
- **Authentication**: 
  - Passport.js with JWT and Google OAuth
- **Deployment**: 
  - Backend: AWS / Heroku
  - Frontend: Netlify / Vercel

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/ed-tech-app.git
   cd ed-tech-app
