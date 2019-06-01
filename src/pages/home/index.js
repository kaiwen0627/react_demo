import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Layout } from "antd";

import HeadBar from "../../component/HearBar";
import SideBar from "../../component/SideBar";
import Banner from "../../component/Banner";
import * as actions from "./action";

import { getBanerList } from "../../tools/api";

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
    if (!this.props.User_isLogin) {
      this.props.history.replace("/");
      return;
    }

    getBanerList(3).then(data => {
      this.setState({
        banner: data.data.banners
      });
    });
  }

  componentDidMount() {
    console.log(this.props.actions);
    if (this.props.User_id) {
      this.props.actions.SetUserDetailInfo(this.props.User_id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.is_Login) {
      this.props.history.replace("/");
    }
  }

  render() {
    return (
      <div className="Home-Page">
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

const mapStatetoProps = store => ({
  User_isLogin: store.Login.islogin || false,
  User_id: store.Login.userID || ""
});

const mapActionstoProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStatetoProps,
  mapActionstoProps
)(Home);
