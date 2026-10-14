import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import HomeComponent from './HomeComponent'
import { Routes, Route } from 'react-router-dom'
import DoctoresComponent from './DoctoresComponent'
import {useParams} from "react-router-dom"
import CreateHospitales from './CreateHospitales'
import HospitalesComponent from './HospitalesComponent'
import EjemploServiceComponent from './EjemploServiceComponent'

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
        <Route path="/createhospital" element={<CreateHospitales/>}/>
        <Route path="/hospitales" element={<HospitalesComponent/>}/>
        <Route path="/ejemplos" element={<EjemploServiceComponent/>}/>
      </Routes>
      </BrowserRouter>
    )
  }
}
