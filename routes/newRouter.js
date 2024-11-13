const {Router} = require('express');
const {messages} = require('./indexRouter')

const newRouter = Router();

newRouter.get('/', (req, res) => {
    res.render('new');
})

newRouter.post('/', (req, res) => {
    const newMessage = {
        user: req.body.user,
        text: req.body.message,
        added: new Date(req.body.date),
    }
    messages.push(newMessage);
    res.redirect('/')
})

module.exports = newRouter;