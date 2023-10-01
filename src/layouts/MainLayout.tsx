import React from "react";
import MainHeader from "@/layouts/components/MainHeader";
import CuscareDetail from "@/features/cuscare/cuscare-detail";
import CuscareSearch from "@/features/cuscare/cuscare-search";
import {Route, Routes} from "react-router-dom";

// <CuscareDetail/>
// <CuscareSearch />
const MainLayout: React.FC = () => {
    return (
        <>
            <MainHeader />
            <Routes>
                <Route path="/" Component={CuscareSearch} />
                <Route path="/detail" Component={CuscareDetail} />
            </Routes>

        </>
    )
}

export default MainLayout;