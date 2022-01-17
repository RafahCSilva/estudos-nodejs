import React from 'react'
import './App.css'
import Contador from './componentes/Contador'

function App() {
  return (
    <div className="App">
      <h1>Contador</h1>
      <Contador valorInicial={9876}/>
      <Contador/>
    </div>
  )
}

export default App
