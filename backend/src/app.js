const express = require("express");
const cookieParser = require("cookie-parser"); 
const dotenv = require("dotenv");
dotenv.config();

const { handle404Error, handleGlobalError, } = require("./middlewares");
const { v1Routes } = require("./routes/v1");
const { cors } = require("./config");
const path = require("path");
const { sequelize } = require("./config/db");
const app = express();

app.use(cors)
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(cookieParser());

app.use("/api/v1", v1Routes); 

app.use(handle404Error);
app.use(handleGlobalError);

// Sync database
sequelize.sync().then(() => {
    console.log('Database synced');
  }).catch((err) => {
    console.error('Error syncing database:', err);
  });

module.exports = { app };
