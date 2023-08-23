const express = require('express');
const router = express.Router();
const Admin = require('../models/adminModel'); 


router.get('/admin', async (req, res) => {
  try {
    const admin = await Admin.findOne({ username: 'admin' });
    if (!admin) {
      return res.status(404).json({ message: 'Admin account not found' });
    }
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
