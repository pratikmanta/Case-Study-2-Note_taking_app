const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/notes_db')

const Schema = mongoose.Schema;
const noteSchema = new Schema({
    "title":String,
    "content":String,
    "created_at":Date,
    "updated_at":Date
})

const Note = mongoose.model('Note', noteSchema)
module.exports = Note