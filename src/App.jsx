import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home2 from './Components/Home2'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Doctors from './Components/Doctors'
import Blogs from './Components/Blogs'
import Testimonials from './Components/Testinomials'
import Footer from './Components/Footer'


function App() {

  return (

    <>
     <Navbar></Navbar>
     <main>
      <div id='home'><Home></Home></div>
      <div id='home2'><Home2></Home2></div>
      <div id='about'><About></About></div>
      <div id='services'><Services></Services></div>
      <div id='testimonials'><Testimonials></Testimonials></div>

     </main>
     <Footer></Footer>
    </>

  )
}

export default App
