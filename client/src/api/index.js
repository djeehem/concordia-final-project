import axios from 'axios';

const url = '/notes';

const fetchNotes = () => axios.get(url);
const addNote = (newNote) => axios.post(url, newNote );
const modifyNote = (id, updatedNote) => axios.patch(`${url}/${id}`, updatedNote);
const removeNote = (id) => axios.delete(`${url}/${id}`)


export { fetchNotes, addNote, modifyNote, removeNote };