const Note = require("../models/Note");

async function getNotes(req, res) {
    try {
       const note = await Note.find();
        res.status(200).json(note);
    } catch {
        res.status(500).json({
            message:"Couldn't retrieve Notes"
        })
    }
} 

async function getNote(req, res) {
    try {
        const note = await Note.findById(req.params.id)

        if (!note) {
          return res.status(404).json({ message: "Note not found" });
        }
        res.json(note);
        
    } catch (error) {
        res.status(500).json({
            message:"Failed to get note"
        })
    }
}

async function createNote(req, res) {
    try {
        const note = await Note.create(req.body);
        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({
            message:"Failed to create note"
        })
    }
}

async function updateNote(req, res) {
    try {
        const note = await Note.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true },
        )
        if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json(note);
  } catch (error) {
    res.status(500).json({ message: "Failed to update Note" });
  }
}

async function deleteNote(req, res) {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete note" });
  }
}

module.exports = { getNotes,getNote ,createNote,updateNote, deleteNote};