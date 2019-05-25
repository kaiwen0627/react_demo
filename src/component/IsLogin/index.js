import React from 'react'
import Store from '../../redux/index'

const store = Store().store;

export default (WropComponent) => {
  const isLogin = !!store.User.id;
  console.log(isLogin)
  if (isLogin) {
    return <WropComponent></WropComponent>
  }
  else {
    this.props.history.push("/");
    return ;
  }
}
