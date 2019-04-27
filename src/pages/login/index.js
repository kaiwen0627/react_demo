import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
class Login extends Component {
  constructor(props) {
    super(props)

  }

  componentWillMount () {

  }

  componentDidMount () {

  }

  componentWillReceiveProps (nextProps) {

  }

  shouldComponentUpdate (nextProps, nextState) {

  }

  componentWillUpdate (nextProps, nextState) {

  }

  componentDidUpdate (prevProps, prevState) {

  }

  componentWillUnmount () {

  }

  render () {
    return (
      <div>
        {this.props.user} is login...
      </div>
    )
  }
}

Login.propTypes = {

}

export default connect((store) => {
  return { user: store.UserReducer.name }
},null)(Login)