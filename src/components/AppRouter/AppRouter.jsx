import React from "react";
import {Routes, Route} from "react-router-dom";
import MainLayout from "pages/MainLayout/MainLayout";
import Task from "pages/Task/Task";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path="task/:id" element={<Task />}/>
            </Route>
        </Routes>
    );
}

export default AppRouter;