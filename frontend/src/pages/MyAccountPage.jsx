import React , {useEffect,useState} from 'react';

import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";
import Me from "../components/Me/Me.jsx";

function MyAccountPage() {
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
        <Me/>
      </div>
      <Footer/>
    </>
  )
}

export default MyAccountPage
