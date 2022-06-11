const mongoose = require('mongoose');

const commentSchema = {
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
  comment: { type: String },
};
const blogSchema = mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Author',
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    comments: [commentSchema],
    likes: {
      type: Number,
      default: 0,
    },
    likedByAuthors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Author' }],
    image: {
      type: String,
      default:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hostinger.com%2Ftutorials%2Fwhat-is-a-blog&psig=AOvVaw2tizd6muRgKrkGilhmo01k&ust=1654509130589000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKjkoPyElvgCFQAAAAAdAAAAABAD',
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
