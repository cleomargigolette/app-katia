import React, { Component } from 'react';
import { NomeEmpresaTop } from './../../../componentsCommons/nomeEmpresaTop/NomeEmpresaTop.js';
import { LogoHeader } from './../../../componentsCommons/logo/LogoHeader.js';
import { ListaMenuHeader } from './../../../componentsCommons/listaHeader/ListaMenuHeader.js';
import ServiceMae from './../../../service/MaeService.js';
import IconeLogin from './../../icon/iconeLogin.svg';
import IconFace from './../../icon/face.svg';
import IconInsta from './../../icon/insta.svg';
import IconWhats from './../../icon/whats.svg';
import { Redirect, Link } from 'react-router-dom';
import swall from  'sweetalert';
import ReactLoading from 'react-loading';
import './Login.css';

export class Login extends Component{
    constructor(){
        super();
        this.state = {
            cpf:"",
            primeiroNome:"",
            redirecionaConsultaMae:false,
            loading:false
        }
    }

    componentDidMount(){
        this.serviceMae = new ServiceMae();
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

    handleChange = (event) =>{
        const target = event.target;
        this.setState({
            [target.name]: target.value
        })

    }

    onSubmit=(event) => {
        event.preventDefault();

        this.setState({
            loading:true
        })

        this.serviceMae.buscarMaePeloCpfNome(this.state.cpf, this.state.primeiroNome).then((response)=>{
            localStorage.setItem("id",response.data.id);
            
            this.setState({
                redirecionaConsultaMae:!this.state.redirecionaConsultaMae,
                loading:false
            })
           
        }).catch(err =>{
            swall({
                title:'Verefique suas credenciais e tente novamente.',
                icon:'error',
            })
            this.setState({
                loading:false
            })
        })
    }

    render(){
        
        return(this.state.loading?<ReactLoading type={'spinningBubbles'} color={'#c06014'} height={'22%'} width={'22%'} id="loading"/>:!this.state.redirecionaConsultaMae?<div className="login">
            <div className="containerHeaderLogin"> 
                
                <LogoHeader/>
                
                <div className="redesSociaisLogin">
                      
                    <div>
                        <ListaMenuHeader href="https://www.facebook.com/assesoriarmraccoltoemoraes/" target="_blank" nome={<img  src={IconFace} alt="iconFace"/>}/>    
                    </div>
                    <div>
                        <ListaMenuHeader href="https://api.whatsapp.com/send?l=pt&amp;phone=5531992027747" target="_blank" nome={<img  src={IconWhats} alt="iconWhats"/>}/>
                    </div>
                    <div>
                        <ListaMenuHeader href="https://www.instagram.com/raccoltoemoraes?r=nametag" target="_blank" nome={<img  src={IconInsta} alt="iconInsta "/>}/>   
                    </div>
                    
                </div>

                <Link to="/" className="buttonHeaderMenu">VOLTAR</Link>
            
            </div>

            <NomeEmpresaTop/>
            <div className="formLogin">
                <form onSubmit={this.onSubmit}>
                    <img src={IconeLogin} alt="Imagem de login"/>
                    <label>Olá tudo bem?</label>
                    <input type="text" placeholder="Your Name" autoComplete="disable" name="primeiroNome" value={this.state.primeiroNome} onChange={this.handleChange}/>
                    <input type="password" placeholder="Password" autoComplete="disable" id="inputPassword" name="cpf" value={this.state.cpf} onChange={this.handleChange}/>
                    <label htmlFor="passwordShow" onClick={this.mostrarSenha} id="mostrarPassword">{this.mostrar}</label>
                    <input className="checkPassword" type="checkBox" id="passwordShow"></input>
                    <button type="onSubmit">
                        ENTRAR
                    </button>
                    <Link to="/" className="buttonVoltar">
                        VOLTAR
                    </Link>
                </form>
            </div>
        </div>:<Redirect to="/consultaprocesso"/>
        )
    }
}