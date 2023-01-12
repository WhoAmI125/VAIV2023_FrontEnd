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
  height: 40vh;

  background-color: rgba(250, 250, 250, 0.876);

  border: 1px solid #a4a4a4;
  border-radius: 30px;
`;

//background-color: #cadcff; - 연하늘색

function Portfolio() {
  const [account, selectAccount] = React.useState();
  return (
    <>
      <BaseContainer>
        <SelectAccountContainer>
          <SelectAccount></SelectAccount>
        </SelectAccountContainer>

        <BtnContainer>Simulate</BtnContainer>
        <BtnContainer>Rebalancing</BtnContainer>
      </BaseContainer>

      <AnalysisContainer>
        <ShowAnalysis></ShowAnalysis>
      </AnalysisContainer>
    </>
  );
}

export default Portfolio;
