const mongoose = require("mongoose");
const express = require("express");
const db = require('./db/db');
const bodyparser = require("body-parser");
const cors = require("cors")
const userRoute = require('./router/userRoute')
const FooterRoutes = require('./router/FooterRoutes')
const Blogroutes = require('./router/BlogRoutes')
const CommentRoutes = require('./router/commentRoutes')
const VideoRoutes = require('./router/VideoRoutes')

const app = express();
app.use(cors())

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))


const path = require('path');
const publicDir = path.join(__dirname,"files");
app.use(express.static(publicDir));


app.use(userRoute);
app.use(FooterRoutes);
app.use(Blogroutes);
app.use(CommentRoutes);
app.use(VideoRoutes);











app.listen(90)