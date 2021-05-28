import React, { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom";

// setup our initial state
const initialState = {
  count1: 0,
  count2: 0,
};

// create custom hook that returns back useState
const useValue = () => useState(initialState);

// create the context
const Context = createContext(null);

// create custom hook that takes in global state that returns back the value
const useGlobalState = () => {
  const value = useContext(Context);
  if (value === null) throw new Error("Please add GlobalStateProvider");
  return value;
};

// create global state provider that wraps around intended component to provide global state
const GlobalStateProvider = ({ children }) => (
  <Context.Provider value={useValue()}>{children}</Context.Provider>
);

// counter component that utilizes global state
const Counter = ({ name }) => {
  const [state, setState] = useGlobalState();
  const count = state[name] || 0;
  const increment = () => {
    setState({ ...state, [name]: count + 1 });
  };
  const decrement = () => {
    setState({ ...state, [name]: count - 1 });
  };

  return (
    <div>
      {count}
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

// main app/entry point component that implements counter components
// additional counter components can be added
const App = () => (
  <GlobalStateProvider>
    <h1>Count1</h1>
    <Counter name="count1" />
    <h1>Count2</h1>
    <Counter name="count2" />
  </GlobalStateProvider>
);

ReactDOM.render(<App />, document.getElementById("container"));
