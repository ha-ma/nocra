import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContractsAction } from "./reducks/contracts/operations";

function App() {
  const contracts = useSelector(state => state.contracts);
  console.log("contracts", contracts);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getContractsAction());
  };
  return (
    <div>
      <button onClick={handleClick}>get contracts</button>
      {contracts.map((val, i) => (
        <div>{val.title}</div>
      ))}
    </div>
  );
}
export default App;
