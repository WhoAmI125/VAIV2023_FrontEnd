import Navigator from "../components/Navigator";
import Title from "../components/Title";
import styled from "styled-components";
import axios from 'axios';
import {useState, useMemo, useEffect} from "react";
// import {useTable} from 'react-table';

const TopPickPageContainer = styled.div`
    display: flex;
    height: 100%;
    
    flex-direction: column;
`


const PaddingContainer = styled.div`
    height:19vh;
`
const TableContainer = styled.div`
    width: 70vw;
    padding: 10px 0 30px 20px;
`
const Tablerow = styled.div`
    // width: 80%;
    display: flex;
`

const Tabledata = styled.div`
    width: 20%;
    margin: 0;
    padding: 0;
    // justify-content: center;
    border: 1px solid black;
    text-align: center;
    fontSize: 16;
    line-height:4;
    // background: grey;
    // border-radius: 10%;
`
// const KosButton = styled.button`
//     display: float;
//     float: right;
//     text-align: center;
//     width: 8vw;
//     padding: 6px 12px;
//     border-radius: 8px;
//     font-size: 1rem;
//     line-height: 1.5;
//     border: 1px solid lightgray;
//     color: gray;
//     background: white;
// `

const ButtonContainer = styled.div`
    display: flex;
`

const KosButton = styled.button`
    /*공통 스타일*/
    // display: inline-flex;
    flex-direction: row;
    float:left;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-right: 1rem;


    /*크기*/
    height: 2.25rem;
    width: 7rem;
    font-size: 1rem;

    /*색상 */
    background: #228be6;
    &:hover{
        background: #339af0;
    }
    &:active{
        background: #1c7ed6;
    }

    // /*기타 */
    // & + & {
    //     margin-left: 1rem;
    // }
`

const Pick = styled.div`
    text-align: left;
    padding-left: 10px;
    padding-botton: 10px;
    font-weight: bold;
    font-style: italic;
    font-size: 3rem;
`
/*
async function getData() {
    const response = await axios.get("http://127.0.0.1:80/toppick", {
        withCredentials: true
    })
    return response.data;
}
*/

interface Stock {
    id: string;
    data: string;
}

function TopPickPage(){

    axios.defaults.withCredentials = true;

    const [data, setData] = useState(String);
    let obj;
/*     useEffect(()=>{
        // let completed = false;

        axios.get(`/toppick`,
        {
        withCredentials: true // 쿠키 cors 통신 설정
        }).then(response => {
            // console.log(response)
            let tmp = JSON.stringify(response.data);
            console.log(tmp);
            const want = JSON.parse(tmp);
            obj = Object.keys(want).length; // 항목 개수
            console.log(obj)
            let comma = ','
            console.log(want.data)
            const realwant = want.data2.split(comma)
        
            setData(realwant) // 콤마 빼고 항목들
        });
        
    }, []); */

    const [check, setCheck] = useState(true);

    console.log(check);

    return(
        <TopPickPageContainer>
            <Title/>
            <Navigator/>
            <PaddingContainer></PaddingContainer>
            <ButtonContainer>
                <KosButton onClick={() => setCheck(true)}>KOSPI</KosButton>
                <KosButton onClick={() => setCheck(false)}>KOSDAQ</KosButton>
            </ButtonContainer>
            <br></br>
            <Pick>Today's Top Pick</Pick>
            <TableContainer>
                <Tablerow>
                    <Tabledata>종목명</Tabledata>
                    <Tabledata>현재가</Tabledata>
                    <Tabledata>등락률</Tabledata>
                    <Tabledata>대비</Tabledata>
                    <Tabledata>거래량</Tabledata>
                </Tablerow>
                <Tablerow>
                    {check? 
                    <Tabledata>{data[1]}</Tabledata>:<Tabledata>{data[2]}</Tabledata>}
                </Tablerow>
                
                {/* if(check === 1){
                    <Tablerow>
                        <Tabledata>삼성전자</Tabledata>
                        <Tabledata>45555</Tabledata>
                        <Tabledata>+12%</Tabledata>
                        <Tabledata>+669</Tabledata>
                        <Tabledata>6145148</Tabledata>
                    </Tablerow>
                }
                if(check === 2){

                } */}
                {/* else{
                    <Tablerow>
                        <Tabledata>SK하이닉스</Tabledata>
                        <Tabledata>72422</Tabledata>
                        <Tabledata>-2.5%</Tabledata>
                        <Tabledata>-1878</Tabledata>
                        <Tabledata>1126589</Tabledata>
                    </Tablerow>
                    <Tablerow>
                        <Tabledata>{tmp}</Tabledata>
                        <Tabledata>72422</Tabledata>
                        <Tabledata>-2.5%</Tabledata>
                        <Tabledata>-1878</Tabledata>
                        <Tabledata>1126589</Tabledata>
                    </Tablerow>
                } */}
            </TableContainer>
        </TopPickPageContainer>
    );
}


export default TopPickPage;