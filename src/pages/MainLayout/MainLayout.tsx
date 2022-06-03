import {Layout} from "antd";
import React from "react";
import Navigation from "components/Navigation/Navigation";
import {Outlet} from "react-router-dom";

function MainLayout() {
    return (
        <Layout style={{height: "100vh"}}>
            <Layout.Sider
                className="sider"
                width={250}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <div className="sider__logo">
                    <span>JS</span> Education
                </div>
                <Navigation/>
            </Layout.Sider>
            <Layout.Content style={{marginLeft: 250}}>
                <div className="content">
                    <Outlet/>
                </div>
            </Layout.Content>
        </Layout>
    );
}

export default MainLayout;