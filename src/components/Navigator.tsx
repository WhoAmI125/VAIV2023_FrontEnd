import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const LogOutButton = styled.button`
    display: flex;
    height: 10vh;
    width: 10vw;
`

function Navigator(){
    const navigate = useNavigate();


    function handleKakaoLogin(){
        if(window.Kakao.Auth.getAccessToken()){
            window.Kakao.API.request({
                url:"/v1/user/unlink",
                success(res: any){
                    alert("로그아웃 되었습니다");
                    navigate('/');
                    console.log(res);
                },
                fail(error: any){
                    console.log(error);
                },
            });
            window.Kakao.Auth.setAccessToken(undefined);
        }

    }


    return(
        <NavigatorConainer>
            <NavigatorHomeButton>
                Vaiv
            </NavigatorHomeButton>
            <LogOutButton onClick={handleKakaoLogin}>
                로그아웃
            </LogOutButton>
        </NavigatorConainer>
    );
}

export default Navigator;