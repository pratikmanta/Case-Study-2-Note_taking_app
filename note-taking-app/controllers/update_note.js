const getNoteById = (req,res,Note) => {
    const { id } = req.params
    Note.findById(id)
    .then(note => {
        res.json(note)
    })
}


const handleUpdate = (req,res,Note) => {
    const { id } = req.params
    Note.findById(id, function(err,note) {
        if(err) {
            console.error('no notes found')
        }
        note.title = req.body.title
        note.content = req.body.content
        note.updated_at = new Date
        note.save()
        res.json(note)
    })
}

module.exports = {
    getNoteById,
    handleUpdate
}