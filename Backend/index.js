const express = require('express');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const authRouter = require("./routes/auth");
const userRoute = require("./routes/user");
const postRoute = require("./routes/post");
const app = express();

dotenv.config();
app.use(express.json()) // to accept json data

const port = 3000;

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("connection successful");
    }).catch((err) => {
        console.log(err);
    })

app.use("/api/auth", authRouter);   
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);


app.listen(3000, () => {
    console.log(`backend is running on ${port}`);
})  