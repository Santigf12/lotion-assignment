import {useEffect, useState} from "react"
import { v1 as uuid } from "uuid";
import { BrowserRouter as BrowserRouter, Routes, Route, Navigate} from "react-router-dom";


import Sidebar from "./Sidebar";
import Notesmain from "./Notesmain";
import Navbar from "./Navbar";

function App() {
  const [toggle, setToggle] = useState("");
  const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : []);
  const [active, setActive] = useState(false);
  

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes])

  const toggleSidebar = () => {
    console.log("toggle");
    setToggle(toggle === "" ? "active" : "");
  }

  const onAddnote = () => {
    const note_new = {
      id: uuid(),

      title: "Untitled",

      body: "",

      date: Date.now(),
    };

    setNotes([note_new, ...notes]);

  };

  


  const onDeletenote = (toDelete) => {
    const answer = window.confirm("Are you sure?");
      if (answer) {
        setNotes(notes.filter((note) => note.id !== toDelete));
        window.location.href = '/notes'
      }
  };

  const activeNote = () => {
    return notes.find((note) => note.id === active);
  };

  const noteUpdate = (updatedNote) => {
    const updatedNotes = notes.map((note) => {
      if(note.id === active) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotes);
  }
  

  return (
    <BrowserRouter>
      <Navbar toggleSidebar={toggleSidebar} toggle={toggle} />
      <Routes>
        
        <Route path="/" element={<Navigate to ="/notes" />}/>
        <Route path="/notes/ids/" element={<Navigate to="/notes" />}/>
        <Route exact path="/notes" element={<>
        <Sidebar notes={notes} onAddnote={onAddnote} toggle={toggle} active={active} setActive={setActive} />
        <Notesmain onDeletenote={onDeletenote} toggle={toggle} active={activeNote()} noteUpdate={noteUpdate}/>
        
        </>}/>
        <Route exact path={`/notes/ids/:id`} element={<>
        <Sidebar notes={notes} onAddnote={onAddnote} toggle={toggle} active={active} setActive={setActive} />
        <Notesmain onDeletenote={onDeletenote} toggle={toggle} active={activeNote()} noteUpdate={noteUpdate}/>
        </>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


