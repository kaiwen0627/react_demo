import React, { Component, PropTypes } from "react";
import {Icon} from 'antd'

import "./index.less";
import { from } from "_rxjs@6.5.2@rxjs";

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
        <Icon type="github" style={{ fontSize: 40,color:'#fff' }} />
        <span className="title">React Music</span>
      </div>
    );
  }
}

HeadBar.propTypes = {};

export default HeadBar;
