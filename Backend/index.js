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
// app.use(cors(
//     {
//         origin: ["https://realm-api-nine.vercel.app/?vercelToolbarCode=hefGgEyC00peUv2"],
//         methods: ["POST", "GET"],
//         credentials: true
//     }
// ));
app.use(cors());
dotenv.config();
app.use(express.json()) // to accept json data
app.use("/images", express.static(path.join(__dirname, "/images")));

const port = 3000;

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


app.listen(3000, () => {
    console.log(`backend is running on ${port}`);
})  