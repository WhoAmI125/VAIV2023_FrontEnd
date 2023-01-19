import styled from "styled-components";
import React, { useState } from "react";
import {Doughnut} from "react-chartjs-2";
import {
    Chart,
    ArcElement, 
    Legend, 
    Filler, 
    Title,
    Tooltip,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
} from 'chart.js';
import {
  SellStockType,
  HoldingStockType,
  AccountType,
  AccountJSON,
} from "../types/user_info";
Chart.register(
    ArcElement,
    Legend, 
    Filler,
    Title,
    Tooltip,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
);

const AnalysisContainer = styled.div`
  margin-top: 5vh;
  width: 60vw;
  height: 65vh;

  background-color: rgba(250, 250, 250, 0.876);
  border: 1px solid #a4a4a4;
  border-radius: 30px;
`;

const AnalysisMenuContainer = styled.div`
    display: flex;
    width:60vw;
    height: 10vh;
    padding-left: 5vw;
    padding-right: 2vw;
    padding-top : 1vh;
    align-items: center;
`
interface IAnalysisMenu{
    isMouse: boolean;
    isRatio: boolean;
    isActive: boolean;
}

const AnalysisMenu =styled.div<IAnalysisMenu>`
    display: flex;
    height: 6vh;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    width: ${(props) => (props.isRatio ? "5vw" : "4vw")};
    color: ${(props) => (props.isMouse ? "" : "#a1a1a1")};
    justify-content: center;
    align-items: center;
    border-bottom: ${(props) => (props.isActive ? "1px solid #525252" : "")};
`

const AnalysisStatisticConatiner = styled.div`
    display: flex;
    width: 60vw;
    height: 50vh;
    padding-top: 2vh;
    justify-content: center;
    align-items: center;
`

const StatisticWrapper = styled.div`
    display:flex;
    width:50vw;
    height:45vh;
    background-color: #f0f0f0;
    padding-top: 2vh;
    flex-direction: column;
    align-items: center;
`

interface IStatisticDiv{
    BackColor : boolean;
}

const StatisticDiv = styled.div<IStatisticDiv>`
    display: flex;
    width: 46vw;
    height: 6vw;
    align-items: center;
    background-color: ${(props) => props.BackColor ? "white" : "#f0f0f0"};;
    padding-left: 2vw;
    padding-right: 2vw;
`

interface IStatisticLabel{
    Clr : boolean;
    Width: string;
}

const StatisticLabel = styled.div<IStatisticLabel>`
    display: flex;
    color: ${(props) => props.Clr ? "" : "red"};
    width: ${(props) => props.Width};
    font-size: 1rem;
    font-weight: bold;
    justify-content: right;
`


type AccountProps = {
    account: string;
};


function AnalysisTab( { account }: AccountProps ){
    const [activeIndex, setActiveIndex] = useState(0);
    const [isOnMouseStatistic, setisOnMouseStatistic] = useState(false);
    const [isOnMouseRatio, setisOnMouseRatio] = useState(false);
    const [isOnMouseFlow, setisOnMouseFlow] = useState(false);
    const localStore = localStorage.getItem("stock_info");
    const info_all: AccountJSON = localStore && JSON.parse(localStore);
    const account_info = info_all[account];
    /*-----------------------------------------------------------*/
    /*실현 손익 정보 만들기*/
    const sell_stock_arr : Array<SellStockType> = account_info.sell_stock;
    const sell_stock_buy_total_arr = sell_stock_arr.map((element)=>{
        return element.buy_total_price;
    });
    const sell_stock_sell_total_arr = sell_stock_arr.map((element)=>{
        return element.sell_total_price;
    });
    const sell_stock_buy_total_arr_sum = sell_stock_buy_total_arr.reduce(function add(sum,currValue){
        return sum+currValue;
    },0)
    const sell_stock_sell_total_arr_sum = sell_stock_sell_total_arr.reduce(function add(sum,currValue){
        return sum+currValue;
    },0)
    const profit_loss = sell_stock_sell_total_arr_sum - sell_stock_buy_total_arr_sum;

    /*실현 손익 정보 만들기*/
    /*-----------------------------------------------------------*/
    

    /*-----------------------------------------------------------*/
    /*비중 탭 Doughnut Chart 정보 만들기*/
    const holding_stock_arr : Array<HoldingStockType> = account_info.holding_stock;
    // stock_label Array 만들기
    const stock_labels = holding_stock_arr.map((element)=>{
        return element.stockname;
    });
    // stock_buy_total_price Array 만들기
    const stock_buy_total_price = holding_stock_arr.map((element)=>{
        return element.buy_total_price;
    });
    // stock_buy_total_price Array 전체 합 구하기
    const stock_buy_total_price_sum = stock_buy_total_price.reduce(function add(sum,currValue){
        return sum+currValue;
    },0)
    // holding_stock / 전체합 => 보유 주식 비율 Arr 만들기
    const stock_ratio = holding_stock_arr.map((element)=>{
        const result = element.buy_total_price / stock_buy_total_price_sum;
        return result;
    }); 


    const dougnutChartData ={
        labels: stock_labels,
        datasets:[
            {
                labels: stock_labels,
                data: stock_ratio,
                borderWidth: 2,
                hoverBorderWidth: 3,
                
                backgroundColor:[
                    'rgba(42,159,214,1)',
                    'rgba(119,179,0,1)',
                    'rgba(153,51,204,1)',
                    'rgba(255,136,0,1)',
                    'rgba(204,0,0,1)',
                    'rgba(0,204,163,1)',
                    'rgba(240,242,0,1)',
                    'rgba(61,109,204,1)',
                    'rgba(82,82,82,1)',
                    'rgba(0,0,0,1)',
                ],
                fill:true
            }
        ],

    };
    /*비중 탭 Doughnut Chart 정보 만들기*/
    /*-----------------------------------------------------------*/
    
    

    const handletabClick = (index: number) => {
        setActiveIndex(index);
    };

    const handleMouseOn = (index: number ,state: boolean) =>{
        if(index === 0){
            setisOnMouseStatistic(state);
        }
        else if(index === 1){
            setisOnMouseRatio(state);
        }
        else{
            setisOnMouseFlow(state);
        }
    }


    function isActive(index: number) : boolean{
        if(index === activeIndex){
            return true;
        }
        else{
            return false;
        }
    }




    // 통계, 비중, 자산흐름 Content
    const tabContArr = [
    {
      tabCont: (
        <StatisticWrapper>
            <StatisticDiv BackColor ={true}>
                <StatisticLabel Clr = {true} Width = "4vw"> 총 손익 </StatisticLabel>
                <StatisticLabel Clr = {false} Width = "13vw"> +{account_info["real_gain"]} 원 </StatisticLabel>
                <StatisticLabel Clr = {false} Width = "13vw"> +{account_info["real_profit"]} % </StatisticLabel>
            </StatisticDiv>
            <StatisticDiv BackColor ={false}>
                <StatisticLabel Clr = {true} Width = "4vw"> 총 매입 </StatisticLabel>
                <StatisticLabel Clr = {true} Width = "13vw"> {account_info["total_buy"]} 원 </StatisticLabel>
            </StatisticDiv>
            <StatisticDiv BackColor ={false}>
                <StatisticLabel Clr = {true} Width = "4vw"> 실현 손익 </StatisticLabel>
                <StatisticLabel Clr = {true} Width = "13vw"> {profit_loss} 원 </StatisticLabel>
            </StatisticDiv>
            <StatisticDiv BackColor ={false}>
                <StatisticLabel Clr = {true} Width = "4vw"> 총 평가 </StatisticLabel>
                <StatisticLabel Clr = {true} Width = "13vw"> ? 원 </StatisticLabel>
            </StatisticDiv>
        </StatisticWrapper>
      ),
    },
    {
      tabCont: (
        <StatisticWrapper >
            <Doughnut
                data={dougnutChartData}
                options={{
                    plugins:{
                        legend:{
                            display: true,
                            position: "right",
                            labels:{
                                boxWidth: 13
                            }
                        }
                    }
                }}
                height={120}
            />
        </StatisticWrapper>
      ),
    },
    {
      tabCont: (
        <StatisticWrapper></StatisticWrapper>
      ),
    },
  ];





    return(
        <AnalysisContainer>
            <AnalysisMenuContainer>
                <AnalysisMenu 
                    isMouse = {isOnMouseStatistic}
                    isRatio = {false}
                    isActive = {isActive(0)}
                    onMouseOver={() => handleMouseOn(0, true)}
                    onMouseOut ={() => handleMouseOn(0, false)}
                    onClick={() => handletabClick(0)}
                >
                    통계
                </AnalysisMenu>
                <AnalysisMenu 
                    isMouse = {isOnMouseRatio}
                    isRatio = {false}
                    isActive = {isActive(1)}
                    onMouseOver={() => handleMouseOn(1, true)}
                    onMouseOut ={() => handleMouseOn(1, false)}
                    onClick={() => handletabClick(1)}
                >
                    비중
                </AnalysisMenu>
                <AnalysisMenu
                    isMouse = {isOnMouseFlow}
                    isRatio = {true}
                    isActive = {isActive(2)}
                    onMouseOver={() => handleMouseOn(2, true)}
                    onMouseOut ={() => handleMouseOn(2, false)}
                    onClick={() => handletabClick(2)}
                >
                    자산흐름
                </AnalysisMenu>
            </AnalysisMenuContainer>
            <AnalysisStatisticConatiner>
                {tabContArr[activeIndex].tabCont}
            </AnalysisStatisticConatiner>

        </AnalysisContainer>
    );

}



export default AnalysisTab;