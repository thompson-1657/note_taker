const path = require('path')
const fs = require('fs')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

//used to consume json data in routes 
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



// HTML ROUTES
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/notes.html'))
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

// API ROUTES
fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err
    let notes = JSON.parse(data)

    app.get('/api/notes', (req, res) => {
        console.log('notes');
        res.json(notes)
    })

    // app.post('/api/notes', (req, res) => {
    //     let newNote = req.body
    //     notes.push(newNote)
    //     console.log(newNote);
    // })

})



app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})