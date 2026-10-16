import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { MiBoton } from './components/atoms/Boton.jsx'
import {Saludo} from "./Components/Atoms/Saludo.jsx";
import {Contador} from "./Components/Atoms/Contador.jsx";

function App() {


  return (

      <div>
      <header className="App-header">
        <Saludo></Saludo>
      </header>

            <main className="app">
              <h1>Mi tablero de tareas</h1>
              <MiBoton texto="¡Haz Clic!" onClick={() => alert('Hola!')}/>
            </main>

          <Contador></Contador>

          <p> MiAU </p>


      </div>

)
}
export default App
