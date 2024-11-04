import dotenv from "dotenv"
dotenv.config();

import express from "express"
import mongoose from "mongoose"

mongoose.connect(process.env.DB_PASSWORD)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.log(error);
    })


const app = express();

app.listen(3000, () => {
    console.log("App is listening on port 3000");
})