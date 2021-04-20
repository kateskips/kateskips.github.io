import React from 'react';

import './App.css';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';



const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="App-header">Kate Lois G. Follett</Header>
        <Layout>
          <Sider
            width={200} className="site-layout-background">
            <Menu
              mode="inline"
              style={{ height: '100%', borderRight: 0, backgroundColor: '#637F42' }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="About">
                <Menu.Item key="1">Bio</Menu.Item>
                <Menu.Item key="2">Resume</Menu.Item>
                <Menu.Item key="3">Skills</Menu.Item>
                <Menu.Item key="4">Interests</Menu.Item>
                <Menu.Item key="5">Blog</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="Work">
                <Menu.Item key="6">Projects</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="Contact">
                <Menu.Item key="7">Social Media</Menu.Item>
                <Menu.Item key="8">Email</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
