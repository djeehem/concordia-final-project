import axios from 'axios';

const url = '/notes';

const fetchNotes = (email) => axios.get(`${url}/${email}`);
const addNote = (newNote) => axios.post(url, newNote );
const modifyNote = (id, updatedNote) => axios.patch(`${url}/${id}`, updatedNote);
const removeNote = (id) => axios.delete(`${url}/${id}`)
const modifyNotePositions = (notes) => axios.patch(url, notes);


export { 
  fetchNotes, 
  addNote, 
  modifyNote, 
  removeNote, 
  modifyNotePositions
};