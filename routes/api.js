const fs = require('fs')

const uuidv1 = require('uuidv1')

module.exports = function (app) {

    app.get('/api/notes', (req, res) => {
        console.log('notes');
        const notes = getData()
        res.json(notes)
    })


    app.post('/api/notes', (req, res) => {
        const title = req.body.title
        const text = req.body.text

        let newNote = { title, text, id: uuidv1() }

        const notes = getData()

        notes.push(newNote)
        saveData(notes)
        console.log(newNote);
        res.json(newNote)
    })

    app.delete("/api/notes/:id", (req, res) => {

        const notes = getData()
        console.log(notes);
        const updateNotes = notes.filter(note => note.id !== req.params.id)
        saveData(updateNotes)
        res.json({ ok: true })
    })

    // API ROUTES
    const getData = () => {
        const data = fs.readFileSync(__dirname + '/../db/db.json', "utf8")
        let notes = JSON.parse(data)
        return notes
    }

    const saveData = (notes) => {
        fs.writeFileSync(__dirname + '/../db/db.json', JSON.stringify(notes), "utf8")
    }
}