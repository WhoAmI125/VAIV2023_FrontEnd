import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import { useRecoilValue } from "recoil";
import { isLoggedInState } from "./atoms/LoginAtom";


function AppRouter() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;