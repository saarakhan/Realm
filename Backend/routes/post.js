const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

// CREATE POST 
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savePost = await newPost.save();
        res.status(200).json(savePost);
    } catch (err) {
        res.status(200).json(err)
    }
});

// UPDATE
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                });
                res.status(200).json(
                    { msg: "Post has been Updated succesfully!" }
                );
            } catch (err) {
                res.status(500).json(err);
            }
        }
    } catch (err) {
        res.status(404).json({ msg: "Post not found!" });
    }
})

// DELETE
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                await Post.findByIdAndDelete(req.params.id);
                res.status(200).json(
                    { msg: "Post has been deleted succesfully!" }
                );
            } catch (err) {
                res.status(500).json(err);
            }
        }
    } catch (err) {
        res.status(404).json({ msg: "Post not found!" });
    }
});

// GET 
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);

    } catch (err) {
        res.status(500).json(err);
    }
})
// GET ALL POSTS
router.get("/", async (req, res) => {
    const username = req.query.user;
    const catname = req.query.cat;
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username });
        } else if (catname) {
            posts = await Post.find({
                categories: {
                    $in: [catname]
                }
            });
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;