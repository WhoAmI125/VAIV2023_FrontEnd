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

type AccountProps = {
  getAccount(account: string): void;
};

function SelectAccount({ getAccount }: AccountProps) {
  // SessionStorage에서 계좌 리스트 불러오기
  const localStore = localStorage.getItem("account_list");
  const accountList: string[] = localStore && JSON.parse(localStore);

  const [newAccount, setNewAccount] = useState("");

  function onSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    getAccount(event.target.value);
  }

  return (
    <>
      <label>현재 계좌</label>
      <AccountSelect onChange={onSelect}>
        {accountList.map((account) => (
          <AccountOption value={account} key={account}>
            {account}
          </AccountOption>
        ))}
      </AccountSelect>
    </>
  );
}

export default SelectAccount;
