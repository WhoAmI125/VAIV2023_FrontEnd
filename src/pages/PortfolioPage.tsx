import styled from "styled-components";
import { useState } from "react";
import Portfolio from "../components/Portfolio";

const PortpolioPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #f7f7f7;
`;

function PortpolioPage() {
  return (
    <PortpolioPageContainer>
      <Portfolio></Portfolio>
    </PortpolioPageContainer>
  );
}

export default PortpolioPage;
