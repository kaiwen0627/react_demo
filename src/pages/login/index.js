import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./action";
import { Form, Input, Icon, Button, Checkbox, Carousel } from "antd";

import banner1 from "../../statics/banner1.jpg";
import banner2 from "../../statics/banner2.jpg";
import banner3 from "../../statics/banner3.jpg";

import "./index.less";
class Login extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.is_Login);
    if (nextProps.is_Login) {
      this.props.history.replace("/home");
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
  is_Login: store.User.code === 200 || false
});

const mapActionstoProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStatetoProps,
  mapActionstoProps
)(WrappedNormalLoginForm);
