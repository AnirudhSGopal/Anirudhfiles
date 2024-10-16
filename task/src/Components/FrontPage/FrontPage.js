import React from 'react'
import './FrontPage.css'
import Navbar from '../Navbar/Navbar'
import Page1 from '../pages/page1/page1'
import Page2 from '../pages/page2/page2'
import Page3 from '../pages/page3/page3'
import Page4 from '../pages/page4/page4'
function FrontPage() {
  return (
    <div>
      
      <Navbar></Navbar>
      <Page1></Page1>
      <Page2></Page2>
    <Page3></Page3>
    <Page4></Page4>

    </div>
  )
}

export default FrontPage
