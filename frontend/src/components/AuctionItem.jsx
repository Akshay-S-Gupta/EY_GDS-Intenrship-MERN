import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function AuctionItem() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [bid, setBid] = useState(0);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/api/auctions/${id}`);
        setItem(res.data);
      } catch (err) {
        setError('Error fetching auction item. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, [id]);

  const handleBid = async () => {
    const token = localStorage.getItem('authToken'); // Get token from localStorage
    const username = localStorage.getItem('username'); // Get username from localStorage

    if (!token || !username) {
      setMessage('You must be signed in to place a bid.');
      return;
    }

    if (bid <= item.currentBid) {
      setMessage('Bid must be higher than the current bid.');
      return;
    }

    try {
      const res = await axios.post(
        `http://localhost:5001/api/bid/${id}`,
        { bid, username },
        {
          headers: { Authorization: `Bearer ${token}` }, // Include token in headers
        }
      );
      setMessage(res.data.message);
      if (res.data.winner) {
        setMessage(`Auction closed. Winner: ${res.data.winner}`);
      }
      setItem(res.data.item); // Update the item with the new bid
    } catch (err) {
      setMessage('Error placing bid. Please try again.');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div>
      <h2>{item.itemName}</h2>
      <p>{item.description}</p>
      <p>Current Bid: ₹{item.currentBid.toLocaleString('en-IN')}</p> {/* Display in INR */}
      <p>Highest Bidder: {item.highestBidder || 'No bids yet'}</p>
      <input
        type="number"
        value={bid}
        onChange={(e) => setBid(e.target.value)}
        placeholder="Enter your bid"
      />
      <button onClick={handleBid}>Place Bid</button>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default AuctionItem;