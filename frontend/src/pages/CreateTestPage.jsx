import React, {useEffect, useState} from 'react';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import CreateTest from '../components/CreateTest/CreateTest';

function CreateTestPage() {
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
      <div style={{margin:"4rem", height:"100%"}}>
        <CreateTest/>
      </div>
      <Footer/>
    </>
  )
}

export default CreateTestPage;
