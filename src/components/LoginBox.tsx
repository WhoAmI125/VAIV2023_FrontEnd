import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import btn_login_kakao from "../assets/images/btn_login_kakao.png";
import skku_logo from "../assets/images/skku_logo.png";
import vaiv_logo from "../assets/images/vaiv_logo.png";
import { motion } from "framer-motion";
import React, {useState} from "react";

const LoginBoxContainer = styled.div`
    flex-direction: column;
    background-color: #f7f7f7;
    width: 40vw;
    height: 36vh;
    border-radius: 1vw;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);
`
const LogoContainer = styled.div`
    height: 18vh;
    width: 40vw;
    flex-direction: column;
    padding-bottom: 2.5vh;
`


const VaivImageContainer = styled.div`
    display:flex;
    height: 13vh;
    justify-content: center;
    padding-top: 3vh;
    padding-bottom: 2vh;
`
const SkkuImageContainer = styled.div`
    display:flex;
    height: 4vh;
    padding-left:1vw;
    padding-top:1vh;
`
interface IKakaoImageContainer {
    isMouse: boolean;
}


const KakaoImageContainer = styled.div<IKakaoImageContainer>`
    display:flex;
    height: ${(props) => (props.isMouse ? "12.2vh" : "12vh")};
    justify-content: center;
    padding-top: 2vh;
    padding-bottom: 2vh;
    cursor: pointer;
`




function LoginBox() {
    const [isOnMouse, setIsOnMouse] = useState(false);

    function handleKakaoLogin(){
        alert("login");
    };

    const handleOnMouse = () => {
        setIsOnMouse(true);
    };

    const handleOutMouse = () => {
        setIsOnMouse(false);
    };

    return(
        <LoginBoxContainer>
            <LogoContainer>
                <SkkuImageContainer>
                    <img src={skku_logo}></img>
                </SkkuImageContainer>
                <VaivImageContainer>
                    <img src={vaiv_logo}></img>
                </VaivImageContainer>
            </LogoContainer>
            <LogoContainer>
                <KakaoImageContainer isMouse = {isOnMouse}
                    onClick={() => handleKakaoLogin()}
                    onMouseOver = {() => handleOnMouse()}
                    onMouseOut = {() => handleOutMouse()}
                >
                    <img src={btn_login_kakao}></img>
                </KakaoImageContainer>

            </LogoContainer>
        </LoginBoxContainer>
    );
}


export default LoginBox;