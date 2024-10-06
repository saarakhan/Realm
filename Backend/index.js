const express = require('express');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const authRouter = require("./routes/auth");
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
app.listen(3000, () => {
    console.log(`backend is running on ${port}`);
})  