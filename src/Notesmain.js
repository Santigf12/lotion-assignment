import "../node_modules/react-quill/dist/quill.snow.css";


function Notesmain({active, noteUpdate, onDeletenote, toggle}) {

    const onEditTitle = (value) => {
        noteUpdate({

            ...active,

            title: value,
        })
    };

    const onEditNote = (value) => {
        noteUpdate({

            ...active,

            body: value,

        })
    }

    const onEditDate = (value) => {
        noteUpdate({

            ...active,

            date: value

        })
    }

    

    if(!active) return (
        <div className={`main-notes ${toggle}`}>
            <div className={`no-active-note ${toggle}`}>No active note</div>  
        </div>
    );
    

    return (<div className={`main-notes ${toggle}`}>
        <div className="main-note-edit">
            <div className="titlearea">
                
                <div className={`titlearea-right ${toggle}`}>
                    <input
                        id="title"
                        type="text"
                        placeholder="Untitled"
                        value={active.title === "Untitled" ? "" : active.title} 
                        onChange={(e) => onEditTitle(e.target.value)} 
                    />
                    
                    
                    <input id="date" type="date" onChange={(e) => onEditDate(e.target.value)} value={new Date(active.date).toISOString().slice(0, 10)} />
                </div>
                <div className="titlearea-left">
                    <a><button onClick={() => onDeletenote(active.id)} className="button" id="#">Delete</button></a>
                </div>
            </div>
            
            <textarea 
                id="body"
                
                placeholder="Write your notes here"
                value={active.body}
                onChange={(e) => onEditNote(e.target.value)}                
            />
        
        </div>

    </div>
    
    );

    

}


export default Notesmain;

/*const modules = {
        toolbar: [
            [{header: "1"},{header: "2"},{header: [3,4,5,6]},{font: []}],
            [{size: []}],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{list: "ordered"}, {list: "bullet"}],
            ["link"],
            ["clean"],
            ["code-block"],
        
        ],
    };

    const formats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "link",
        "code-block",

    ];*/