import React, {useEffect,useState} from 'react';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Register from '../components/RegisterForm/Register.jsx';


function RegisterPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token){
      setIsLoggedIn(true);
    }else{
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn}/>
      <div style={{margin:"2rem 4rem"}}><Register/></div>
      
      <Footer/>
    </>
  )
}

export default RegisterPage
