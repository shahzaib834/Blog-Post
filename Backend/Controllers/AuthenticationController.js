const Author = require('../Models/authorModel');
const generateWebToken = require('../Config/generateWebToken');
const dotenv = require('dotenv');

dotenv.config();

const registerAuthor = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    // Validating user Input
    if (!email && !password && !name) {
      res.status(400).send(`Please send all required fields`);
    }

    // Checking if user already exists
    const authorExists = await Author.findOne({ email });

    if (authorExists) {
      res.status(400).send(`Author already exists. Please Login`);
    }

    // Creating Author in database
    const author = await Author.create({
      email,
      password,
      name,
      token: generateWebToken(author._id),
    });

    // Return new author
    res.status(201).json(author);
  } catch (err) {
    res.status(400).send(`Error: ${err.message}`);
  }
};

const loginAuthor = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validating user input
    if (!email && !password) {
      res.status(400).send(`All fields are required`);
    }

    // Checking if email matches with database.
    const author = await Author.findOne({ email });

    if (author && (await author.matchPassword(password))) {
      res.send({
        id: author._id,
        email,
        name: author.name,
        token: generateWebToken(author._id),
      });
    } else {
      res.status(400).send(`Invalid Credentials`);
    }
  } catch (err) {
    res.status(400).send(`Error: ${err.message}`);
  }
};

const getUserProfile = async (req, res) => {
  try {
    const author = await Author.findById(req.user._id);
    if (author) {
      res.json({
        _id: author._id,
        name: author.name,
        email: author.email,
      });
    } else {
      res.status(404);
      throw new Error('User Not Found');
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { registerAuthor, loginAuthor, getUserProfile };
