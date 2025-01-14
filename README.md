/* General Body Styling */
body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    color: #fff;
 }
 
 /* Background Styling */
 .background-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
 }
 
 .background-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
 }
 
 /* Logo Styling */
 .logo-container {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 10;
 }
 
 .game-logo {
    width: 100px;
    height: auto;
    filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.7));
 }
 
 /* Welcome & Game Over Screens */
 .screen {
    text-align: center;
    background: rgba(0, 0, 0, 0.8);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);
    width: 350px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: absolute;
 }
 
 .hidden {
    display: none;
 }
 
 /* Theme Selector */
 .theme-selector {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 0.9rem;
 }
 
 select {
    padding: 5px;
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: 1rem;
    cursor: pointer;
 }
 
 /* Game Screen */
 header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
 }
 
 .scoreboard {
    font-size: 1rem;
 }
 
 canvas {
    border: 4px solid #fff;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.6);
 }
 
 button {
    padding: 10px 15px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
 }
 
 button:hover {
    transform: scale(1.05);
 }
 
 button#pauseButton {
    background-color: #ff8c00;
    color: #fff;
 }
 
 button#restartButton, button#mainMenuButton {
    background-color: #ff5e57;
    color: #fff;
 }
 
 /* On-Screen Movement Controls */
.controls {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-top: 20px;
}

.controls button {
   width: 60px;
   height: 60px;
   font-size: 1.5rem;
   margin: 5px;
   border: none;
   border-radius: 50%;
   background-color: #ff8c00;
   color: #fff;
   cursor: pointer;
   transition: background 0.3s;
}

.controls button:hover {
   background-color: #ffa733;
}

.middle-buttons {
   display: flex;
   gap: 10px;
}
