import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Icon, Avatar, Popover, Button } from "antd";
import { userLogout } from "../../pages/login/action";

import "./index.less";

class HeadBar extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {
    console.log(this.props);
  }

  componentWillReceiveProps(nextProps) {}

  // shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  logout = () => {
    console.log(this.props);
    this.props.userLogout();
    // localStorage.removeItem('persist:root')
  };

  render() {
    const content = (
      <div className="grxx">
        <p>昵称：{this.props.user_info_snickname}</p>
        <p>等级：{this.props.user_info_level}</p>
        <p>签名：{this.props.user_info_signature}</p>
      </div>
    );
    return (
      <div className="head-bar">
        <div className="left">
          <Icon type="github" style={{ fontSize: 40, color: "#fff" }} />
          <span className="title">React Music</span>
        </div>
        <div className="right">
          <Popover
            content={content}
            title="个人信息"
            trigger="click"
            placement="bottom"
          >
            <Avatar src={this.props.user_info_img} />
          </Popover>
          <Button className="logout-btn" onClick={this.logout} icon="poweroff" ghost>退出</Button>
        </div>
      </div>
    );
  }
}

HeadBar.propTypes = {};

const mapStatetoProps = store => ({
  is_Login: store.Login.islogin || false,
  user_info_img: store.UserInfo.profile.avatarUrl || "",
  user_info_level: store.UserInfo.level || "",
  user_info_signature: store.UserInfo.profile.signature || "",
  user_info_snickname: store.UserInfo.profile.nickname || ""
});

const mapActionstoProps = dispatch => ({
  userLogout: bindActionCreators(userLogout, dispatch)
});

export default connect(
  mapStatetoProps,
  mapActionstoProps
)(HeadBar);
