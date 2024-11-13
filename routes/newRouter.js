const {Router} = require('express');
const {messages} = require('./indexRouter')

const newRouter = Router();

newRouter.get('/', (req, res) => {
    res.render('new');
})

newRouter.post('/', (req, res) => {
    const newMessage = {
        name: req.body.name,
        text: req.body.message,
        added: req.body.date,
    }
    messages.push(newMessage);
    res.redirect('/')
})

module.exports = newRouter;