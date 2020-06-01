import React, { Component } from 'react';
import { LogoHeader } from './../../../componentsCommons/logo/LogoHeader.js';
import { NomeEmpresaTop } from './../../../componentsCommons/nomeEmpresaTop/NomeEmpresaTop.js';
import { Link ,Redirect} from 'react-router-dom';
import IconeLogin from './../../../site/icon/iconeLogin.svg';
import ReactLoading from 'react-loading';
import LoginService from './../../../service/ConsultorService.js';
import swall from 'sweetalert';

export class LoginSystem extends Component{
    constructor(){
        super();
        this.state = {
            email:'',
            password:'',
            redirecionaHomeSystem:false,
            loading:false
        }
    }

    componentDidMount(){
        this.loginService = new LoginService();
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
        this.loginService.loginConsultor(this.state.email, this.state.password).then((response)=>{
            
            localStorage.setItem('token',response.data.accessToken);

            this.setState({
                redirecionaHomeSystem:true, 
                loading:false    
            })
           
        }).catch(err =>{
            this.setState({
                loading:false
            })
            swall({
                title:'Verefique suas credenciais e tente novamente.',
                icon:'error'           
            })
        })    

    }

    renderPage =() => {
        return(this.state.redirecionaHomeSystem?<Redirect to="/listar"/>:
        <div className="login">
            <div className="containerHeaderLogin"> 
                
                <LogoHeader/>

                <Link to="/" className="buttonHeaderMenu">VOLTAR</Link>
            
            </div>

            <NomeEmpresaTop/>
            <div className="formLogin">
                <form onSubmit={this.onSubmit}>
                    <img src={IconeLogin} alt="Imagem de login"/>
                    <label>Olá tudo bem?</label>
                    <input type="text" placeholder="Your email" autoComplete="disable" name="email" value={this.state.email} onChange={this.handleChange}/>
                    <input type="password" placeholder="Password" autoComplete="disable" id="inputPassword" name="password" value={this.state.password} onChange={this.handleChange}/>
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
        </div>)}     
        
    render(){
        return(this.state.loading?<ReactLoading type={'spinningBubbles'} color={'#c06014'} height={'22%'} width={'22%'} id="loading"/>:this.renderPage())
    }    
}
