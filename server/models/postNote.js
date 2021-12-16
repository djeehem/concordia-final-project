import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
  title: String,
  note: String,
  noteColor: String,
  createdAt: {
    type: Date,
    default: new Date()
  },
  email: String,
  position: Number
});

const PostNote = mongoose.model('PostNote', noteSchema);

export default PostNote;
