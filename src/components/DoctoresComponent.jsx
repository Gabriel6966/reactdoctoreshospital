import React, { Component } from 'react'
import Global from '../Global'
import axios from "axios"

export default class DoctoresComponent extends Component {

    url = Global.urlApiDoctores;


    state = {
        doctores: [],
        detallesDoctor: null
    }


    loadDoctoresHospital = () => {
        let request = "api/doctores/doctoreshospital/" + this.props.idHospital;
        axios.get(this.url + request).then((response) => {
            this.setState({
                doctores: response.data
            })
        })
    }

    loadDetallesDoctor = (idDoctor) => {
        let request = "api/Doctores/" + idDoctor;
        axios.get(this.url + request).then((response) => {
            this.setState({
                detallesDoctor: response.data
            })
        })

    }

    componentDidMount = () => {
        this.loadDoctoresHospital();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idHospital != this.props.idHospital) {
            this.loadDoctoresHospital();
        }
    }

    render() {
        return (
            <div>
                <h1>
                    Doctores del hospital {this.props.idHospital}
                </h1>
                <table className="table table-primary">
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Especialidad</th>
                            <th>Salario</th>
                            <th>Hospital</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.doctores.map((doctor, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{doctor.apellido}</td>
                                        <td>{doctor.especialidad}</td>
                                        <td>{doctor.salario}</td>
                                        <td>{doctor.idHospital}</td>
                                        <td>
                                            <button onClick={() => this.loadDetallesDoctor(doctor.idDoctor)} className="btn btn-success">Detalles de los doctores</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                {this.state.detallesDoctor && (
                    <div className="card mt-3">
                        <div className="card-body">
                            <h3>Detalles del doctor</h3>
                            <p>Apellido: {this.state.detallesDoctor.apellido}</p>
                            <p>Especialidad: {this.state.detallesDoctor.especialidad}</p>
                            <p>Salario: {this.state.detallesDoctor.salario}</p>
                            <p>Hospital: {this.state.detallesDoctor.idHospital}</p>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
