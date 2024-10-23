import React from 'react';
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Test from '../components/Test/Test.jsx';

function TestPage() {
  return (
    <>
      <Header/>
      <div style={{margin:"2rem 4rem"}}>
        <Test/>
      </div>
      <Footer/>
    </>
  )
}

export default TestPage
