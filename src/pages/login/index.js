import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import * as actions from "./action";
import { Form, Input, Icon, Button, Checkbox, Carousel } from "antd";

import banner1 from "../../statics/banner1.jpg";
import banner2 from "../../statics/banner2.jpg";
import banner3 from "../../statics/banner3.jpg";

import "./index.less";
class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.userID) {
      this.props.history.push("/home");
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.userID) {
      this.props.actions.setUserDetailInfo(nextProps.userID);
      this.props.history.push("/home");
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.isemail &&
          this.props.actions.userLoninByEmail(values.username, values.password);
        !values.isemail &&
          this.props.actions.userLoninByPhone(values.username, values.password);
        // this.props.actions.setUserIsLoginState()
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const imgLIst = [banner1, banner2, banner3];
    return (
      <div className="loginPage">
        <Carousel className="loginPage-banner-con" autoplay>
          {imgLIst.map(item => {
            return (
              <div key={item}>
                <img src={item} alt="网易云音乐" />
              </div>
            );
          })}
        </Carousel>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your phone or email!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Phone or Email"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("isemail", {
              valuePropName: "checked",
              initialValue: false
            })(<Checkbox>使用邮箱登录</Checkbox>)}
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

Login.propTypes = {};

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(Login);

const mapStatetoProps = store => ({
  userID: store.User.id
});

const mapActionstoProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default withRouter(
  connect(
    mapStatetoProps,
    mapActionstoProps
  )(WrappedNormalLoginForm)
);
