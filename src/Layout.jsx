import React from 'react'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
   
   <>
   <Header/>

    <Outlet/>  
   <Footer/>
   </>
  )
}

export default Layout

//outlet means header footer will be same always only beech ka parts dynamically change hoga jab bhi home contact ya about pe 
                //click karenge
