const express = require('express');
const { AuctionItem } = require('../models/models');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

// Create Auction Item (Protected)
router.post('/auction', authenticate, async (req, res) => {
  try {
    const { itemName, description, startingBid, closingTime } = req.body;

    if (!itemName || !description || !startingBid || !closingTime) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newItem = new AuctionItem({
      itemName,
      description,
      startingBid,
      currentBid: startingBid,
      highestBidder: '',
      closingTime,
    });

    await newItem.save();
    res.status(201).json({ message: 'Auction item created', item: newItem });
  } catch (error) {
    console.error('Auction Post Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get all auction items
router.get('/auctions', async (req, res) => {
  try {
    const auctions = await AuctionItem.find();
    res.json(auctions);
  } catch (error) {
    console.error('Fetching Auctions Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get a single auction item by ID
router.get('/auctions/:id', async (req, res) => {
  try {
    const auctionItem = await AuctionItem.findById(req.params.id);
    if (!auctionItem) return res.status(404).json({ message: 'Auction not found' });
    res.json(auctionItem);
  } catch (error) {
    console.error('Fetching Auction Item Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Delete an auction item (Protected)
router.delete('/auctions/:id', authenticate, async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await AuctionItem.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({ message: 'Auction not found' });
    }

    res.json({ message: 'Auction deleted successfully', item: deletedItem });
  } catch (error) {
    console.error('Delete Auction Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Edit an auction item (Protected)
router.put('/auctions/:id', authenticate, async (req, res) => {
  try {
    const { id } = req.params;
    const { itemName, description, closingTime } = req.body;

    const updatedItem = await AuctionItem.findByIdAndUpdate(
      id,
      { itemName, description, closingTime },
      { new: true } // Return the updated document
    );

    if (!updatedItem) {
      return res.status(404).json({ message: 'Auction not found' });
    }

    res.json({ message: 'Auction updated successfully', item: updatedItem });
  } catch (error) {
    console.error('Edit Auction Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;