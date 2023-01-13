import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  SellStockType,
  HoldingStockType,
  AccountType,
  AccountJSON,
} from "../types/user_info";

const TabTitleContainer = styled.div`
  display: flex;
`;
const TabContContainer = styled.div``;
const TabTitleDiv = styled.div`
  width: 10vw;
  height: 5vh;
  margin: auto;
  margin-top: 2vh;
  background-color: #cadcff;
  text-align: center;
  line-height: 5vh;
`;
const TabContDiv = styled.div`
  margin-left: 0vw;
  margin-top: 1vh;
`;

/* statistics styled component - start */
const StatisticsRowDiv = styled.div`
  display: flex;
  margin: auto;
  margin-top: 1vh;

  height: 7vh;
  width: 55vw;

  // background-color: red;
`;
const StatisticsLabel = styled.div`
  text-align: right;
  margin: auto;

  height: 7vh;
  line-height: 7vh;
  width: 10vw;

  // border: 2px solid red;
`;
const StatisticsItem = styled.div`
  text-align: right;
  margin: auto;

  height: 7vh;
  line-height: 7vh;
  width: 17vw;

  // border: 2px solid blue;
`;

/* statistics styled component - end */

type AccountProps = {
  account: string;
};

function ShowAnalysis({ account }: AccountProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const localStore = localStorage.getItem("stock_info");
  const info_all: AccountJSON = localStore && JSON.parse(localStore);
  const account_info = info_all[account];

  const tabClickHandler = (index: number) => {
    setActiveIndex(index);
  };

  function ShowStatistics() {
    return (
      <>
        <StatisticsRowDiv>
          <StatisticsLabel>실현 손익</StatisticsLabel>
          <StatisticsItem>+{account_info["real_gain"]} 원</StatisticsItem>
          <StatisticsLabel>+{account_info["real_profit"]} %</StatisticsLabel>
          <StatisticsItem></StatisticsItem>
        </StatisticsRowDiv>
        <StatisticsRowDiv>
          <StatisticsLabel>총 매입</StatisticsLabel>
          <StatisticsItem>{account_info["total_buy"]} 원</StatisticsItem>
          <StatisticsLabel>총 평가</StatisticsLabel>
          <StatisticsItem>? 원</StatisticsItem>
        </StatisticsRowDiv>
        <StatisticsRowDiv>
          <StatisticsLabel>총 손익</StatisticsLabel>
          <StatisticsItem>? 원</StatisticsItem>
          <StatisticsLabel></StatisticsLabel>
          <StatisticsItem></StatisticsItem>
        </StatisticsRowDiv>
      </>
    );
  }
  function ShowRatio() {
    return <p>Two</p>;
  }
  function ShowFlow() {
    return <p>Three</p>;
  }

  const tabContArr = [
    {
      tabTitle: (
        <TabTitleDiv
          className={activeIndex === 0 ? "is-active" : "deactive"}
          onClick={() => tabClickHandler(0)}
        >
          {" "}
          통계{" "}
        </TabTitleDiv>
      ),
      tabCont: (
        <TabContDiv>
          <ShowStatistics></ShowStatistics>
        </TabContDiv>
      ),
    },
    {
      tabTitle: (
        <TabTitleDiv
          className={activeIndex === 1 ? "is-active" : "deactive"}
          onClick={() => tabClickHandler(1)}
        >
          {" "}
          자산별 비중{" "}
        </TabTitleDiv>
      ),
      tabCont: (
        <TabContDiv>
          <ShowRatio></ShowRatio>
        </TabContDiv>
      ),
    },
    {
      tabTitle: (
        <TabTitleDiv
          className={activeIndex === 1 ? "is-active" : "deactive"}
          onClick={() => tabClickHandler(2)}
        >
          {" "}
          자산 흐름{" "}
        </TabTitleDiv>
      ),
      tabCont: (
        <TabContDiv>
          <ShowFlow></ShowFlow>
        </TabContDiv>
      ),
    },
  ];

  return (
    <>
      <TabTitleContainer>
        {tabContArr.map((section, index) => {
          return section.tabTitle;
        })}
      </TabTitleContainer>
      <TabContContainer>{tabContArr[activeIndex].tabCont}</TabContContainer>
    </>
  );
}

export default ShowAnalysis;
