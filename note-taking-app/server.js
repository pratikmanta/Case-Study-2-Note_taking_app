const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const Note = require('./model/model.js')        // database connection module

const getNotes = require('./controllers/get_note')
const postNotes = require('./controllers/post_note')
const updateNotes = require('./controllers/update_note')
const deleteNotes = require('./controllers/delete_note')

app.use(bodyParser.json())
// get all notes
app.get('/notes', (req,res) => getNotes.handleGet(req,res,Note))  

// post a note
app.post('/notes', (req,res) => postNotes.handlePost(req,res,Note))

// get notes by id
app.get('/notes/:id', (req,res) => updateNotes.getNoteById(req,res,Note))

// update note by id
app.put('/notes/:id', (req,res) => updateNotes.handleUpdate(req,res,Note))

// delete note by id
app.delete('/notes/:id', (req,res) => deleteNotes.handleDelete(req,res,Note))

app.listen(3000, () => {
    console.log('server started at port 3000')
})