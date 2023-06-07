const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../auth');
require('dotenv').config();

// OAuth authentication route
router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

// OAuth callback route
router.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/failed',
    successRedirect: '/auth/success',
  })
);

// Verification route to check if the token is valid
router.get('/verify', (req, res) => {
  // Implement your token verification logic here
  // You can use a JWT library or validate the token against the backend

  // Example: Verify the token and authorize the request
  const token = req.headers.authorization.split(' ')[1];
  if (token === 'YOUR_VALID_TOKEN') {
    return res.sendStatus(200);
  } else {
    return res.sendStatus(401);
  }
});

// Logout route
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

module.exports = router;
