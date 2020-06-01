import React, { Component } from 'react';
import ServiceConsultor from './../../../service/ConsultorService.js';
import { HeaderAdmin} from './../../component/headerAdmin/HeaderAdmin.js';
import { NomeEmpresaTop} from './../../../componentsCommons/nomeEmpresaTop/NomeEmpresaTop.js';
import swall from 'sweetalert';
import ReactLoading from 'react-loading';
import './DeletarConsultor.css';

export class DeletarConsultor extends Component{
    constructor(){
        super();
        this.state={
            listaConsultores:[],
            loading:true,
            redirecionaListaMaes:false
        }
    }

    componentDidMount(){
        this.ServiceConsultor = new ServiceConsultor();

        this.ServiceConsultor.buscarConsultoresAtivos().then((response)=>{
            this.setState({
                listaConsultores:response.data,
                loading:false
            })
        })
    }

    deletar=(id)=>{
        this.setState({
            loading:true
        })

        this.ServiceConsultor.deletarConsultor(id).then(()=>{

            this.ServiceConsultor.buscarConsultoresAtivos().then((response)=>{
                this.setState({
                    listaConsultores:response.data
                })
            })

            swall({
                title:'Consultor deletado.',
                icon:'success'
            })

            this.renderConsultores()

        }).catch(
            swall({
                title:'Não possível deletar consultor.',
                icon:'error'
            })
        )

        this.setState({
            loading:false
        })
    }

    renderConsultores = ( ) =>{
     
       return(
        this.state.listaConsultores.map((consultor, key) => {
            
            return(
                <div key={consultor.id} className="listConsultor">
                    <ul>
                        <li><strong>Consultor: </strong>{consultor.primeiroNome} {consultor.sobreNome}</li>
                        <li><strong>Email: </strong>{consultor.email}</li>
                        <div>
                            <label onClick={this.deletar.bind(this,consultor.id)}>Deletar</label>
                        </div>
                    </ul>
                    
                </div>
            )
        })
       )}

    render(){
       
        return(this.state.loading?<ReactLoading type={'spinningBubbles'} color={'#c06014'} height={'22%'} width={'22%'} id="loading"/>:
            <div>
                <HeaderAdmin/>
                <NomeEmpresaTop/>
                <div className="containerDeleteConsultor">
                    {this.renderConsultores()}
                </div>
                
            </div>
        )
    }
}