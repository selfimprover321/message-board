const express = require('express');
const indexRouter = require('./routes/indexRouter')
const newRouter = require('./routes/newRouter')
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

app.use('/', indexRouter);

app.use('/new', newRouter)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})