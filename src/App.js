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
    setNotes(notes.filter((note) => note.id !== toDelete));
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
      <Navbar toggleSidebar={toggleSidebar} toggle={toggle}/>
     
      
      <Routes>
      
      <Route exact path="/notes" element={<>
        <Notesmain onDeletenote={onDeletenote} toggle={toggle} active={activeNote()} noteUpdate={noteUpdate}/>
        <Sidebar notes={notes} onAddnote={onAddnote} toggle={toggle} active={active} setActive={setActive} />
      </>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


