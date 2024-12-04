const express = require('express');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const authRouter = require("./routes/auth");
const userRoute = require("./routes/user");
const postRoute = require("./routes/post");
const categoryRoute = require("./routes/category");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json()) // to accept json data
app.use("/images", express.static(path.join(__dirname, "/images")));
const port = 1000;

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("connection successful");
    }).catch((err) => {
        console.log(err);
    })

// Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    }
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded!")
})
app.use("/api/auth", authRouter);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/api/category", categoryRoute);
app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "Frontend", "dist")));
    res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
});

app.listen(port, () => {
    console.log(`backend is running on ${port}`);
})  