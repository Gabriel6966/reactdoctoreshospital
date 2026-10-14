import React, { Component } from 'react'
import Global from '../Global';
import axios from "axios";
import { Navigate } from 'react-router-dom';
import ServiceHospitales from '../services/ServiceHospitales';

export default class CreateHospitales extends Component {
    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaDireccion = React.createRef();
    cajaTelefono = React.createRef();
    cajaCamas = React.createRef();
    url = Global.urlApiHospitales;
    service = new ServiceHospitales();


    inserHospital = (event) => {
        event.preventDefault();
        let request = "webresources/hospitales/post";
        let hospital = {
            idHospital: parseInt(this.cajaId.current.value),
            nombre: this.cajaNombre.current.value,
            direccion: this.cajaDireccion.current.value,
            telefono: this.cajaTelefono.current.value,
            camas: this.cajaCamas.current.value
        }
        this.service.insertHospital(hospital).then((result)=>{
            this.setState({
                status:true,
                mensaje:"Hospital insertado"
            })
        })
    }


    state = {
        mensaje: "",
        status: false
    }



    render() {
        return (
            <div>
                {this.state.status == true &&
                    (<Navigate to="/hospitales" />)
                }
                <h1> Create Hospital</h1>
                <h3 style={{ color: "fuchsia" }}>
                    {this.state.mensaje}
                </h3>
                <form>
                    <label>Id hospital</label>
                    <input type="number" ref={this.cajaId} className="form-control" />
                    <label>Nombre:</label>
                    <input type="text" ref={this.cajaNombre} className="form-control" />
                    <label>Direccion:</label>
                    <input type="text" ref={this.cajaDireccion} className="form-control" />
                    <label>Telefono:</label>
                    <input type="number" ref={this.cajaTelefono} className="from-control" />
                    <label>Camas:</label>
                    <input type="number" ref={this.cajaCamas} className="from-control" />
                    <button onClick={this.inserHospital} className="btn btn-primary mt-3">Insertar Hospital</button>
                </form>
            </div>
        )
    }
}
