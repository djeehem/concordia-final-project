import axios from 'axios';

const url = 'http://localhost:8000/notes';

const fetchNotes = () => axios.get(url);

export default fetchNotes;