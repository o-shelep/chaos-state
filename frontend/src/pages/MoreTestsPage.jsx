import React, {useEffect,useState} from 'react';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import MoreTests from '../components/MoreTests/MoreTests';

function MoreTestsPage() {
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
        <MoreTests/>
      </div>
      <Footer/>
    </>
  )
}

export default MoreTestsPage
