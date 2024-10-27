import React , {useEffect, useState} from 'react';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Result from '../components/Result/Result.jsx';

function ResultPage() {
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
        <Result/>
      </div>
      <Footer />
    </>
  )
}

export default ResultPage
