const mongoose = require('mongoose');
const Data = require('./Temporary Data/Data');
const authorsData = require('./Temporary Data/authors');
const Blog = require('./Models/BlogModel');
const Author = require('./Models/authorModel');

const AddDataToDatabase = async () => {
  try {
    //await Blog.deleteMany();
    //await Author.deleteMany();
    // const createdAuthors = await Author.insertMany(authorsData);
    //   const author = createdAuthors[0]._id;
    // const blogs = Data.map((blog) => {
    //   return { ...blog, author };
    // });
    //console.log(author);
    //console.log(blogs);
    // await Blog.insertMany(blogs);
    // console.log('Data Imported');
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

module.exports = AddDataToDatabase;
