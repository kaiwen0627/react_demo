import getDate from './service'


export const login_phone=(phone,password)=>{
  return getDate.get(`/login/cellphone?phone=${phone}&password=${password}`)
}

export const login_Email=(email,password)=>{
  return getDate.get(`/login?email=${email}&password=${password}`)
}