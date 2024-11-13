const express = require('express');
const {indexRouter} = require('./routes/indexRouter')
const newRouter = require('./routes/newRouter')
const path = require('node:path')
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

app.set('views', express.static(path.join(__dirname, "views")))
app.set('view engine', 'ejs')

app.use('/', indexRouter);
app.use('/new', newRouter);

app.use(express.urlencoded({extended: true}))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})