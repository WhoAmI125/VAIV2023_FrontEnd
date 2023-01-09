import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import btn_login_kakao from "../assets/images/btn_login_kakao.png";
import skku_logo from "../assets/images/skku_logo.png";
import vaiv_logo from "../assets/images/vaiv_logo.png";
import { motion } from "framer-motion";
import React, {useState} from "react";
import KakaoLogin from "react-kakao-login";
import { KAKAO_KEY } from "../data/KakaoLoginData";


const LoginBoxContainer = styled.div`
    display:flex;
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

const KakaoBtnWrapper = styled.div`
    display: flex;
    height: 18vh;
    width: 40vw;
    justify-content: center;
    align-items : center;
    padding-bottom: 4vh;
`

const KaKaoBtn = styled(KakaoLogin)`
    padding: 0;
    width: 25vw;
    height: 7vh;
    line-height: 44px;
    color: #783c00;
    background-color: #FFEB00;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    &:hover{
        box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2)
    }
`


function LoginBox() {
/*     const [isOnMouse, setIsOnMouse] = useState(false);
    const navigate = useNavigate();
    function handleKakaoLogin(){
        alert("login");
        navigate("/toppick");
    };

    const handleOnMouse = () => {
        setIsOnMouse(true);
    };

    const handleOutMouse = () => {
        setIsOnMouse(false);
    }; */




    



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
            <KakaoBtnWrapper>
            {/* <KakaoImageContainer isMouse = {isOnMouse}
                    onClick={() => handleKakaoLogin()}
                    onMouseOver = {() => handleOnMouse()}
                    onMouseOut = {() => handleOutMouse()}
                >
                    <img src={btn_login_kakao}></img>
                </KakaoImageContainer> */}

                <KaKaoBtn
                    token={KAKAO_KEY}
                    onSuccess={console.log}
                    onFail={console.error}
                    onLogout={console.info}
                
                />



            </KakaoBtnWrapper>
        </LoginBoxContainer>
    );
}


export default LoginBox;

