import {useState} from "react";


function Notesmain({setNotes, notes, active, noteUpdate, toggle}) {
    const [editing, setEditing] = useState(false);
  
    const onEditNote = (element, value) => {
      noteUpdate({
        ...active,
        [element]: value,
      });
      setEditing(true);
      
      
    };
  
    const onSaveNote = () => {
      localStorage.setItem("notes", JSON.stringify(notes));
      setEditing(false);
      
    };

    const onDeletenote = (toDelete) => {
        const answer = window.confirm("Are you sure?");
        if (answer) {
          const updatedNotes = notes.filter((note) => note.id !== toDelete);
          setNotes(updatedNotes);
          localStorage.setItem("notes", JSON.stringify(updatedNotes));
          window.location.href = '/notes'
        }
      };
  
    if(!active) return (
      <div className={`main-notes ${toggle}`}>
        <div className={`no-active-note ${toggle}`}>No active note</div>  
      </div>
    );
  
    return (
      <div className={`main-notes ${toggle}`}>
        <div className="main-note-edit">
          <div className="titlearea">
                <div className={`titlearea-right ${toggle}`}>
                <input
                    id="title"
                    type="text"
                    placeholder="Untitled"
                    value={active.title === "Untitled" ? "" : active.title} 
                    onChange={(e) => onEditNote("title", e.target.value)} 
                />
                <input 
                    id="date" 
                    type="date" 
                    onChange={(e) => onEditNote("date", e.target.value)} 
                    value={new Date(active.date).toISOString().slice(0, 10)} 
                />
                </div>

                <div className="titlearea-left">
                <a>
                    <button onClick={() => onDeletenote(active.id)} className="button" id="#">
                    Delete
                    </button>
                </a>
                {editing && (
                    <button onClick={onSaveNote} className="button-save" id="#">
                    Save
                    </button>
                    
                )}
                </div>

            </div>
          <textarea 
            id="body"
            placeholder="Write your notes here"
            value={active.body}
            onChange={(e) => onEditNote("body", e.target.value)}                
          />
        </div>
      </div>
    );
}

export default Notesmain;