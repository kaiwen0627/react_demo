import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from './action'
import { Form, Input, Icon, Button, Checkbox } from 'antd'
import {login_phone,login_Email} from '../../tools/api'

import './index.less'
class Login extends Component {
  constructor(props) {
    super(props)

  }

  // componentWillMount () {

  // }

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

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);

        // !values.isemail&&login_phone(values.username, values.password).then(() => {
          
        // })
        // values.isemail&&login_Email(values.username, values.password).then(() => {
          
        // })

        this.props.actions.userLoninByEmail(values.username, values.password)
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="loginPage">
        <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your phone or email!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Phone or Email"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('isemail', {
            valuePropName: 'checked',
            initialValue: false,
          })(<Checkbox>使用邮箱登录</Checkbox>)}
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
      </div>
    )
  }
}

Login.propTypes = {

}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

const mapStatetoProps = (store) => ({
  userinfo: ''
})

const mapActionstoProps = (dispatch) => ({
  actions:bindActionCreators(actions,dispatch)
})

export default connect(mapStatetoProps,mapActionstoProps)(WrappedNormalLoginForm)