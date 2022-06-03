import {Divider, Layout} from "antd";
import React from "react";
import Navigation from "components/Navigation/Navigation";
import {Outlet} from "react-router-dom";

function MainLayout() {
    return (
        <Layout style={{height: "100vh"}}>
            <Layout.Sider className="sider" width={250}>
                <div className="sider__logo">
                    <span>JS</span> Education
                </div>
                <Navigation/>
            </Layout.Sider>
            <Layout.Content>
                <div className="content">
                    <Outlet/>
                </div>
            </Layout.Content>
        </Layout>
    );
}

export default MainLayout;