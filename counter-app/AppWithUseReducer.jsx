import React, { createContext, useContext, useReducer } from "react";
import ReactDOM from "react-dom";

// setup our initial state
const initialState = {
  count1: 0,
  count2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        [action.name]: state[action.name] + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        [action.name]: state[action.name] - 1,
      };
    default:
      return state;
  }
};

// create custom hook that returns back useState
const useValue = () => useReducer(reducer, initialState);

const Context = createContext(null);

const useGlobalState = () => {
  const value = useContext(Context);
  console.log("value", value);
  if (value === null) throw new Error("Please add GlobalStateProvider");
  return value;
};

// create global state provider that wraps around intended component to provide global state
const GlobalStateProvider = ({ children }) => (
  <Context.Provider value={useValue()}>{children}</Context.Provider>
);

// counter component that utilizes global state
const Counter = ({ name }) => {
  const [state, dispatch] = useGlobalState();

  return (
    <div>
      {state[name]}
      <button onClick={() => dispatch({ type: "INCREMENT", name })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT", name })}>-1</button>
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
