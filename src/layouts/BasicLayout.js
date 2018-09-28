import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import { SiderMenu } from '@/components/SiderMenu';

import logo from '../assets/logo.svg';

class BasicLayout extends PureComponent {
  state = {
    rendering: true,
    isMobile: false
  };

  render() {

    const menuData = [{
      name: "dashboard",
      path: "/dashboard",
      icon: "dashboard",
      children: [{
        name: "analysis",
        path: "/dashboard/analysis"
      }]
    }];
    const layout = (
      <SiderMenu
        logo={logo}
        theme="dark"
        menuData={menuData}
        isMobile='false'
      />
    )

    return (
      <Layout>
        {layout}
        <Layout>
          <Layout.Header>header</Layout.Header>
          <Layout.Content>
            {this.props.children}
          </Layout.Content>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;