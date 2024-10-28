import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MoreTests from '../components/MoreTests/MoreTests';

function MoreTestsPage() {
  return (
    <>
      <Header/>
      <div style={{margin:"2rem 4rem"}}>
        <MoreTests/>
      </div>
      <Footer/>
    </>
  )
}

export default MoreTestsPage
