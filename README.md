# 🏨 Hotel Booking Web Application

A modern, full-stack hotel booking application built with React and Node.js, featuring an intuitive admin dashboard for hotel management, review moderation, and analytics.

![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18.0.0-green?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express-4.18.0-black?style=for-the-badge&logo=express)
![Vite](https://img.shields.io/badge/Vite-5.0.0-purple?style=for-the-badge&logo=vite)

## 📋 Table of Contents

- [Features](#-features)
- [Demo](#-demo)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Documentation](#-api-documentation)
- [Project Structure](#-project-structure)
- [Technologies Used](#-technologies-used)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 🎯 Core Functionality
- **Hotel Management**: Add, edit, and manage hotel listings with detailed information
- **Review Moderation**: Moderate user reviews with flagging and deletion capabilities
- **Analytics Dashboard**: Real-time booking trends and statistical insights
- **Responsive Design**: Modern UI that works seamlessly across all devices

### 🎨 User Interface
- **Modern Design**: Clean, intuitive interface with smooth animations
- **Admin Dashboard**: Centralized control panel for all administrative tasks
- **Interactive Components**: Hover effects, transitions, and dynamic content loading
- **Cross-browser Compatibility**: Optimized for Chrome, Firefox, Safari, and Edge

## 🚀 Demo

### Screenshots
- **Admin Dashboard**: Centralized management interface
- **Hotel Manager**: Add and manage hotel listings
- **Review Moderation**: Moderate user-generated content
- **Analytics Panel**: Data visualization and insights

## 🛠️ Installation

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)
- Git

### Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/duffymelancholic/Hotel-Booking-webapp.git
   cd Hotel-Booking-webapp
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

## 🎮 Usage

### Development Mode

1. **Start the Backend Server**
   ```bash
   cd backend
   npm start
   ```
   Server will run on `http://localhost:5000`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   Application will be available at `http://localhost:5173`

3. **Access the Application**
   - Open your browser and navigate to `http://localhost:5173`
   - You'll be redirected to the Admin Dashboard

### Production Build

1. **Build the Frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Serve the Production Build**
   ```bash
   npm run preview
   ```

## 📚 API Documentation

### Hotel Management
- `GET /api/hotels` - Retrieve all hotel listings
- `POST /api/hotels` - Add a new hotel
- `PUT /api/hotels/:id` - Update hotel information
- `DELETE /api/hotels/:id` - Remove a hotel

### Review Management
- `GET /api/reviews` - Get all user reviews
- `POST /api/reviews` - Submit a new review
- `PUT /api/reviews/:id/flag` - Flag inappropriate content
- `DELETE /api/reviews/:id` - Remove a review

### Analytics
- `GET /api/analytics` - Retrieve booking analytics and trends
- `GET /api/analytics/revenue` - Get revenue statistics
- `GET /api/analytics/bookings` - Get booking statistics

## 📁 Project Structure

```
Hotel-Booking-webapp/
├── 📁 backend/
│   ├── 📄 index.js              # Express server & API endpoints
│   ├── 📄 package.json          # Backend dependencies
│   └── 📄 eslint.config.js      # ESLint configuration
├── 📁 frontend/
│   ├── 📁 public/
│   │   └── 📄 vite.svg          # Vite logo
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   │   ├── 📄 AdminDashboard.jsx    # Main dashboard
│   │   │   ├── 📄 AnalyticsPanel.jsx    # Analytics interface
│   │   │   ├── 📄 BookingForm.jsx       # Booking form
│   │   │   ├── 📄 Confirmation.jsx      # Booking confirmation
│   │   │   ├── 📄 ContactForm.jsx       # Contact form
│   │   │   ├── 📄 Home.jsx              # Home page
│   │   │   ├── 📄 HotelCard.jsx         # Hotel display card
│   │   │   ├── 📄 HotelList.jsx         # Hotel listing
│   │   │   ├── 📄 HotelManager.jsx      # Hotel management
│   │   │   ├── 📄 Login.jsx             # Authentication
│   │   │   ├── 📄 Navbar.jsx            # Navigation bar
│   │   │   ├── 📄 Payment.jsx           # Payment processing
│   │   │   └── 📄 ReviewModeration.jsx  # Review management
│   │   ├── 📄 App.jsx                   # Main application
│   │   ├── 📄 App.css                   # Global styles
│   │   ├── 📄 index.css                 # Base styles
│   │   ├── 📄 main.jsx                  # Application entry
│   │   └── 📄 Search.jsx                # Search functionality
│   ├── 📄 index.html                   # HTML template
│   ├── 📄 package.json                 # Frontend dependencies
│   ├── 📄 vite.config.js               # Vite configuration
│   └── 📄 eslint.config.js             # ESLint configuration
├── 📄 hotels.json                      # Sample hotel data
├── 📄 reviews.json                     # Sample review data
├── 📄 package.json                     # Root package.json
└── 📄 README.md                        # Project documentation
```

## 🛠️ Technologies Used

### Frontend
- **React 19** - Modern UI library for building user interfaces
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **CSS3** - Modern styling with animations and responsive design

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **JSON** - Data storage (mock database)

### Development Tools
- **ESLint** - Code linting and quality assurance
- **Git** - Version control
- **npm** - Package management

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you encounter any issues or have questions:

- **Create an Issue**: [GitHub Issues](https://github.com/duffymelancholic/Hotel-Booking-webapp/issues)
- **Email**: [Your Email]
- **Documentation**: Check the [Wiki](https://github.com/duffymelancholic/Hotel-Booking-webapp/wiki)

---

<div align="center">
  <p>Made with ❤️ by the Hotel Booking Team</p>
  <p>
    <a href="https://github.com/duffymelancholic/Hotel-Booking-webapp/stargazers">
      <img src="https://img.shields.io/github/stars/duffymelancholic/Hotel-Booking-webapp" alt="Stars">
    </a>
    <a href="https://github.com/duffymelancholic/Hotel-Booking-webapp/network">
      <img src="https://img.shields.io/github/forks/duffymelancholic/Hotel-Booking-webapp" alt="Forks">
    </a>
    <a href="https://github.com/duffymelancholic/Hotel-Booking-webapp/issues">
      <img src="https://img.shields.io/github/issues/duffymelancholic/Hotel-Booking-webapp" alt="Issues">
    </a>
  </p>
</div>
