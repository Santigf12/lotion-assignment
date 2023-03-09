
function Navbar({toggleSidebar, toggle}) {

    return (
    
    <div className="grid">
        <div className={`section ${toggle}`}>
            <div className={`nav ${toggle}`}>
                <div className="nav-left">
                    <a><button onClick={toggleSidebar} className="button" id="#">☰</button></a>
                </div>
                <div className="nav-centered">
                    <h1>Lotion</h1>
                    <p>Like Notion, but worse.</p>
                </div>
                
            </div>

        </div>
    </div>
    
    );
}


export default Navbar;
