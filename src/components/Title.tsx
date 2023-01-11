import backgorund from "../assets/images/title_background.png";
import title from "../assets/images/title.png";
import styled from "styled-components";


const TitleConainer = styled.div`
    background-image: url(${title});
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    display: flex;
    width: 100%;
    height: 15vh;
    
`



function Title(){
    return(
        <TitleConainer></TitleConainer>
    );

}

export default Title