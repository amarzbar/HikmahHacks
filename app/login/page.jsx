import React from 'react'
import Auth_wrapper from '../components/auth_wrapper'
export default function login() {
  return ( 
    <>
    <Auth_wrapper isLogin={true} isRegister={true} isForgot={true}/>
    </>
   )
}
