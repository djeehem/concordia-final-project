import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import notes from './routes/notes.js'

const app = express();


app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/notes', notes);

const MONGO_URL = 'mongodb+srv://djeehem:j43j5h345hmnb@cluster0.8ismq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 8000;

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
  }))
  .catch((error) => console.log(error))
  