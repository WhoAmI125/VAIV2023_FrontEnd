import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import PortfolioPage from "./pages/PortfolioPage";
import TopPickPage from "./pages/TopPickPage";
import { useRecoilValue } from "recoil";
import { isLoggedInState } from "./atoms/LoginAtom";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/toppick" element={<TopPickPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
