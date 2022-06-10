const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { genSalt } = require('bcrypt');

const authorSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
    },
    followersCount: {
      type: Number,
      required: true,
      default: 0,
    },
    followingCount: {
      type: Number,
      required: true,
      default: 0,
    },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Author' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Author' }],
    blogs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
      },
    ],
  },
  {
    timestamps: true,
  }
);

authorSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

authorSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
