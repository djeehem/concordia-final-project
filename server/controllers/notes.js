import PostNote from "../models/postNote.js"

const getNotes = async (req, res) => {
  try {
    const postNotes = await PostNote.find();

    res.status(200).json({
      status: 200,
      data: postNotes
    });
  } catch (error) {
    res.status(404).json({
      status: 404,
      message: error
    });
  }
};

const createNote = async (req, res) => {
  const note = req.body;

  const newNote = new PostNote(note);
  
  try {
    await newNote.save();

    res.status(201).json({
      status: 201,
      data: newNote
    })
  } catch (error) {
    res.status(409).json({
      status: 409,
      message: error
    })
  }
};

export { getNotes, createNote };