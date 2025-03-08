import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Header() {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('authToken'); // Check if user is authenticated

  const handleLogout = async () => {
    const confirmLogout = window.confirm('Are you sure you want to log out?');
    if (confirmLogout) {
      try {
        // Call the logout API
        await axios.post('http://localhost:5001/api/logout', {}, {
          headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
        });

        // Clear local storage
        localStorage.removeItem('authToken');
        localStorage.removeItem('username');

        // Redirect to the landing page
        navigate('/');
      } catch (err) {
        console.error('Logout failed:', err);
        alert('Logout failed. Please try again.');
      }
    }
  };

  return (
    <header>
      <h1>Auction App</h1>
      <nav>
        <Link to="/">Home</Link>
        {!isAuthenticated && <Link to="/signup">Signup</Link>}
        {!isAuthenticated && <Link to="/signin">Signin</Link>}
        {isAuthenticated && <Link to="/dashboard">Dashboard</Link>}
        {isAuthenticated && <Link to="/post-auction">Post Auction</Link>}
        {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
      </nav>
    </header>
  );
}

export default Header;