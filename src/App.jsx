
import { useState } from 'react';
import './App.css';

function App() {
  const [counter,setCounter]=useState(0)
const [pen,setPen]=useState(0)
const [NoteBooks,setNotebook]=useState(0)
  const handleAddBook=()=>{
    setCounter(counter+1)
  }
  const handleSubBook=()=>{
    if(counter<=0)
    {
      return
    }
    setCounter(counter-1)
  }
  const handleAddPen=()=>{
    setPen(pen+1)
  }
  const handleSubPen=()=>{
    if(pen<=0)
    {
      return
    }
    setPen(pen-1)
  }
  const handleAddNoteBook=()=>{
    setNotebook(NoteBooks+1)
  }
  const handleSubNoteBook=()=>{
    if(NoteBooks<=0)
    {
      return
    }
    setNotebook(NoteBooks-1)
  }
  return (
    <div className="App">
      <h1>Books</h1>
      <h1>{counter}</h1>
      <button onClick={handleAddBook}>Add</button>
      <button onClick={handleSubBook}>Sub</button>
      <h1>Pen</h1>
      <h1>{pen}</h1>
      <button onClick={handleAddPen}>Add</button>
      <button onClick={handleSubPen}>Sub</button>
      <h1>NoteBooks</h1>
      <h1>{NoteBooks}</h1>
      <button onClick={handleAddNoteBook}>Add</button>
      <button onClick={handleSubNoteBook}>Sub</button>
      <h1>total count:{counter+pen+NoteBooks}</h1>
    </div>
  );
}

export default App;
