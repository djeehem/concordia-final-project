import mongoose  from 'mongoose';
import PostNote from '../models/postNote.js';

const getNotes = async (req, res) => {

  const email = req.params;
  try {
    const postNotes = await PostNote.find(email).exec();

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
    await PostNote.updateMany(
      {}, { $inc: { position: 1 }} 
    );

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

const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, note, noteColor, email } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send('No note found with that id');
  };
  
  const updatedNote = { title, note, noteColor, email, _id: id };
  
  await PostNote.findByIdAndUpdate(id, updatedNote, { new: true });

  res.json(updatedNote);
};

const deleteNote = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send('No note found with that id');
  };

  await PostNote.findByIdAndRemove(id);

  res.json({
    Message: 'Note deleted'
  });
};

const updateNotePositions = async (req, res) => {
  // const { notes } = req.body;

  // await notes.map((note, index) => {

  //   PostNote.updateOne(
  //     { _id: note._id }, 
  //     { $set: { position: position } }
  //   );
  
  // });
};

export { 
  getNotes, 
  createNote, 
  updateNote, 
  deleteNote,
  updateNotePositions
};