const path = require('path')
const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

//used to consume json data in routes 
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

require("./routes/api.js")(app);
require("./routes/html.js")(app);

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})