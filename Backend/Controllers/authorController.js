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
  const { name, contact } = req.body;

  if ((!name, !contact)) {
    res.status(404).send('Please send all fields');
  }

  const updatedAuthor = await Author.findByIdAndUpdate(
    { _id: req.params.id },
    { name, contact },
    { new: true }
  );

  res.status(200).send(updatedAuthor);
};

//const followAuthor = async (req, res) => {
//  const currentAuthor = await Author.findById({
//    _id: '629e4a04f709830d13b0fe2a',
//  });

// const toFollow = await Author.findById({_id: req.params.id});

//  currentAuthor.following = {...currentAuthor.following, toFollow}

//  await Author.findByIdAndUpdate({_id: currentAuthor}, {}, {new: true});

//  console.log(currentAuthor);
//};

module.exports = {
  ShowAllAuthors,
  showAuthorWithId,
  updateAuthor,
  // followAuthor,
};
