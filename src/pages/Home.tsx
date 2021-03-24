import React, { useEffect, useState } from 'react';
import { Form } from '../components/Form';
import { Notes } from '../components/Notes';
import { INote } from '../interfaces';

export const Home: React.FC = () => {
  const [notes, setNotes] = useState<INote[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('notes') || '[]') as INote[];
    setNotes(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes]);

  const addHandler = (title: string) => {
    const newNote: INote = {
      title: title,
      id: Date.now()
    }
    setNotes(prev => [newNote, ...prev]);
  }

  const removeHandler = (id: number) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  }

  return (
    <div className="App">
      <Form onAdd={addHandler} />
      <hr />
      <Notes notes={notes} onRemove={removeHandler} />
    </div>
  )
}