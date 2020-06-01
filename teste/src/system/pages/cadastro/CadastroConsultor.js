import React, { Component, Fragment} from 'react';
import ServiceConsultor from './../../../service/ConsultorService.js';
import { HeaderAdmin } from './../../component/headerAdmin/HeaderAdmin.js';
import { NomeEmpresaTop } from "./../../../componentsCommons/nomeEmpresaTop/NomeEmpresaTop.js";
import swall from 'sweetalert';
import './CadastroConsultor.css';

export class CadastroConsultor extends Component{
    constructor(){
        super();

        this.state={
            primeiroNome:"",
            sobreNome:"",
            email:"",
            permissao:"",
            password:"raccoltoemoraes"
        }
    }

    componentDidMount(){
        this.ServiceConsultor = new ServiceConsultor();
    }

    handleChange =(event) =>{
        const target = event.target;
        this.setState({
            [target.name]: target.value
        })
    }

    onSubmit=(event)=>{
        event.preventDefault()

        this.ServiceConsultor.salvarConsultor(this.state.primeiroNome.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),
        this.state.sobreNome.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),
        this.state.email,this.state.permissao,this.state.password).then((response)=>{
            this.setState({
                primeiroNome:"",
                sobreNome:"",
                email:"",
                permissao:""
            })
            swall({title:`Novo consultor criado: ${response.data.primeiroNome} ${response.data.sobreNome},
            com a senha padrão raccoltoemoraes. Para mudar acesse o perfil.`,
            icon:'success'})
        }).catch(err =>{
            swall({
                title:'Verifique os campos e tente novamente.',
                icon:'error'           
            })
        }) 
    }

    renderCadastroConsultor(){
        return(
            <form className="formCadastro" id="form" onSubmit={this.onSubmit}> 
            <h1>Dados do consultor</h1>
                <div className="cadastro">
                    <div>
                        <label>NOME</label>
                        <input autoComplete="off" maxlenght="30" type="text" name="primeiroNome" value={this.state.primeiroNome} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>SOBRE NOME</label>
                        <input autoComplete="off" maxlenght="30" type="text" name="sobreNome" value={this.state.sobreNome} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>EMAIL</label>
                        <input autoComplete="off" maxlenght="30" type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>PERMISSÃO</label>
                        <select autoComplete="off" maxlenght="30" type="text" name="permissao" value={this.state.permissao} onChange={this.handleChange}>
                            <option value="CONSULTOR">
                                CONSULTOR
                            </option>
                            <option value="ADMINISTRADOR">
                                ADMINISTRADOR
                            </option>
                        </select>
                    </div>
                    <button className="buttonForm" type="onSubmit">SALVAR</button>       
                </div>
           
            </form>
            )
    }

    render(){
        return(
            <Fragment>
            <div>
                <HeaderAdmin/>
                <NomeEmpresaTop/>
                {this.renderCadastroConsultor()}
            </div>
            </Fragment>
        )
    }
}