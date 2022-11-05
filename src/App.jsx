import React from "react";
import Home from "./components/Home"
import Contact from "./components/contact"
import {Routes , BrowserRouter, Route } from 'react-router-dom'


export default function App(){
   
    return(
      <div className="app">
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
          </BrowserRouter>
       
       
      </div>

    )
}