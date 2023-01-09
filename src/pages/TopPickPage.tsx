import Navigator from "../components/Navigator";
import styled from "styled-components";
import {useState} from "react";

const TopPickPageContainer = styled.div`
    display: flex;
    height: 100vh;
    background-color: green;
`

function TopPickPage(){
    return(
        <TopPickPageContainer>
            <Navigator/>
        </TopPickPageContainer>
    );
}


export default TopPickPage;