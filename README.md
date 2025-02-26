# Auction App

A simple and beginner-friendly auction application built with **React**, **Vite**, and **React Router**. This app allows users to sign up, sign in, post auctions, place bids, and view auction details.

---

## Features Implemented So Far

1. **Authentication**:
   - Users can sign up and sign in.
   - Protected routes for authenticated users (e.g., `/dashboard`, `/post-auction`).

2. **Auction Management**:
   - Users can post new auction items with details like item name, description, starting bid, and closing time.
   - Users can view a list of auction items on the dashboard.
   - Users can place bids on specific auction items.

3. **Error Handling**:
   - Displays error messages as alerts for invalid inputs or API errors.

4. **Loading States**:
   - Shows loading indicators while fetching data or performing actions.

5. **Responsive Design**:
   - Basic styling for a clean and user-friendly interface.

---

## Technologies Used

- **Frontend**:
  - React
  - Vite (for fast development and builds)
  - React Router (for routing)
  - Axios (for API requests)
- **Styling**:
  - Plain CSS (no external libraries)

---

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm (comes with Node.js)

### Steps to Run the Project

1. **Clone the Repository**:
   `git clone https://github.com/Akshay-S-Gupta/EY_GDS-Intenrship-MERN.git`
   `cd Online-Auction-MERN`


2. **Install Dependencies**:
   ```
   npm install
   ```

4. **Start the Development Server**:
   ```
   npm run dev
   ```

6. **Open the App**:
   - The app will run at `http://localhost:5173/` (or the port specified in `vite.config.js`).

---

## Project Structure

```
Online-Auction-MERN/
├── Results/
|   ├── Screenshot_Home.png
|   ├── Screenshot_SignIn.png
|   └── Screenshot_SignUp.png
|
├── frontend/
|   ├── public/
|   │   ├── favicon.jpg
|   │   └── favicon.ico
|   ├── src/
|   │   ├── components/
|   │   │   ├── Header.jsx
|   │   │   ├── Footer.jsx
|   │   │   ├── Landing.jsx
|   │   │   ├── Signup.jsx
|   │   │   ├── Signin.jsx
|   │   │   ├── Dashboard.jsx
|   │   │   ├── AuctionItem.jsx
|   │   │   ├── ProtectedRoute.jsx
|   │   │   └── PostAuction.jsx
|   │   ├── App.jsx
|   │   ├── main.jsx
|   │   └── index.css
|   ├── index.html
|   ├── vite.config.js
|   └── package.json
|
└── README.md
```

## Screenshots

### Landing Page
![Landing Page](/Results/Screenshot_Home.png)

### SignUp Page
![SignUp Page](/Results/Screenshot_SignUp.png)

### SignIn
![SignIn_Page](/Results/Screenshot_SignIn.png)

---

## Developed by [Akshay_S_Gupta](https://www.linkedin.com/in/akshaysgupta/)
