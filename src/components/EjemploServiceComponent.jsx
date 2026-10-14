import React, { Component } from 'react'
import ServiceEjemplo from '../services/ServiceEjemplo'

export default class EjemploServiceComponent extends Component {

    service=new ServiceEjemplo();
    state={
        mensaje1:"",
        mensaje2:"",
        comics:[]
    }

    loadData=()=>{
        this.setState({
            mensaje1: this.service.getSaludo(),
            mensaje2: this.service.getDia("yo"),
            comics:this.service.getComics()
        })
    }

    componentDidMount=()=>{
        this.loadData();
    }

  render() {
    return (
      <div>
        <h1>Hola desde el componente</h1>
        <h2>Mensaje 1: {this.state.mensaje1}</h2>
        <h2>Mensaje 2: {this.state.mensaje2}</h2>

        <h1>Comics</h1>
        <div className='row'>
            {this.state.comics.map((comic, index) => (
                <div className='col-md-4' key={index}> 
                    <img style={{width: '100%', height: 'auto'}} src={comic.imagen} alt={comic.titulo} />
                    <h3 style={{textAlign:'center'}}>{comic.titulo}</h3>
                    <p style={{textAlign:'center'}}>{comic.descripcion}</p>
                </div>

            ))}
        </div>


      </div>
    )
  }
}
