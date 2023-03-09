import "../node_modules/react-quill/dist/quill.snow.css";

function Notesmain({active, noteUpdate, onDeletenote, toggle}) {
    
     
    const onEditNote = (element, value) => {
        noteUpdate({

            ...active,

            [element]: value,
        })
    };
    
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
                        onChange={(e) => onEditNote("title", e.target.value)} 
                    />
                    
                    
                    <input id="date" type="date" onChange={(e) => onEditNote("date",e.target.value)} value={new Date(active.date).toISOString().slice(0, 10)} />
                </div>
                <div className="titlearea-left">
                    <a><button onClick={() => onDeletenote(active.id)} className="button" id="#">Delete</button></a>
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