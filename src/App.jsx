import React, { useCallback, useState } from "react";
import "./App.css";
import ItemsList from "./ItemsList";

function App() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const genereteItemsFromApi = useCallback(()=>{
    return new Array(count).fill('').map((_,i)=>`Element ${i+1}`)
  },[count])

  return (
    <div className="App">
      <h1 style={{ color: colored ? "red" : "#000" }}>
        Количество элементов: {count}
      </h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          setColored((prev) => !prev); 
        }}
      >
        Change
      </button>

      <ItemsList getItems={genereteItemsFromApi} />
    </div>
  );
}

export default App;
