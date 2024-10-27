import React, {useState, useEffect} from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Main from "../components/Main/Main.jsx";

function HomePage() {
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
    <div>
      <Header isLoggedIn={isLoggedIn}/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default HomePage
