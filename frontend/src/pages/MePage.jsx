import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Me from '../components/Me/Me';

function MePage() {
  return (
    <>
      <Header/>
      <div style={{mrign:"2rem 4rem"}}>
        <Me/>
      </div>
      <Footer/>
    </>
  )
}

export default MePage
