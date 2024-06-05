import './header.css'

export default function header(){
    <>
      
            <section className="header1">
                <h1>JANNE'S PORTFOLIO</h1>
                <p>Welcome to my portfolio</p>
            </section>
    
            <section className="header2">
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="clicking-bar">
                    <span className="material-symbols-outlined">menu</span>
                </label>
                <div className="menu">
                    <div>
                    <span className="material-symbols-outlined">home</span>
                        <a href="main-menu.php">HOME </a>
                    </div>
                   

                    <div>
                        <span className="material-symbols-outlined">image</span>
                        
                        <a href="top-picked-photos.php">PHOTOS</a>
                    </div>

                    <div>
                        <span className="material-symbols-outlined">videocam</span>
                       
                        <a href="videos.php"> VIDEOS</a>
                    </div>

                    <div>
                        <span className="material-symbols-outlined">public</span>
                        
                        <a href="web.php">WEB</a>
                    </div>

                    <div>
                        <span className="material-symbols-outlined">contacts</span>
                            
                            <a href="contact.php">CONTACT</a>
                    </div>
                    
                    <div>
                        <span className="material-symbols-outlined">brush</span>
                        <a href="graphic-design.php">GRAPHIC DESIGN</a>
                    </div>

                    <div>
                        <span className="material-symbols-outlined">music_note</span>
                        <a href="contact.php">MUSIC</a>
                    </div>
                </div>
            </section>
    </>
}