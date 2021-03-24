import React, { useRef } from 'react';

interface NoteFormProps {
  onAdd(title: string): void
}

export const Form: React.FC<NoteFormProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      if (ref.current!.value !== '') {
        props.onAdd(ref.current!.value);
        ref.current!.value = '';
      }
    }
  }

  return (
    <div className="form-group">
      <input
        ref={ref}
        type="text"
        className="form-control"
        placeholder="Enter the name of the note"
        onKeyPress={keyPressHandler}
      />
    </div>
  )
}