import { useEffect, useState } from 'react';
import { Note as NoteModel } from './models/note';
import Note from './components/Note';

const App = () => {
  const [notes, setNotes] = useState<NoteModel[]>([]);

  useEffect(() => {
    async function loadNotes() {
      try {
        const response = await fetch('/api/notes', {
          method: 'GET',
        });

        const notes = await response.json();
        setNotes(notes);
      } catch (error) {
        console.log(error);
      }
    }
    loadNotes();
  }, []);

  return (
    <div className="container py-4 px-3 mx-auto">
      {notes.map((note) => (
        <Note key={note._id} note={note} />
      ))}
    </div>
  );
};

export default App;
