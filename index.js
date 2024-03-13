const express = require('express');
const app=express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose
.connect(process.env.MONGODB_UR)
.then(() => console.log("DB connection successfull"))
.catch((err) => console.log(err))

app.listen(process.env.PORT || 5000, () => {
    console.log("Listening at port 5000");
})