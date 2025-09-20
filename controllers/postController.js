const Post = require("../models/Post");
const User = require("../models/User");

// CREATE a new post
const createPost = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const newPost = new Post({
      title,
      content,
      tags,
      author: req.user ? req.user.id : null,
    });
    await newPost.save();
    res.status(200).json(newPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// GET all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "username email");
    posts.length === 0
      ? res.status(200).json("No Posts found")
      : res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

//Get single post by ID
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate(
      "author",
      "username email"
    );
    if (!post) return res.status(404).json("Post not found");

    res.status(200).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

//UPDATE a post
const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    const updatedPost = {
      title: req.body.title || title,
      content: req.body.content || content,
      tags: req.body.tags || tags,
    };

    await updatePost.save();
    res.status(200).json("Post Updated");
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

//DELETE a post

const deletePost = async (req, res) => {
  try {
    // get the post
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    //check if the user is the author
    if (post.author.toString() !== req.user.id)
      return res
        .status(403)
        .json({ message: "You are forbidden to delete this post" });
    await post.deleteOne();
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
};
