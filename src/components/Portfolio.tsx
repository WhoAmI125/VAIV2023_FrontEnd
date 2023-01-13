import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import React, { useState } from "react";
import SelectAccount from "./SelectAccount";
import ShowAnalysis from "./Analysis";

const BaseContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding-top: 5vh;
`;

const SelectAccountContainer = styled.div`
  width: 30vw;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BtnContainer = styled.button`
  width: 10vw;
  height: 5vh;
  margin-left: 5px;
`;

const AnalysisContainer = styled.div`
  margin-top: 5vh;
  width: 60vw;
  height: 35vh;

  background-color: rgba(250, 250, 250, 0.876);

  border: 1px solid #a4a4a4;
  border-radius: 30px;
`;

//background-color: #cadcff; - 연하늘색

function Portfolio() {
  // SesstionStorage에서 계좌 리스트 불러오기
  const localStore = localStorage.getItem("account_list");
  const accountList: string[] = localStore && JSON.parse(localStore);

  const [currAccount, setAccount] = useState(accountList[0]);

  function getAccount(account: string): void {
    setAccount(account);
  }

  return (
    <>
      <BaseContainer>
        <SelectAccountContainer>
          <SelectAccount getAccount={getAccount}></SelectAccount>
          <p>선택된 계좌 : {currAccount}</p>
          <p>id : {localStorage.getItem("id")}</p>
        </SelectAccountContainer>

        <BtnContainer>Simulate</BtnContainer>
        <BtnContainer>Rebalancing</BtnContainer>
      </BaseContainer>

      <AnalysisContainer>
        <ShowAnalysis account={currAccount}></ShowAnalysis>
      </AnalysisContainer>
    </>
  );
}

export default Portfolio;
