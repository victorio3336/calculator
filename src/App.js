import "./App.css";
import Button from "./components/Button";
import Screen from "./components/Screen";
import ButtonClear from "./components/ButtonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const addInput = (val) => {
    setInput(input + val);
  };

  const calcResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Please add a value");
    }
  };

  return (
    <div className="App">
      <div className="main-container">
        <Screen input={input} />
        <div className="file">
          <Button driveClick={addInput}>7</Button>
          <Button driveClick={addInput}>8</Button>
          <Button driveClick={addInput}>9</Button>
          <Button driveClick={addInput}>*</Button>
        </div>
        <div className="file">
          <Button driveClick={addInput}>4</Button>
          <Button driveClick={addInput}>5</Button>
          <Button driveClick={addInput}>6</Button>
          <Button driveClick={addInput}>-</Button>
        </div>
        <div className="file">
          <Button driveClick={addInput}>1</Button>
          <Button driveClick={addInput}>2</Button>
          <Button driveClick={addInput}>3</Button>
          <Button driveClick={addInput}>+</Button>
        </div>
        <div className="file">
          <Button driveClick={addInput}>0</Button>
          <Button driveClick={addInput}>.</Button>
          <Button driveClick={calcResult}>=</Button>
          <Button driveClick={addInput}>/</Button>
        </div>
        <div className="file">
          <ButtonClear driveClear={() => setInput("")}>AC</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
