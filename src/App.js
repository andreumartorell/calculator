import './App.css';
import Boto from './components/Boto.js'
import Pantalla from './components/Pantalla.js'
import BotoClear from './components/BotoClear.js'
import { useRef, useState } from 'react';
import { evaluate, isInteger } from 'mathjs'

function App() {

  const [input, setInput] = useState('');

  const dec = useRef(true)

  const agregarInput = val => {
    setInput(input + val);
  };

  const operation = val => {
    if ((!isNaN(input.at(-1))) && input) {
      setInput(input + val);
      dec.current = true
    } else if (!input) {
      setInput('0' + val)
      dec.current = true
    }
  };

  const decimal = val => {
    if (dec.current && input && (!isNaN(input.at(-1)))) {
      setInput(input + val);
      dec.current = false
    } else if (!input) {
      setInput('0' + val)
      dec.current = false
    }
  };

  const calcularResultat = () => {
    if (!input) alert('Por favor ingrese valores para realizar los cálculos')
    else if ((!isNaN(input.at(-1)))) {
      setInput(evaluate(input).toString());
      if (!isInteger(evaluate(input))) dec.current = false
      else dec.current = true
      }
  };

  return (
    <div className="App">
      <div className='contenidor-calculadora'>
        <Pantalla input = {input}/>
        <div className='fila'>
          <Boto manejarClic={agregarInput}>1</Boto>
          <Boto manejarClic={agregarInput}>2</Boto>
          <Boto manejarClic={agregarInput}>3</Boto>
          <Boto manejarClic={operation}>+</Boto>
        </div>
        <div className='fila'>
          <Boto manejarClic={agregarInput}>4</Boto>
          <Boto manejarClic={agregarInput}>5</Boto>
          <Boto manejarClic={agregarInput}>6</Boto>
          <Boto manejarClic={operation}>-</Boto>
        </div>
        <div className='fila'>
          <Boto manejarClic={agregarInput}>7</Boto>
          <Boto manejarClic={agregarInput}>8</Boto>
          <Boto manejarClic={agregarInput}>9</Boto>
          <Boto manejarClic={operation}>*</Boto>
        </div>
        <div className='fila'>
          <Boto manejarClic={calcularResultat}>=</Boto>
          <Boto manejarClic={agregarInput}>0</Boto>
          <Boto manejarClic={decimal}>.</Boto>
          <Boto manejarClic={operation}>/</Boto>
        </div>
        <div className='fila'>
          <BotoClear manejarClear={() => setInput('')}>
            Clear
          </BotoClear>
        </div>
      </div>
    </div>
  );
}

export default App;
