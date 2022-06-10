const Author = require('../Models/authorModel.js');

const ShowAllAuthors = async (req, res) => {
  const data = await Author.find({});

  res.send(data);
};

const showAuthorWithId = async (req, res) => {
  const data = await Author.find({ _id: req.params.id });

  res.send(data);
};

const updateAuthor = async (req, res) => {
  const { name, email } = req.body;

  if ((!name, !email)) {
    res.status(404).send('Please send all fields');
  }

  const updatedAuthor = await Author.findByIdAndUpdate(
    { _id: req.user._id },
    { name, email },
    { new: true }
  );

  res.status(200).send(updatedAuthor);
};

const followAuthor = async (req, res) => {
  // Getting Author who will follow
  const author = await Author.findById(req.user._id);

  // Getting author who to follow.
  const toFollow = await Author.findById({ _id: req.params.id });

  //Validating user input
  if (!toFollow) {
    res.status(400).send(`Please send a valid author`);
  }

  // Checking if he has already followed.
  const alreadyFollowed = toFollow.followers.some(
    (value) => JSON.stringify(author._id) === JSON.stringify(value)
  );

  if (alreadyFollowed) {
    res.status(400).send(`Already Followed`);
  } else {
    // Adding follower to the follower's array
    // Incrementing followers Count
    await Author.findByIdAndUpdate(
      { _id: toFollow._id },
      {
        $push: { followers: author },
        $inc: { followersCount: 1 },
      },
      { new: true }
    );

    // Increment Following Count
    await Author.findByIdAndUpdate(
      req.user._id,
      {
        $push: { following: toFollow },
        $inc: { followingCount: 1 },
      },
      { new: true }
    );

    res.status(200).send(`Followed ${toFollow.name} by ${author.name}`);
  }
};

module.exports = {
  ShowAllAuthors,
  showAuthorWithId,
  updateAuthor,
  followAuthor,
};
