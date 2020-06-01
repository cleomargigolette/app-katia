import axios from 'axios';
import BaseService from './BaseService.js';

export default class ConsultorService extends BaseService {


    salvarConsultor(primeiroNome,sobreNome,email,permissao,password){

        const dados = {
            primeiroNome:primeiroNome,
            sobreNome:sobreNome,
            email:email,
            permissao:permissao,
            password:password
        }

        return axios.post(`${this.baseUrl}public/consultor`,dados,{
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
    }


    buscarMaesPeloIdConsultor(){
        return axios.get(`${this.baseUrl}public/consultor/maes`,{
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
        
    }


    alterarSenha(id,password){
        const body ={
            id:id,
            password:password
        };
        return axios.put(`${this.baseUrl}public/consultor`, body, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
        
    }

    buscarConsultorPeloId(id){
        return axios.get(`${this.baseUrl}public/consultor/`+id)
    }

    buscarConsultoresAtivos(){
        return axios.get(`${this.baseUrl}public/consultor/ativo`,{
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
    }

    buscarUserPrincipal(){
        return axios.get(`${this.baseUrl}public/consultor/userPrincipal`,{
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
    }

    deletarConsultor(id){
        return axios.delete(`${this.baseUrl}public/consultor/`+id,{
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
    }

    loginConsultor(email,password){
        
        const dados = {
            email:email,
            password:password
        }
        
        return axios.post(`${this.baseUrl}public/login`,dados)
    }
}