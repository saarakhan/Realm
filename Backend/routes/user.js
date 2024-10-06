const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");


// UPDATE
router.put("/:id", async (req, res) => {
    // if ids are same then only user can update
    if (req.body.userId === req.params.id) {
        // If password is updated then save the hashed password, to be secure
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
        try {
            await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            });
            res.status(200).json({
                msg: "User updated!"
            });
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(401).json({
            msg: "You can change your account only!"
        })
    }
});

// DELETE
router.delete("/:id", async (req, res) => {
    // if ids are same then only user can delete
    if (req.body.userId === req.params.id) {
        try {
            // when a user is deleted, delete all his posts!
            const user = await User.findById(req.params.id);
            if (user) {
                try {
                    await Post.deleteMany({ username: user.username });
                    await User.findByIdAndDelete(req.params.id);
                    res.status(200).json(
                        { msg: "User has been deleted succesfully!" }
                    );
                } catch (err) {
                    res.status(500).json(err);
                }
            }
        } catch (err) {
            res.status(404).json({ msg: "User not found!" });
        }
    } else {
        res.status(401).json({
            msg: "You can delete your account only!"
        })
    }
});

// GET 
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others);

    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;