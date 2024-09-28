import React from 'react'
import './KioskPage.css'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Aside from '../components/Aside'
import Main from '../components/Main'

function KioskPage() {
  return (
    <div className='container'>
      <Header />
      
      <Nav />
      
      <Aside />
      
      <Main />
    </div>
  )
}

export default KioskPage