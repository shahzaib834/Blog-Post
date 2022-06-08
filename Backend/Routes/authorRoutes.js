const express = require('express');
const {
  registerAuthor,
  loginAuthor,
  getUserProfile,
} = require('../Controllers/AuthenticationController');
const {
  ShowAllAuthors,
  showAuthorWithId,
  updateAuthor,
  followAuthor,
  addAuthor,
} = require('../Controllers/authorController');

const router = express.Router();

// Register An author
router.route('/register').post(registerAuthor);

//Login an Author
router.route('/login').post(loginAuthor);

//Get author profile
router.route('/profile').get(getUserProfile);

// Get All Authors
router.route('/').get(ShowAllAuthors);

// Get Author By id
router.route('/:id').get(showAuthorWithId);

// Update Author By Id
router.route('/update/:id').put(updateAuthor);

//Follow Other Authors.
//router.route('/follow/:id').put(followAuthor);

module.exports = router;
