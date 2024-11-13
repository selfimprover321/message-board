const {Router} = require('express');
const indexRouter = Router();

const messages = [
    {
        text: "Hi there",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    },
    {
        text: "sup",
        user: "Nicholas",
        added: new Date()
    }
]

indexRouter.get('/', (req, res) => {
    res.send('Setting up routes')
})


module.exports = indexRouter;