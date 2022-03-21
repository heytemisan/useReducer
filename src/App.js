import React from "react";

export default function App() {
  const reducer = (state, action) => {
    switch (action.typeof) {
      case "add":
        return state + 1;
      case "sub":
        return state - 1;
      case "res":
        return (state = 0);
      default:
        return state;
    }
    // return obj[action];
  };

  //const [value, setValue] = React.useState('');
  const [count, dispatch] = React.useReducer(reducer, 0);
  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch({ typeof: "add", payload: 0 })}>+</button>
      <button onClick={() => dispatch({ typeof: "sub", payload: 0 })}>-</button>
      <button onClick={() => dispatch({ typeof: "res", payload: 0 })}>
        reset
      </button>
    </>
  );
}
