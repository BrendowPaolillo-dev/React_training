import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'

function App() {
  const objetos = [
    {
      nome: 'Leo',
      idade: 23
    },    {
      nome: 'Gandalf',
      idade: 1767
    }

  ];
  
  let somaIdades = objetos.reduce( (prevValue, objeto) => prevValue + objeto.idade, 1)
  console.log(somaIdades) // => 1800
    return (
    <div>
      <div id="teste">
      </div>
      <button>
        Clique aqui
      </button>
    </div>
  );
}

export default App;
