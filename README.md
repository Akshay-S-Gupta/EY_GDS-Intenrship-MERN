# Auction App

A simple and beginner-friendly auction application built with **React**, **Vite**, **React Router**, and **Express.js**. This app allows users to sign up, sign in, post auctions, place bids, and view auction details.

---

## Features Implemented So Far

1. **Authentication**:
   - Users can sign up and sign in.
   - Passwords are securely hashed using **bcryptjs**.
   - Protected routes for authenticated users (e.g., `/dashboard`, `/post-auction`).
   - Users can log out, which clears their session and redirects them to the landing page.

2. **Auction Management**:
   - Users can post new auction items with details like item name, description, starting bid, and closing time.
   - Users can view a list of auction items on the dashboard.
   - Users can place bids on specific auction items.
   - Users can edit or delete auction items.

3. **Error Handling**:
   - Displays error messages as alerts for invalid inputs or API errors.

4. **Loading States**:
   - Shows loading indicators while fetching data or performing actions.

5. **Responsive Design**:
   - Basic styling for a clean and user-friendly interface.

6. **Currency and Date Format**:
   - All monetary values are displayed in **Indian Rupees (₹)**.
   - Dates and times are displayed in **Indian Standard Time (IST)**.

---

## Technologies Used

- **Frontend**:
  - React
  - Vite (for fast development and builds)
  - React Router (for routing)
  - Axios (for API requests)
- **Backend**:
  - Express.js
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
   ```
   git clone https://github.com/Akshay-S-Gupta/EY_GDS-Intenrship-MERN.git
   cd EY_GDS-Intenrship-MERN
   ```

2. **Install Dependencies**:
   - For the frontend:
     ```
     cd frontend
     npm install
     ```
   - For the backend:
     ```
     cd backend
     npm install
     ```

3. **Start the Backend Server**:
   - Navigate to the `backend` directory:
     ```
     cd backend
     npm run dev
     ```
   - The backend will run at `http://localhost:5001`.

4. **Start the Frontend Development Server**:
   - Navigate to the `frontend` directory:
     ```
     cd frontend
     npm run dev
     ```
   - The frontend will run at `http://localhost:5173`.

5. **Open the App**:
   - Access the app at `http://localhost:5173`.

---

## Project Structure

```
EY_GDS-Intenrship-MERN/
├── backend/
│   ├── config/
│   │   └── dbconfig.js
│   ├── db/
│   │   └── db.js
│   ├── middleware/
│   │   └── authenticate.js
│   ├── models/
│   │   └── models.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── auctionRoutes.js
│   │   └── bidRoutes.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   ├── favicon.jpg
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Landing.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Signin.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── AuctionItem.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── PostAuction.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── Results/
│   ├── Screenshot_Home.png
│   ├── Screenshot_SignIn.png
│   └── Screenshot_SignUp.png
│
└── README.md
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

## Key Updates

1. **Logout Feature**:
   - Added a **logout button** in the header.
   - Users can log out, which clears their session and redirects them to the landing page.

2. **Currency and Date Format**:
   - All monetary values are displayed in **Indian Rupees (₹)**.
   - Dates and times are displayed in **Indian Standard Time (IST)**.

3. **Improved UI**:
   - Added labels for all input fields in the **Post Auction** page.
   - Enhanced the dashboard with better-organized auction item details.

---

## Developed by [Akshay S Gupta](https://www.linkedin.com/in/akshaysgupta/)