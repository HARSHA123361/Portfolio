import React from 'react'
import Header from '../components/Header/Header'
import Homepage from '../components/Homepage/Homepage'
import Aboutpage from '../components/Aboutpage/Aboutpage'
import Projectlist from '../components/Projectlist/Projectlist'
import Contact from '../components/Contactpage/Contactpage'
function Home() {
  return (
    <>
    <div>
      <Header />
    </div>
    <div>
      <Homepage />
    </div>  
    <div>
      <Aboutpage />
    </div> 
    <div>
      <Projectlist />
    </div> 
    <div>
      <Contact />
    </div> 
    </>
  )
}

export default Home