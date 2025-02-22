import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Auction App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/signin">Signin</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/post-auction">Post Auction</Link>
      </nav>
    </header>
  );
}

export default Header;