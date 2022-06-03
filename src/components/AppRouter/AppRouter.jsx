import React from "react";
import {Routes, Route} from "react-router-dom";
import MainLayout from "pages/MainLayout/MainLayout";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path="task/:id" element={<></>}/>
            </Route>
        </Routes>
    );
}

export default AppRouter;