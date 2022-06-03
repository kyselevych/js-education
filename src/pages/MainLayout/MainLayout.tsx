import {Divider, Layout} from "antd";
import React from "react";
import Navigation from "components/Navigation/Navigation";
import {Outlet} from "react-router-dom";

function MainLayout() {
    return (
        <Layout style={{height: "100vh"}}>
            <Layout.Sider className="sider">
                <div className="sider__logo">
                    <span>JS</span> Education
                </div>
                <Divider/>
                <Navigation/>
            </Layout.Sider>
            <Layout.Content>
                <Outlet/>
            </Layout.Content>
        </Layout>
    );
}

export default MainLayout;