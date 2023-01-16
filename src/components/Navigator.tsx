import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import vaiv_logo from "../assets/images/vaiv_logo.png";
import { BiUserCircle } from "react-icons/bi";

const NavigatorConainer = styled.div`
  background-color: #f7f7f7e6;
  position: fixed;
  display: flex;
  width: 100%;
  height: 4vh;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  margin-top: 15vh;
  padding-left: 10vw;
`;

interface INavigatorButton {
  isMouse: boolean;
}

const NavigatorButton = styled.div<INavigatorButton>`
  display: flex;
  width: 25vw;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: ${(props) => (props.isMouse ? "#25252544" : "#f7f7f7e6")};
  color: ${(props) => (props.isMouse ? "white" : " ")};
  cursor: pointer;
`;

const NavigatorUserConainer = styled.div`
  display: flex;
  width: 20vw;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-left: 25vw;
  color: #02032eef;
`;

const NavigatorLogoutConainer = styled.div`
  display: flex;
  width: 10vw;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`;

const NavigatorUserNameConainer = styled.div`
  display: flex;
  width: 10vw;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  margin-left: 2vw;
`;

function Navigator() {
  const [isOnMouseTopPick, setIsOnMouseTopPick] = useState(false);
  const [isOnMousePortfolio, setIsOnMousePortfolio] = useState(false);
  const navigate = useNavigate();

  const username_default = localStorage.getItem("nickname");

  const handleOnMouseTopPick = () => {
    setIsOnMouseTopPick(true);
  };
  const handleOutMouseTopPick = () => {
    setIsOnMouseTopPick(false);
  };
  const handleOnMousePortfolio = () => {
    setIsOnMousePortfolio(true);
  };
  const handleOutMousePortfolio = () => {
    setIsOnMousePortfolio(false);
  };
  const handlePortfolioClick = () => {
    navigate("/portfolio");
  };
  const handleTopPickClick = () => {
    navigate("/toppick");
  };

  function handleKakaoLogOut() {
    if (window.Kakao.Auth.getAccessToken()) {
      window.Kakao.API.request({
        url: "/v1/user/unlink",
        success(res: any) {
          alert("로그아웃 되었습니다");
          console.log(res);

          /* 로컬스토리지 삭제 */
          localStorage.removeItem("id");
          localStorage.removeItem("nickname");
          localStorage.removeItem("account_list");
          localStorage.removeItem("stock_info");
        },
        fail(error: any) {
          console.log(error);
        },
      });
      window.Kakao.Auth.setAccessToken(undefined);
    }
    navigate("/");
  }

  return (
    <NavigatorConainer>
      <NavigatorButton
        onClick={handleTopPickClick}
        isMouse={isOnMouseTopPick}
        onMouseOver={handleOnMouseTopPick}
        onMouseOut={handleOutMouseTopPick}
      >
        TopPick
      </NavigatorButton>
      <NavigatorButton
        onClick={handlePortfolioClick}
        isMouse={isOnMousePortfolio}
        onMouseOver={handleOnMousePortfolio}
        onMouseOut={handleOutMousePortfolio}
      >
        Portfolio
      </NavigatorButton>

      <NavigatorUserConainer>
        <NavigatorUserNameConainer>
          <BiUserCircle size="20%"></BiUserCircle>
          {username_default} 님
        </NavigatorUserNameConainer>
        <NavigatorLogoutConainer onClick={handleKakaoLogOut}>
          로그아웃
        </NavigatorLogoutConainer>
      </NavigatorUserConainer>
    </NavigatorConainer>
  );
}

export default Navigator;
