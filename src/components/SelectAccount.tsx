import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import React, { useState } from "react";

const AccountSelect = styled.select`
  width: 18vw;
  height: 3vh;

  margin-left: 2vw;
`;

const AccountOption = styled.option``;

function SelectAccount() {
  // DB에서 계좌 리스트 불러오기
  const tempAccountList = ["skku", "vaiv", "winter"];
  return (
    <>
      <label>현재 계좌</label>
      <AccountSelect>
        {tempAccountList.map((account) => (
          <AccountOption value={account}>{account}</AccountOption>
        ))}
      </AccountSelect>
    </>
  );
}

export default SelectAccount;
