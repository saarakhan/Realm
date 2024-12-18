const router = require("express").Router();
const bcrypt = require('bcryptjs');

const User = require("../models/User");

// REGISTER
router.post("/register", async (req, res) => {
    try {
        const saltRounds = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password, saltRounds)
        const newUser = new User({
            username: req.body.username,
            password: hashPass,
            email: req.body.email
        });
        const user = await newUser.save();
        console.log("User created successfully");
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) { return res.status(400).json("Wrong crediential") };

        const validated = await bcrypt.compare(req.body.password, user.password);
        if (!validated) { return res.status(400).json("Wrong crediential") };
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;