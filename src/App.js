import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css';
import Bio from './Components/About/Bio';
import { Layout, Menu, Avatar } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';



const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
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
                <Menu.Item key="1">
                <Route exact path="/bio" component={Bio} /><Link to="/bio" />Bio</Menu.Item>
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
              }}>
              <Avatar size={64} icon={<UserOutlined />} />
              <br></br>
              </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
      </Router>
    </div>
  );
}

export default App;
