import Navigator from "../components/Navigator";
import Title from "../components/Title";
import styled from "styled-components";
import {useState} from "react";

const TopPickPageContainer = styled.div`
    display: flex;
    height: 100%;
    
    flex-direction: column;
`


const PaddingContainer = styled.div`
    height:19vh;
`


const Testcontainer = styled.div`
    height:50vh;
    font-size: 2rem;
`


function TopPickPage(){
    return(
        <TopPickPageContainer>
            <Title/>
            <Navigator/>
            <PaddingContainer></PaddingContainer>
            <Testcontainer>12</Testcontainer>
            <Testcontainer>34</Testcontainer>
            <Testcontainer>56</Testcontainer>
            <Testcontainer>78</Testcontainer>
            <Testcontainer>910</Testcontainer>
            <Testcontainer>1112</Testcontainer>
            <Testcontainer>1314</Testcontainer>
            <Testcontainer>1516</Testcontainer>
            <Testcontainer>1718</Testcontainer>
            <Testcontainer>1820</Testcontainer>


        </TopPickPageContainer>
    );
}


export default TopPickPage;