import './App.css';
import Boto from './components/Boto.js'
import Pantalla from './components/Pantalla.js'
import BotoClear from './components/BotoClear.js'
import Logo from './components/Logo.js'
import { useRef, useState } from 'react';
import { evaluate, isInteger, number, typeOf } from 'mathjs'

function App() {

  const [input, setInput] = useState('');

  const count = useRef(true)
  const countd = useRef(true)
  const countr = useRef(true)

  const agregarInput = val => {
    setInput(input + val);
    count.current = true
    countr.current = true
  };

  const operation = val => {
    if (count.current && input) {
      setInput(input + val);
      count.current = false
      countd.current = true
    } else if (!input) {
      setInput('0' + val)
      count.current = false
      countd.current = true
    }
  };

  const dec = val => {
    if (count.current && countd.current && input) {
      setInput(input + val);
      count.current = false
      countd.current = false
    } else if (!input) {
      setInput('0' + val)
      count.current = false
      countd.current = false
    }
  };

  const clear = () => {
    setInput('')
    countd.current = true
  }

  const calcularResultat = () => {
    console.log(countr.current)

    if (!input) alert('Por favor ingrese valores para realizar los cálculos')
    else if (countr.current && count.current) {
    setInput(evaluate(input));
    if (!isInteger(evaluate(input))) countd.current = false
    else countd.current = true
    countr.current = false
    
    } 
    console.log('input:',input)
    // console.log(evaluate(input))
    // console.log(isInteger(evaluate(input)))
    console.log(isInteger(5.6))
    // console.log(typeof(evaluate(input)))
    if (typeOf(input) == 'string') console.log('string')
    if (typeOf(input) == 'number') console.log('number')
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
          <Boto manejarClic={dec}>.</Boto>
          <Boto manejarClic={operation}>/</Boto>
        </div>
        <div className='fila'>
          <BotoClear manejarClear={clear}>
            Clear
          </BotoClear>
        </div>
      </div>
    </div>
  );
}

export default App;
