import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
  title: String,
  note: String,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const PostNote = mongoose.model('PostNote', noteSchema);

export default PostNote;