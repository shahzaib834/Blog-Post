const express = require('express');
const {
  ShowAllBlogs,
  showBlogWithId,
  addBlog,
  updateBlog,
  deleteBlog,
} = require('../Controllers/BlogPostController');

const protect = require('../middleware/authMiddleware');
const router = express.Router();

// All Blogs.
router.route('/').get(ShowAllBlogs);

// Show blogs by id
router.route('/:id').get(showBlogWithId);

// Add A Blog
router.route('/add').post(protect, addBlog);

// Update A Blog
router.route('/update/:id').put(updateBlog);

// Delete A Blog
router.route('/delete/:id').delete(deleteBlog);

module.exports = router;
