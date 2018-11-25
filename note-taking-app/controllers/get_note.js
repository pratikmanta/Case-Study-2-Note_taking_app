const handleGet = (req,res,Note) => {
    Note.find().then((notes) => {
        res.json(notes)
    })
}

module.exports = { handleGet }