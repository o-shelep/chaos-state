import React from 'react';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Result from '../components/Result/Result.jsx';

function ResultPage() {
  return (
    <>
      <Header />
      <div style={{margin:"2rem 4rem"}}>
        <Result/>
      </div>
      <Footer/>
    </>
  )
}

export default ResultPage
