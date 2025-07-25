# Hotel Booking Web App

A comprehensive full-stack hotel booking application built with modern web technologies. This application provides hotel search, booking functionality, admin dashboard, payment processing, and analytics.

## Project Overview & Description

This Hotel Booking Web App is a complete solution for managing hotel reservations and bookings. It features a user-friendly frontend for customers to search and book hotels, and a robust admin dashboard for hotel management, review moderation, and analytics. The application includes payment processing capabilities and serves as a demonstration of modern full-stack development practices.

### Key Features
- **Hotel Search & Booking**: Search hotels by location, rating, and other criteria
- **Admin Dashboard**: Comprehensive management interface for administrators
- **Hotel Management**: Add, update, and manage hotel listings
- **Review Moderation**: Manage customer reviews and ratings
- **Payment Processing**: Secure payment handling for bookings
- **Analytics Dashboard**: Track bookings, revenue, and performance metrics
- **RESTful API**: Clean API endpoints for all operations

## Tech Stack

### Frontend
- **React 19**: Latest version of React for modern UI development
- **Vite 7**: Lightning-fast development build tool
- **React Router DOM 7**: Client-side routing
- **CSS3**: Modern styling and responsive design
- **ES6+**: Modern JavaScript features

### Backend
- **Express.js 5**: Fast, minimalist web framework for Node.js
- **Node.js**: JavaScript runtime environment
- **CORS**: Cross-origin resource sharing middleware
- **JSON File Storage**: Mock database using JSON files

### Development Tools
- **ESLint 9**: Code linting and quality enforcement
- **Vite Plugin React**: React integration for Vite
- **React Hooks**: Modern React patterns

## Directory / Project Structure

```
Hotel-Booking-webapp/
├── frontend/                    # React frontend application
│   ├── public/                  # Static assets
│   ├── src/                     # Source code
│   │   ├── components/          # React components
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── HotelManager.jsx
│   │   │   ├── ReviewModeration.jsx
│   │   │   └── AnalyticsPanel.jsx
│   │   ├── App.jsx             # Main App component
│   │   ├── App.css             # App styles
│   │   └── main.jsx            # Application entry point
│   ├── index.html              # HTML template
│   ├── package.json            # Frontend dependencies
│   └── vite.config.js          # Vite configuration
├── backend/                     # Express.js backend API
│   ├── node_modules/           # Backend dependencies
│   ├── index.js                # Main server file
│   ├── package.json            # Backend dependencies
│   └── eslint.config.js        # ESLint configuration
├── hotels.json                 # Mock hotel database
├── payments.json               # Payment records storage
├── package.json                # Root dependencies
└── README.md                   # This file
```

## Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js** (v16.0 or higher)
- **npm** (v7.0 or higher) or **yarn**
- **Git** (for cloning the repository)

## Installation Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Hotel-Booking-webapp
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

## Step-by-step Setup

### Backend Setup

1. **Navigate to the backend directory**
   ```bash
   cd backend
   ```

2. **Start the backend server**
   ```bash
   npm start
   # or
   node index.js
   ```

3. **Verify backend is running**
   - The server will start on port 5000 by default
   - Visit `http://localhost:5000` to see the API status
   - API will be available at `http://localhost:5000`

### Frontend Setup

1. **Open a new terminal and navigate to the frontend directory**
   ```bash
   cd frontend
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. **Access the application**
   - The frontend will be available at `http://localhost:5173` (Vite default)
   - The page will automatically reload when you make changes

### Development Workflow

1. Keep both servers running simultaneously
2. Backend serves API endpoints on port 5000
3. Frontend development server runs on port 5173
4. CORS is configured to allow frontend-backend communication

## API Endpoints

### Hotels API

| Method | Endpoint | Description | Sample Request | Sample Response |
|--------|----------|-------------|----------------|------------------|
| GET | `/hotels` | Get all hotels with optional filtering | `GET /hotels?city=london&minRating=8` | `[{hotel_id: 1, hotel_name: "..."}]` |
| GET | `/hotels/:id` | Get specific hotel by ID | `GET /hotels/1` | `{hotel_id: 1, hotel_name: "..."}` |
| POST | `/hotels` | Add new hotel | `POST /hotels` with hotel data | `{hotel_id: 123, ...}` |
| PUT | `/hotels/:id` | Update existing hotel | `PUT /hotels/1` with updated data | `{hotel_id: 1, ...}` |
| DELETE | `/hotels/:id` | Delete hotel | `DELETE /hotels/1` | `{hotel_id: 1, ...}` |

### Payments API

| Method | Endpoint | Description | Sample Request | Sample Response |
|--------|----------|-------------|----------------|------------------|
| POST | `/payments` | Process a payment | `POST /payments` with payment data | `{id: 1, amount: 100, ...}` |
| GET | `/payments` | Get all payments | `GET /payments` | `[{id: 1, amount: 100, ...}]` |

### Sample API Requests

**Create a new hotel:**
```json
POST /hotels
{
  "hotel_name": "Grand Plaza Hotel",
  "city": "New York",
  "country": "United States",
  "star_rating": 5,
  "rates_from": 299,
  "rating_average": 8.9
}
```

**Process a payment:**
```json
POST /payments
{
  "amount": 299.99,
  "currency": "USD",
  "name": "John Doe",
  "email": "john@example.com",
  "hotel_id": 1
}
```

## Features

### Core Features
- **Hotel Search**: Filter hotels by city, country, minimum rating
- **Hotel Booking**: Complete booking workflow with payment processing
- **Admin Dashboard**: Centralized management interface
- **Payment Integration**: Secure payment processing and recording
- **Review System**: Customer review management and moderation
- **Analytics**: Business intelligence and reporting

### Admin Dashboard Features
- **Hotel Management**: Add, edit, and delete hotel listings
- **Review Moderation**: Approve, reject, and manage customer reviews
- **Analytics Panel**: View booking statistics and performance metrics
- **Payment Tracking**: Monitor and manage payment transactions

### User Experience Features
- **Responsive Design**: Mobile-friendly interface
- **Real-time Updates**: Dynamic content updates
- **Search Functionality**: Advanced filtering and search options
- **Image Gallery**: Hotel photo management and display

## Screenshots / Demo

*Screenshots and demo links will be added here once available*

### Planned Screenshots:
- [ ] Home page with hotel search
- [ ] Hotel listing and details page
- [ ] Booking confirmation flow  
- [ ] Admin dashboard overview
- [ ] Hotel management interface
- [ ] Analytics panel
- [ ] Payment processing page

### Live Demo
*Demo URL will be provided when deployed*

## Contributing Guidelines

We welcome contributions to improve the Hotel Booking Web App! Please follow these guidelines:

### Getting Started
1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Create a new branch** for your feature/fix
4. **Make your changes** following our coding standards
5. **Test your changes** thoroughly
6. **Submit a pull request**

### Branch Naming Convention
- Feature branches: `feature/description-of-feature`
- Bug fixes: `fix/description-of-fix`
- Documentation: `docs/description-of-update`
- Refactoring: `refactor/description-of-refactor`

Example: `feature/add-user-authentication`

### Pull Request Rules
1. **One feature per PR** - Keep pull requests focused and manageable
2. **Clear description** - Explain what your PR does and why
3. **Update documentation** - Include relevant documentation updates
4. **Add tests** - Include tests for new functionality
5. **Follow coding standards** - Maintain consistent code style
6. **Rebase before submitting** - Keep commit history clean

### Code Style Guidelines
- **JavaScript**: Follow ESLint configuration provided
- **React**: Use functional components with hooks
- **CSS**: Use meaningful class names and maintain consistency
- **API**: Follow RESTful conventions
- **Comments**: Add comments for complex logic

### Testing Requirements
- All new features must include appropriate tests
- Ensure existing tests pass before submitting
- Test both frontend and backend functionality
- Include edge cases in your tests

### Reporting Issues
When reporting bugs or requesting features:
1. Use the appropriate issue template
2. Provide clear reproduction steps
3. Include environment details
4. Add screenshots if applicable

## License

This project is licensed under the **ISC License**.

```
ISC License

Copyright (c) 2024 Hotel Booking Web App

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
```

## Contact Information

### Maintainer
- **Email**: [maintainer@example.com](mailto:maintainer@example.com)
- **GitHub**: [@maintainer-username](https://github.com/maintainer-username)

### Project Links
- **Repository**: [Hotel-Booking-webapp](https://github.com/username/Hotel-Booking-webapp)
- **Issues**: [Report Issues](https://github.com/username/Hotel-Booking-webapp/issues)
- **Discussions**: [Project Discussions](https://github.com/username/Hotel-Booking-webapp/discussions)

### Support
For support and questions:
- Create an issue on GitHub
- Join our community discussions
- Contact the maintainer directly

---

**Happy Coding!** 🏨✨

*Last updated: December 2024*
