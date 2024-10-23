import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Register from '../components/RegisterForm/Register.jsx';


function RegisterPage() {
  return (
    <>
      <Header/>
      <div style={{margin:"2rem 4rem"}}><Register/></div>
      
      <Footer/>
    </>
  )
}

export default RegisterPage
