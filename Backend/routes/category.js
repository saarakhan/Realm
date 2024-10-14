const router = require("express").Router();
const Category = require("../models/Category");

// Add a new Cat
router.post("/", async (req, res) => {
    const newCat = new Category(req.body);
    try {
        const savedCat = await newCat.save();
        res.status(200).json(savedCat)
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET ALL CAt
router.get("/", async (req, res) => {
    try {
        const allCat = await Category.find();
        res.status(200).json(allCat)
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router;