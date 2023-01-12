import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import React, { useState } from "react";

const TabTitleContainer = styled.div`
  display: flex;
`;
const TabContContainer = styled.div``;
const TabTitleDiv = styled.div`
  width: 10vw;
  height: 5vh;
  margin: auto;
  margin-top: 2vh;
  background-color: red;
  text-align: center;
  line-height: 5vh;
`;
const TabContDiv = styled.div`
  margin-left: 5vw;
  margin-top: 3vh;
`;

function ShowAnalysis() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = (index: number) => {
    setActiveIndex(index);
  };

  const tabContArr = [
    {
      tabTitle: (
        <TabTitleDiv
          className={activeIndex === 0 ? "is-active" : ""}
          onClick={() => tabClickHandler(0)}
        >
          {" "}
          통계{" "}
        </TabTitleDiv>
      ),
      tabCont: <TabContDiv> One </TabContDiv>,
    },
    {
      tabTitle: (
        <TabTitleDiv
          className={activeIndex === 1 ? "is-active" : ""}
          onClick={() => tabClickHandler(1)}
        >
          {" "}
          자산별 비중{" "}
        </TabTitleDiv>
      ),
      tabCont: <TabContDiv> Two </TabContDiv>,
    },
    {
      tabTitle: (
        <TabTitleDiv
          className={activeIndex === 1 ? "is-active" : ""}
          onClick={() => tabClickHandler(2)}
        >
          {" "}
          자산 흐름{" "}
        </TabTitleDiv>
      ),
      tabCont: <TabContDiv> Three </TabContDiv>,
    },
  ];

  const tabTitleList = ["통계", "비중", "흐름"];
  const asset_info = {
    total_gain: 278000,
    total_profit: 16.02,
  };

  return (
    <>
      <TabTitleContainer className="tabs is-boxed">
        {tabContArr.map((section, index) => {
          return section.tabTitle;
        })}
      </TabTitleContainer>
      <TabContContainer>{tabContArr[activeIndex].tabCont}</TabContContainer>
    </>
  );
}

export default ShowAnalysis;
