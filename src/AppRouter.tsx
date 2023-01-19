import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import TopPickPage from "./pages/TopPickPage";
import PortfolioPage from "./pages/PortfolioPage";



import { isLoggedInState } from "./atoms/LoginAtom";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/toppick" element={<TopPickPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
