import React, {useEffect,useState} from 'react';

import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";

function NotFoundPage() {
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
      <div><h1>404 - Page Not Found</h1></div>
      <Footer/>
    </>
  )
}

export default NotFoundPage;
