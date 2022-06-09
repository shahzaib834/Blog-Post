const Data = require('../Temporary Data/Data');
const Blog = require('../Models/BlogModel');
const Author = require('../Models/authorModel');

const ShowAllBlogs = async (req, res) => {
  const data = await Blog.find();

  res.send(data);
};

const showBlogWithId = async (req, res) => {
  const _id = req.params.id;

  const data = await Blog.findById({ _id }).populate('author');

  res.send(data);
};

const addBlog = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    if (!title || !description || !category) {
      res.status(400).send('Title Description And Category are required');
    }

    const author = await Author.findById(req.user._id);

    if (author) {
      const blog = await Blog.create({
        author: author._id,
        title,
        description,
        category,
      });

      // Update Author to have this blog in the database.
      const blogs = await Author.findById(req.user._id);
      //console.log(blogs);
      const updatedBlogs = [blog];

      const updatedAuthor = await Author.findByIdAndUpdate(
        req.user._id,
        {
          blogs: updatedBlogs,
        },
        { new: true }
      );
      console.log(updatedAuthor);
      res.status(200).send(blog);
    } else {
      res.status(404).send(`User not found`);
    }
  } catch (err) {
    console.log(`Error : ${err.message}`);
  }
};

const updateBlog = async (req, res) => {
  const { title, description, category } = req.body;

  if ((!title, !description, !category)) {
    res.status(404).send('Please send all fields');
  }
  const newBlog = await Blog.findByIdAndUpdate(
    { _id: req.params.id },
    {
      title,
      description,
      category,
    },
    { new: true }
  );

  res.status(200).send(newBlog);
};

const deleteBlog = async (req, res) => {
  const deletedBlog = await Blog.findByIdAndRemove({ _id: req.params.id });

  if (!deletedBlog) {
    res.status(404).send('Blog not found');
  }

  console.log('deleted Succesfully');
  res.status(200).send(deletedBlog);
};
module.exports = {
  ShowAllBlogs,
  showBlogWithId,
  addBlog,
  updateBlog,
  deleteBlog,
};
