import styled from "styled-components";
import { useState } from "react";


const NavigatorConainer = styled.div`
    background-color: #f7f7f7;
    display: flex;
    width:100vw;
    height: 20vh;
    align-items: center;
    border-radius: 1vw;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);
`
const NavigatorHomeButton = styled.div`
    display:flex;
    width: 20vw;
    height: 14vh;
    align-items: center;
    font-size : 2.5rem;
`

function Navigator(){

    return(
        <NavigatorConainer>
            <NavigatorHomeButton>
                Vaiv
            </NavigatorHomeButton>
        </NavigatorConainer>
    );
}

export default Navigator;