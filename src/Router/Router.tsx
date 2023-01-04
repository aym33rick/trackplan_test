import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import InputWord from "../pages/InputWord";
import DisplayWord from "../pages/DisplayWord";
import React from "react";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to={"/input-word"}/>}/>
                <Route path="/input-word" element={<InputWord/>}/>
                <Route path="/display-word" element={<DisplayWord/>}/>
                <Route path="*" element={<Navigate to={"/input-word"}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
