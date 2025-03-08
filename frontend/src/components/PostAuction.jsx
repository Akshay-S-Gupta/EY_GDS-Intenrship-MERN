import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PostAuction() {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [startingBid, setStartingBid] = useState(0);
  const [closingTime, setClosingTime] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handlePostAuction = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');
    if (!token) {
      alert('You must be signed in to post an auction.');
      navigate('/signin');
      return;
    }

    try {
      await axios.post(
        'http://localhost:5001/api/auction',
        { itemName, description, startingBid, closingTime },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Auction item posted!');
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to post auction. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <h2>Post New Auction</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handlePostAuction}>
        <div>
          <label>
            <strong>Item Name:</strong>
            <input
              type="text"
              placeholder="Enter item name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            <strong>Description:</strong>
            <textarea
              placeholder="Enter item description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </label>
        </div>
        <div>
          <label>
            <strong>Starting Bid (₹):</strong> {/* Display in INR */}
            <input
              type="number"
              placeholder="Enter starting bid"
              value={startingBid}
              onChange={(e) => setStartingBid(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            <strong>Closing Time (IST):</strong> {/* Display in IST */}
            <input
              type="datetime-local"
              value={closingTime}
              onChange={(e) => setClosingTime(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Post Auction</button>
      </form>
    </div>
  );
}

export default PostAuction;