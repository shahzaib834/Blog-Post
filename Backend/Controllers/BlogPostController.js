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
  const { title, description, category } = req.body;

  if (!title || !description || !category) {
    res.status(400).send('Title Description And Category are required');
  }
  const author = await Author.find({ _id: '62a069ee811af7b24b0cc19a' });

  const blog = await Blog.create({
    author: author[0]._id,
    title,
    description,
    category,
  });

  res.status(200).send(blog);
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
