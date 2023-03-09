

function Sidebar({notes, onAddnote, active, setActive, toggle}) {

    return (
    <div className="grid">
        <div className={`sidebar ${toggle}`}>
            <div className="sidebar-header">
                <h1>Notes</h1>

                <button onClick={onAddnote}>+</button>

            </div>

            <div className="sidebar-notes">

                {notes.map((note) => (
                    <div className={`sidebar-note ${note.id === active && "active"}`} onClick={() => {setActive(note.id)}}>

                    <div className="sidebar-note-title">
                        <strong>{note.title === "" ? "Untitled" : note.title && note.title.slice(0, 20)}</strong>
                    </div>

                    <small className="note-meta">Date: {new Date(note.date).toISOString().slice(0, 10)} </small>

                </div>
                ))}

                

            </div>

        </div>
    </div>
    
    );

}


export default Sidebar;

