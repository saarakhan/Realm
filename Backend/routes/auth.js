const router = require("express").Router();
const bcrypt = require('bcrypt');
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
        res.status(500).json(err);
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(400).json("Wrong crediential");
        
        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json("Wrong crediential");
        res.status(200).json({ msg: "Login success" })

    } catch (err) {
        res.status(500).json(err);
    }
})
    
module.exports = router;