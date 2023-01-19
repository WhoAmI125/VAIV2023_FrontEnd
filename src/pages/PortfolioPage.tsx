import Navigator from "../components/Navigator";
import Title from "../components/Title";
import styled from "styled-components";
import { useState } from "react";
import AnalysisTab from "../components/AnalysisTab";
import AnalysisTable from "../components/AnalysisTable";


const PortpolioPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  //background-color: #f7f7f7;
`;



const PortpolioMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;
  background-color: #f7f7f7;
  align-items: center;
`;

const PaddingContainer = styled.div`
  height: 19vh;
`;

const PortfolioInterfaceContainer =styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 5vh;
  height: 10vh;
` 

const PortfolioAccountSelect = styled.select`
  width: 12vw;
  height: 5vh;
`;

const PortfolioAccountOption = styled.option``;


interface ITextBox {
  Width: string;
}
const ProtfolioTextBox = styled.div<ITextBox>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.0rem;
  font-weight: bold;
  width:${(props) => props.Width};
`



const AnalysisTableContainer = styled.div`
  width: 70vw;
  padding-top : 10vh;
  padding-bottom: 10vh;
`;


function PortpolioPage() {
  const localStore = localStorage.getItem("account_list");
  const accountList: string[] = localStore && JSON.parse(localStore);
  const [currAccount, setAccount] = useState(accountList[0]);


  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) =>{
    const value : string = event.target.value;
    setAccount(value);
  }

  return (
    <>
      <Title />
      <Navigator />
      <PaddingContainer></PaddingContainer>
      <PortpolioPageContainer>
        <PortpolioMainContainer>

          <PortfolioInterfaceContainer>
            <ProtfolioTextBox Width = "10vw">User id : {localStorage.getItem("id")}</ProtfolioTextBox>
            <ProtfolioTextBox Width = "5vw">현재 계좌</ProtfolioTextBox>
            <PortfolioAccountSelect onChange = {handleSelect}>
              {accountList.map((account) => (
              <PortfolioAccountOption value={account} key={account}>
                  {account}
               </PortfolioAccountOption>
             ))}
           </PortfolioAccountSelect>
          
           <ProtfolioTextBox Width = "8vw">선택된 계좌 : {currAccount}</ProtfolioTextBox>
           

          </PortfolioInterfaceContainer>

          <AnalysisTab account={currAccount}/>
          <AnalysisTableContainer>
            <AnalysisTable account={currAccount}/>
          </AnalysisTableContainer>
          

        </PortpolioMainContainer>         
      </PortpolioPageContainer>
    </>
  );
}

export default PortpolioPage;
