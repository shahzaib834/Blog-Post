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
        .json(`Updated Blog : ${blog} and Updated Author : ${updatedAuthor}`);
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
    // Mapping through blogs of author to check if he is the owner of the blog.
    const isSame = author.blogs.some(
      (value) => JSON.stringify(blog._id) === JSON.stringify(value)
    );

    if (isSame) {
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
  try {
    const blogToDelete = await Blog.findById({ _id: req.params.id });

    if (!blogToDelete) {
      res.status(400).status('Blog not found');
    }

    // Checking if requested person owns the blog.
    const author = await Author.findById(req.user._id);

    const isOwner = author.blogs.some(
      (value) => JSON.stringify(blogToDelete._id) === JSON.stringify(value)
    );

    if (isOwner) {
      // Delete Blog From Blogs Model
      const deletedBlog = await Blog.findByIdAndRemove({
        _id: blogToDelete._id,
      });
      console.log(`Blog Deleted Succesfully from Blogs Model`, deletedBlog);

      // Delete Blog From Authors Model
      const deletedBlogFromAuthorModel = await Author.findByIdAndUpdate(
        req.user._id,
        { $pull: { blogs: blogToDelete._id } }
      );
      console.log(
        `Blog Deleted Succesfully from Author Model`,
        deletedBlogFromAuthorModel
      );

      res.status(200).send(blogToDelete);
    } else {
      console.log('you cannot delete this blog');
    }
  } catch (err) {
    res.status(400).send(`Error : ${err.message}`);
  }
};

const likeABlog = async (req, res) => {
  try {
    // Finding blog comming with params.
    const blogToLike = await Blog.findById({ _id: req.params.id });

    // getting author id
    const author = await Author.findById({ _id: req.user._id });

    // Checking if user send a valid blog id
    if (!blogToLike) {
      res.status(400).send(`Error: No Blog found`);
    }

    //Checking if the user already liked the blog
    const alreadyLiked = blogToLike.likedByAuthors.some(
      (value) => JSON.stringify(author._id) === JSON.stringify(value)
    );

    if (alreadyLiked) {
      res.status(400).send(`You already liked the blog.`);
    } else {
      // Pushing author to likesByAuthors array.
      await Blog.findByIdAndUpdate(
        { _id: req.params.id },
        {
          $push: { likedByAuthors: author._id },
        },
        { new: true }
      );

      //Updating blog to increase count of likes in blog
      const updatedBlog = await Blog.findByIdAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        },
        { new: true }
      );

      res.send(updatedBlog);
    }
  } catch (err) {
    res.status(400).send(`Error : ${err.message}`);
  }
};
module.exports = {
  ShowAllBlogs,
  showBlogWithId,
  addBlog,
  updateBlog,
  deleteBlog,
  likeABlog,
};
