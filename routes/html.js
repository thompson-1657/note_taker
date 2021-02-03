const path = require('path')

module.exports = function (app) {

    // HTML ROUTES
    app.get('/notes', (req, res) => {
        console.log(path.join(__dirname + '/../public/notes.html'));
        res.sendFile(path.join(__dirname + '/../public/notes.html'))

    })

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/public/index.html'))
    })

}