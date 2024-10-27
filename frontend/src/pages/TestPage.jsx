import React, {useState, useEffect} from 'react';
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Test from '../components/Test/Test.jsx';

function TestPage() {
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
      <div style={{margin:"2rem 4rem"}}>
        <Test/>
      </div>
      <Footer/>
    </>
  )
}

export default TestPage
