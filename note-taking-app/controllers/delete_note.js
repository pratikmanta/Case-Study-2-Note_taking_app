const handleDelete = (req,res,Note) => {
    const { id } = req.params
    Note.findByIdAndRemove(id).exec()
    res.json({message: "Note deleted successfully !"})
}

module.exports = { handleDelete }