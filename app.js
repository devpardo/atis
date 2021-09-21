const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const userRouter = require('./app/users/user.router');
const loginRouter = require('./app/login/login.router');
const newsRouter = require('./app/news/news.router');
const annoucementRouter = require('./app/announcements/announcement.router');

app.use(express.urlencoded({
    extended : false
}));

app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);
app.use("/api/news", newsRouter);
app.use("/api/announcements", annoucementRouter);

app.listen(port , () => console.log(`Listening on port ${port}`));