import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContractsAction, getContractDetailAction } from "./reducks/contracts/operations";
import ContractDetail from "./ContractDetail";

function App() {
  const contracts = useSelector(state => state.contracts);
  console.log("contracts", contracts);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getContractsAction());
  };
  const handleClickSingle = () => {
    dispatch(getContractDetailAction());
  };
  useEffect(() => {
    console.log("contracts.contractDetail changed", contracts.contractDetail);
  }, [contracts.contractDetail]);
  return (
    <div>
      <button onClick={handleClick}>get contracts</button>
      <button onClick={handleClickSingle}>get Contract Detail</button>
      {contracts.contracts.map((val, i) => (
        <div>{val.title}</div>
      ))}
      <div>
        <h2>Contract Detail</h2>
        <ContractDetail contractDetail={contracts.contractDetail} />
      </div>
    </div>
  );
}
export default App;
