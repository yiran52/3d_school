import { Menu,Layout} from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Manager from './manager';
import Scene from './scene';
import School from './school';


const { SubMenu } = Menu;


const {Header,Content} = Layout

class Home extends React.Component {
  state = {
    theme: 'dark',
    current: 'scene',
  };

  changeTheme = (value: any) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  handleClick = (e: { key: any; }) => {
   
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <>
      <Router>
      <Layout className="layout" style={{ height: "100%" }}>
        <Header>
        <Menu
          theme={'dark'}
          onClick={this.handleClick}
          defaultOpenKeys={['scene']}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="scene" icon={<MailOutlined />}>
          <Link to="/scene">场景</Link>
           
          </Menu.Item>
          <SubMenu key="school" icon={<AppstoreOutlined /> } title="智慧校园">
        
            <Menu.Item key="1">
            <Link to="/school">智慧教室</Link>
            </Menu.Item>
            <Menu.Item key="6">
            <Link to="">智慧食堂</Link>
            </Menu.Item>
            <Menu.Item key="7">
            <Link to="">智慧澡堂</Link></Menu.Item>
          </SubMenu>
          <Menu.Item key="manager" icon={<SettingOutlined />}>
          <Link to="/manager">托管</Link>
          </Menu.Item>
        </Menu>
        </Header>
        <Content>
          <div className="site-layout-content">
            <Routes>
              <Route path="scene" element={<Scene />} />
              <Route path="school" element={<School />} />
              <Route path="manager" element={<Manager/>} />
            </Routes>
          </div>
          </Content>
      </Layout>
    </Router>
      </>
    );
  }
}
export default Home