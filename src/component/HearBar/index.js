import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { Icon } from "antd";

import "./index.less";
class HeadBar extends Component {
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
      <div className="head-bar">
        <Icon type="github" style={{ fontSize: 40, color: "#fff" }} />
        <span className="title">React Music</span>
      </div>
    );
  }
}

HeadBar.propTypes = {};

export default connect(store => ({
  is_Login: store.isLogin
}))(HeadBar);
