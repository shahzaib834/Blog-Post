const express = require('express');
const {
  ShowAllBlogs,
  showBlogWithId,
  addBlog,
  updateBlog,
  deleteBlog,
  likeABlog,
} = require('../Controllers/BlogPostController');

const protect = require('../middleware/authMiddleware');
const router = express.Router();

// All Blogs.
router.route('/').get(ShowAllBlogs);

// Show blogs by id
router.route('/:id').get(showBlogWithId);

// Add A Blog
router.route('/add').post(protect, addBlog);

// Edit A Blog
router.route('/edit/:id').put(protect, updateBlog);

// Delete A Blog
router.route('/delete/:id').delete(protect, deleteBlog);

// Like a blog
router.route('/like/:blogid/:authorid').post(likeABlog);

module.exports = router;
