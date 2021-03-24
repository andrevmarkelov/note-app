import React from 'react';
import { INote } from '../interfaces';

interface NotesProps {
  notes: INote[],
  onRemove(id: number): void
}

export const Notes: React.FC<NotesProps> = ({ notes, onRemove }) => {
  if (notes.length === 0) {
    return <p className="text-center">No notes yet</p>
  }

  return (
    <ul className="list-group">
      {notes.map(note => {
        return (
          <li key={note.id} className="list-group-item note">
            {note.title}
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              onClick={() => onRemove(note.id)}>
              &times;
            </button>
          </li>
        )
      })}
    </ul>
  )
}