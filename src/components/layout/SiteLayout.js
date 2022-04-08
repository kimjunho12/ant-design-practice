import React, { useState } from "react";
import { Layout } from "antd";

const { Sider } = Layout;

import SiteHeader from "./SiteHeader";
import SiteMenu from "./SiteMenu";
import SiteContent from "./SiteContent";
import SiteFooter from "./SiteFooter";

const Main = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <Layout className="site-layout">
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
          breakpoint="lg"
        >
          <SiteMenu />
        </Sider>
        <Layout>
          <SiteContent test={"hi"}>{children}</SiteContent>
          <SiteFooter />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Main;
