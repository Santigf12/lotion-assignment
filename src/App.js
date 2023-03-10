import { useState } from "react"
import { v1 as uuid } from "uuid";
import { BrowserRouter as  Router, Routes, Route, Navigate} from "react-router-dom";


import Sidebar from "./Sidebar";
import Notesmain from "./Notesmain";
import Navbar from "./Navbar";

function App() {
  const [toggle, setToggle] = useState("");
  const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : []);
  const [active, setActive] = useState(false);
  

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

    const updatedNotes = [note_new, ...notes];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
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
    <Router>
      <Navbar toggleSidebar={toggleSidebar} toggle={toggle} />
      <Routes>
        
        <Route path="/" element={<Navigate to ="/notes" />}/>
        <Route path="/notes/ids/" element={<Navigate to="/notes" />}/>
        
        <Route exact path="/notes" element={<>
        <Sidebar notes={notes} onAddnote={onAddnote} toggle={toggle} active={active} setActive={setActive} />
        <Notesmain toggle={toggle} active={activeNote()} noteUpdate={noteUpdate} />
        </>}/>

        <Route exact path={`/notes/ids/:id`} element={<>
        <Sidebar notes={notes} onAddnote={onAddnote} toggle={toggle} active={active} setActive={setActive} />
        <Notesmain setNotes={setNotes} notes={notes} toggle={toggle} active={activeNote()} noteUpdate={noteUpdate}/>
        </>}/>


      </Routes>
    </Router>
  );
}

export default App;


