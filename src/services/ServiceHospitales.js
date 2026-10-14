import axios from "axios";
import Global from "../Global";

export default class ServiceHospitales {

    insertHospital(hospital){
        return new Promise(function(resolve){
            let url = Global.urlApiHospitales;
            let request = "api/hospitales";
            axios.post(url + request, hospital).then(response=>{
                console.log("insertando hospital");
                resolve(response.data);
            })
        })

        }
    


    getDoctoresHospital(idHospital){
        let url = Global.urlApiDoctores;
        let request = "api/doctores/doctoreshospital/" + idHospital;
        return axios.get(url + request).then((response) => {
            console.log("leyendo doctores del hospital");
            return response.data;
        }).catch((error) => {
            console.error("error al leer doctores del hospital", error);
            throw error;
        });
    }


    getHospitales() {
        let url = Global.urlApiHospitales;
        let request = "webresources/hospitales";
        return axios.get(url + request).then((response) => {
            console.log("leyendo hospitales");
            return response.data;
        }).catch((error) => {
            console.error("error leyendo hospitales", error);
            throw error;
        });

    }


}
