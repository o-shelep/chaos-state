import React from 'react';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import CreateTest from '../components/CreateTest/CreateTest';

function CreateTestPage() {
  return (
    <>
      <Header/>
      <div style={{margin:"2rem 4rem"}}>
        <CreateTest/>
      </div>
      <Footer/>
    </>
  )
}

export default CreateTestPage;
