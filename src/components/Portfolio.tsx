import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import React, { useState } from "react";
import SelectAccount from "./SelectAccount";

const SelectAccountContainer = styled.div`
  background-color: #ffffff;
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

function Portfolio() {
  const [account, selectAccount] = React.useState();
  return (
    <>
      <SelectAccountContainer>
        <SelectAccount></SelectAccount>
      </SelectAccountContainer>

      <BtnContainer>Simulate</BtnContainer>
      <BtnContainer>Rebalancing</BtnContainer>
    </>
  );
}

export default Portfolio;
