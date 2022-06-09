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

      const updatedAuthor = await Author.findByIdAndUpdate(
        req.user._id,
        { $push: { blogs: blog } },
        { new: true }
      );
      res
        .status(200)
        .json(`Updated Blog : ${blog} and Updated Authir : ${updatedAuthor}`);
    } else {
      res.status(404).send(`User not found`);
    }
  } catch (err) {
    console.log(`Error : ${err.message}`);
  }
};

const updateBlog = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    if ((!title, !description, !category)) {
      res.status(404).send('Please send all fields');
    }

    // Getting author id
    const author = await Author.findById(req.user._id);

    // Getting blog by its id
    const blog = await Blog.findById({ _id: req.params.id });

    // Checking if this blog belongs to the user who reqquested the update/edit.

    // console.log(`blog : ${blog._id}`);
    // console.log(`author blogs : ${author.blogs[0]}`);

    // Mapping through blogs of author to check if he is the owner of the blog.

    //  const isSame = author.blogs.map((value) => {
    //    if (blog._id === value) {
    //      return true;
    //    }
    //  });

    // const isSame = author.blogs.map((value) => blog._id === value);

    //  const isSame = author.blogs.forEach((value) => {
    //    if (blog._id === value) {
    //      return true;
    //    }
    //  });

    console.log(`Value of IsSame : ${isSame}`);
    if (isSame === true) {
      const editedBlog = await Blog.findByIdAndUpdate(
        { _id: req.params.id },
        {
          title,
          description,
          category,
        },
        { new: true }
      );

      res.status(200).send(editedBlog);
    } else {
      res
        .status(400)
        .send(`You don't own the blog so you cannot edit this blog.`);
    }
  } catch (err) {
    res.status(400);
    throw new Error(`Error : ${err.message}`);
  }
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
