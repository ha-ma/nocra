import React, { useEffect, useState } from "react";

function ContractDetail(props) {
  // Storeからprops経由でグローバルステートをコンポーネント側で受け取る
  const { contractDetail } = props;

  // ローカルステートを用意
  const [contractDetailTitle, setContractDetailTitle] = useState(contractDetail.title);

  // Storeに変化があった場合にコンポーネントのstateをアップデートする
  useEffect(() => {
    setContractDetailTitle(contractDetail.title);
  }, [contractDetail]);
  return (
    <div>
      <h1>
        <li>API_URL: {process.env.API_URL}</li>
      </h1>
      <ul>
        <li>userId: {contractDetail.userId}</li>
        <li>id: {contractDetail.id}</li>

        <li>
          title:
          {/* valueにはコンポーネントステートを渡す。onChangeでコンポーネントステートのアップデート */}
          <input value={contractDetailTitle} onChange={e => setContractDetailTitle(e.target.value)} />
        </li>
        <li>completed: {contractDetail.completed}</li>
      </ul>
    </div>
  );
}

export default ContractDetail;
