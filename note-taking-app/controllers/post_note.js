const handlePost = (req,res,Note) => {
    let note = {
        "title":req.body.title,
        "content":req.body.content,
        "created_at":new Date,
        "updated_at":new Date()
    }
    let data = new Note(note)
    data.save()
    res.json(data)
}

module.exports = { handlePost }