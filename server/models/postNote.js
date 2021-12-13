import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
  title: String,
  note: String,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date()
  },
  email: String,
  // position: Number,
  // index: Number
});

const PostNote = mongoose.model('PostNote', noteSchema);

export default PostNote;