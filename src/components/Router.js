import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import HomeComponent from './HomeComponent'
import { Routes, Route } from 'react-router-dom'
import DoctoresComponent from './DoctoresComponent'
import {useParams} from "react-router-dom"

export default class Router extends Component {
  render() {
    function DoctoresElement(){
        let {idHospital}=useParams();
        return <DoctoresComponent idHospital={idHospital}/>
    }

    
    
    
    return (
      <BrowserRouter>
      <MenuComponent/>
      <Routes>
        <Route path="/" element={<HomeComponent/>}/>
        <Route path="/doctores/:idHospital" element={<DoctoresElement/>}/>
        
      </Routes>
      </BrowserRouter>
    )
  }
}
