const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

const connectDB = async () => {
    try {
        mongoose
            .connect(MONGO_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => {
                console.log("MongoDB Connected successfully");
            });
    } catch (error) {
        console.log(`somer error occur ${error}`);
    }
};

module.exports = connectDB;