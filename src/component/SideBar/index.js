import React, { Component, PropTypes } from "react";
import { Menu, Icon } from "antd";

const SubMenu = Menu.SubMenu;

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  // shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return (
      <>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="light"
          style={{ width: 160, height: "100vh" }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="crown" />
                <span>推荐音乐</span>
              </span>
            }
          >
            <Menu.Item key="5">
              {" "}
              <Icon type="customer-service" />
              <span>发现音乐</span>
            </Menu.Item>
            <Menu.Item key="6">
              {" "}
              <Icon type="radar-chart" />
              <span>私人 FM</span>
            </Menu.Item>
            <Menu.Item key="7">
              {" "}
              <Icon type="video-camera" />
              <span>视频</span>
            </Menu.Item>
            <Menu.Item key="8">
              {" "}
              <Icon type="usergroup-add" />
              <span>朋友</span>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>我的音乐</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
          </SubMenu>
        </Menu>
      </>
    );
  }
}

SideBar.propTypes = {};

export default SideBar;
