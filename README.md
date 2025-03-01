# Auction App

A simple and beginner-friendly auction application built with **React**, **Vite**, **React Router**, and **Express.js**. This app allows users to sign up, sign in, post auctions, place bids, and view auction details.

---

## Features Implemented So Far

1. **Authentication**:
   - Users can sign up and sign in.
   - Passwords are securely hashed using **bcryptjs**.
   - Protected routes for authenticated users (e.g., `/dashboard`, `/post-auction`).

2. **Auction Management**:
   - Users can post new auction items with details like item name, description, starting bid, and closing time.
   - Users can view a list of auction items on the dashboard.
   - Users can place bids on specific auction items.
   - Users can edit or delete auction items they have posted.

3. **Bidding System**:
   - Users can place bids on auction items.
   - The system ensures bids are higher than the current bid.
   - Automatically closes auctions when the closing time is reached.

4. **Error Handling**:
   - Displays error messages as alerts for invalid inputs or API errors.

5. **Loading States**:
   - Shows loading indicators while fetching data or performing actions.

6. **Responsive Design**:
   - Basic styling for a clean and user-friendly interface.

---

## Technologies Used

- **Frontend**:
  - React
  - Vite (for fast development and builds)
  - React Router (for routing)
  - Axios (for API requests)
- **Backend**:
  - Express.js (for REST API)
  - MongoDB (for database)
  - Mongoose (for MongoDB object modeling)
  - bcryptjs (for password hashing)
  - jsonwebtoken (for authentication)
- **Styling**:
  - Plain CSS (no external libraries)

---

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm (comes with Node.js)
- MongoDB (running locally or remotely)

### Steps to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Akshay-S-Gupta/Online-Auction-MERN.git
   cd Online-Auction-MERN
   ```

2. **Install Dependencies**:
   - For the frontend:
     ```bash
     cd frontend
     npm install
     ```
   - For the backend:
     ```bash
     cd backend
     npm install
     ```

3. **Start the Backend Server**:
   - Navigate to the `backend` directory:
     ```bash
     cd backend
     npm run dev
     ```
   - The backend will run at `http://localhost:5001`.

4. **Start the Frontend Development Server**:
   - Navigate to the `frontend` directory:
     ```bash
     cd frontend
     npm run dev
     ```
   - The frontend will run at `http://localhost:5173`.

5. **Open the App**:
   - Access the app in your browser at `http://localhost:5173`.

---

## Project Structure

### Frontend
```
frontend/
├── public/
│   ├── favicon.jpg
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Landing.jsx
│   │   ├── Signup.jsx
│   │   ├── Signin.jsx
│   │   ├── Dashboard.jsx
│   │   ├── AuctionItem.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── PostAuction.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

### Backend
```
backend/
├── models/
│   ├── users.js
│   └── auctions.js
├── config/
│   └── dbconfig.js
├── routes/
│   ├── authRoutes.js
│   ├── auctionRoutes.js
│   └── bidRoutes.js
├── middleware/
│   └── authenticate.js
├── db/
│   └── dbconnect.js
├── server.js
├── .env
└── package.json
```

---

## Screenshots

### Landing Page
![Landing Page](/Results/Screenshot_Home.png)

### SignUp Page
![SignUp Page](/Results/Screenshot_SignUp.png)

### SignIn Page
![SignIn Page](/Results/Screenshot_SignIn.png)

---

## API Endpoints

### Authentication
- **POST `/api/signup`**: Register a new user.
- **POST `/api/signin`**: Authenticate a user and return a JWT token.

### Auction Management
- **POST `/api/auction`**: Create a new auction item (protected route).
- **GET `/api/auctions`**: Get all auction items.
- **GET `/api/auctions/:id`**: Get a single auction item by ID.
- **PUT `/api/auctions/:id`**: Edit an auction item (protected route).
- **DELETE `/api/auctions/:id`**: Delete an auction item (protected route).

### Bidding
- **POST `/api/bid/:id`**: Place a bid on an auction item (protected route).

---

## Developed by [Akshay S Gupta](https://www.linkedin.com/in/akshaysgupta/)