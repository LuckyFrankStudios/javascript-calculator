
import './App.css';
import React, {useState} from 'react';

function App() {

  const [expression, setExpression] = React.useState("")
  const [answer, setAnswer] = React.useState(0)

  const display = (symbol) => {
    setExpression((prev) => prev + symbol)
  }

  const clear = () => {
    setExpression(() => "")
    setAnswer(() => 0)
  }

const del = () => {
  setExpression((prevExpression) => prevExpression.split("").slice(0, prevExpression.length - 1)
.join(""))}

const equal = () => {
  setAnswer(() => eval(expression));
  setExpression((prev) => prev = "")
}

  return (
    <div classsName="container">
     <div className = "grid-container">
     <div id = "display" className = "display">{expression}</div>
     <div className = "answer">{answer}</div>
       <div id = "clear" onClick = {() => clear()} className = "C btn btnprimary">C</div>
       <div onClick = {() => del()} className = "AC btn btnprimary">AC</div>
       <div onClick = {() => display("/")} className = "btn btnprimary">/</div>
       <div id = "multiply" onClick = {() => display("*")} className = "multiply btn btnprimary">x</div>
       <div id = "seven" onClick = {() => display("7")} className = "seven btn btnprimary">7</div>
       <div id = "eight" onClick = {() => display("8")} className = "eight btn btnprimary">8</div>
       <div id = "nine" onClick = {() => display("9")} className = "nine btn btnprimary">9</div>
       <div id = "subtract" onClick = {() => display("-")} className = "minus btn btnprimary">-</div>
       <div id = "four" onClick = {() => display("4")} className = "four btn btnprimary">4</div>
       <div id = "five" onClick = {() => display("5")} className = "five btn btnprimary">5</div>
       <div id = "six" onClick = {() => display("6")} className = "six btn btnprimary">6</div>
       <div id = "add" onClick = {() => display("+")} className = "plus btn btnprimary">+</div>
       <div id = "one" onClick = {() => display("1")} className = "one btn btnprimary">1</div>
       <div id = "two" onClick = {() => display("2")} className = "two btn btnprimary">2</div>
       <div id = "three" onClick = {() => display("3")} className = "three btn btnprimary">3</div>
       <div id = "equals" onClick = {() => equal()} className = "equal btn btnprimary">=</div>
       <div id = "zero" onClick = {() => display("0")} className = "zero btn btnprimary">0</div>
       <div id = "decimal" onClick = {() => display(".")} className = "dot btn btnprimary">.</div>
        
     </div>
    </div>
  );
}

export default App;
