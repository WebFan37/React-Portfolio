import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

            <section className="header1">
                <h1>JANNE'S PORTFOLIO</h1>
                <p>Welcome to my portfolio</p>

                <section className="infoHeader1">
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

            </section>
    
            
      
      <main>

<section className="main-page">
    
    <section className="about">
        <h1>ABOUT ME</h1>
    </section>    
    <p>
    I'm a college student that study in Multimedia in Maisonneuve College  in Montreal.
    This program specifies in Web design, beginner filmmaking, game design and graphic design. 
    
    </p>
    <section className="experience">
        <h3>MY EXPERIENCE</h3>
    </section>
    <p>If you go to the menu on the top left, you will find a large section of the project I've done during my college 
    journey from September 2022 to now. These projects are my experience.  </p>
    <section className="hobbies">
        <h3>MY HOBBIES</h3>
    </section>
    <p> I‘m mostly open minded and yes I have a lot of hobbies and passion.</p>
    <p> WE'RE ABOUT TO MAKE THE SWITCH TO <code>REACT TYPESCRIPT</code> I'M CURRENTLY LEARNING ! </p>


<div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} times
        </button>
      </div>
</section>

</main>
    </>
  )
}

export default App
