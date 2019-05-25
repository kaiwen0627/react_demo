import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Layout } from "antd";

import isLogin from '../../component/IsLogin'

import HeadBar from "../../component/HearBar";
import SideBar from "../../component/SideBar";
import Banner from "../../component/Banner";
import * as actions from "./action";

import { getBanerList } from "../../tools/api";

// import { Form, Input, Icon, Button, Checkbox, Carousel } from "antd";
// import { login_phone, login_Email } from "../../tools/api";

import "./index.less";

const { Content, Sider } = Layout;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banner: []
    };
  }

  componentWillMount() {
    getBanerList(3).then(data => {
      this.setState({
        banner: data.data.banners
      });
    });
  }

  // componentDidMount () {

  // }

  // componentWillReceiveProps (nextProps) {

  // }

  // shouldComponentUpdate (nextProps, nextState) {

  // }

  // componentWillUpdate (nextProps, nextState) {

  // }

  // componentDidUpdate (prevProps, prevState) {

  // }

  // componentWillUnmount () {

  // }

  render() {
    return (
      <div className="loginPage">
        <Layout>
          <HeadBar />
          <Layout>
            <Sider width={160}>
              <SideBar />
            </Sider>
            <Content>
              {this.state.banner.length && <Banner list={this.state.banner} />}
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

Home.propTypes = {};

// Home = isLogin(Home);

const mapStatetoProps = store => ({
  userinfo: ""
});

const mapActionstoProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStatetoProps,
  mapActionstoProps
)(Home);
