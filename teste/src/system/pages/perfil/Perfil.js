import React, { Component } from 'react';
import { HeaderMenu } from '../../component/header/HeaderMenu.js';
import { NomeEmpresaTop } from "../../../componentsCommons/nomeEmpresaTop/NomeEmpresaTop.js";
import ConsultorService from '../../../service/ConsultorService.js';
import ReactLoading from 'react-loading';
import { resetarCheckMenu } from './../../../commonsUtils/functionsUtils/resetarCheckMenu.js';
import swall from 'sweetalert';
import './Perfil.css';
import { Redirect } from 'react-router-dom';

export class Perfil extends Component {
    constructor(){
        super();
        this.state={
            nome:"",
            sobreNome:"",
            email:"",
            permissao:"",
            numeroMaes:"",
            redirecionaSystem:false,
            loading:true
        }
    }

    componentDidMount(){
        this.consultorService = new ConsultorService();

        this.consultorService.buscarConsultorPeloId(localStorage.getItem('idConsultor')).then((response)=>{
            this.setState({
                id:response.data.id,
                nome:response.data.primeiroNome,
                sobreNome:response.data.sobreNome,
                email:response.data.email,
                permissao:response.data.permissao,
                loading:false
            })
        })

        this.consultorService.buscarMaesPeloIdConsultor(localStorage.getItem('idConsultor')).then((response)=>{
            this.setState({
                numeroMaes:response.data
            })
        })
    }

    mostrar = "Mostrar Senha?";
    mostrarSenha(){
        var inputPassword = window.document.getElementById("inputPassword");
        var checkPassword = window.document.getElementById("passwordShow");
                
        if(checkPassword.checked){
            window.document.getElementById("mostrarPassword").innerHTML = "Ocultar Senha?";
            inputPassword.type = 'text'
        }else{
            window.document.getElementById("mostrarPassword").innerHTML = "Mostrar Senha?";
            inputPassword.type = 'password'
        }        
    }

    handleChange= (event)=>{
        const target = event.target;
        this.setState({
            [target.name]:target.value
        })
    }

    onSubmit=(event)=>{
        event.preventDefault()

        this.consultorService.alterarSenha(localStorage.getItem('idConsultor'),this.state.password).then((response)=>{
            swall('success',`${response.data.primeiroNome} você alterou sua senha.`,'success')
        }).catch(err =>{
            swall('error','Não foi possivel alterar sua senha.','error');
        })
    }

    renderCadastroMae=()=>{
        return(!this.state.redirecionaSystem?
        <div className="sectionPerfil">
                <div>
                    <h1>
                        Nome Completo
                    </h1>
                    <p>
                        {this.state.nome} {this.state.sobreNome}
                    </p>

                </div>
                <div>    
                    <h1>
                        Email
                    </h1>
                    <p>
                        {this.state.email}
                    </p>
                </div> 
                <div>   
                    <h1>
                        Permissao
                    </h1>
                    <p>
                        {this.state.permissao}
                    </p>
                </div>
                <div>    
                    <h1>
                        Números de mães cadastradas
                    </h1>
                    <p>
                        {this.state.numeroMaes.length}
                    </p>
                </div>
                <input type="checkbox" id="checkModalPassword"></input>
                <label className="buttonAtualizar" htmlFor="checkModalPassword">Mudar Senha</label>
                <form className="modalPassword" onSubmit={this.onSubmit}> 
                    <div>
                        <label>Novo password</label>
                        <input type="password" className="filhoSobreNome" placeholder="Password" autoComplete="disable" id="inputPassword" name="password" value={this.state.password} onChange={this.handleChange}></input>
                    </div>
                    <label htmlFor="passwordShow" onClick={this.mostrarSenha} id="mostrarPassword">{this.mostrar}</label>
                    <input className="checkPassword" type="checkBox" id="passwordShow"></input>
                    <div >
                        <button className="reseteButtonModal" type="onSubmit">SALVAR</button>
                        <label className="reseteButtonModal" type="resete" onClick={resetarCheckMenu.bind(this,"checkModalPassword")}>SAIR</label>                    
                    </div>
                    
                 </form>
        </div>:<Redirect to="/listar"/>
        )
    }

    

    render(){
        return(this.state.loading?<ReactLoading type={'spinningBubbles'} color={'#c06014'} height={'22%'} width={'22%'} id="loading"/>:
            <div className="perfil">
                <HeaderMenu/>
                <NomeEmpresaTop/>
                {this.renderCadastroMae()}
            </div>
        )
    }
}