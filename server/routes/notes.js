import express from 'express';

import { 
  getNotes, 
  createNote, 
  updateNote, 
  deleteNote,
  updateNotePositions
} from '../controllers/notes.js';

const router = express.Router();

router.get('/:email', getNotes)
router.post('/', createNote)
router.patch('/:id', updateNote)
router.patch('/', updateNotePositions)
router.delete('/:id', deleteNote)

export default router;