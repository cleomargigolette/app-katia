import React, { Component } from 'react';
import { ContainerHeader} from './../../../componentsCommons/header/ContainerHeader.js';
import { LogoHeader } from './../../../componentsCommons/logo/LogoHeader.js';
import { ListaMenuHeader } from './../../../componentsCommons/listaHeader/ListaMenuHeader.js';
import swall from 'sweetalert';
import { ButtonHeaderPadrao } from './../../../componentsCommons/button/buttonHeader/ButtonHeaderPadrao.js';
import './../header/HeaderMenu.css';

export class HeaderAdmin extends Component{
    removeToken=()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('idConsultor')
        localStorage.removeItem('permissao')
        swall({
            title:'Você não esta mais logado..',
            icon:'warning'           
        })
    }
    
    render(){
        return(
            <div>
                <ContainerHeader>
                <input type="checkbox" id="btMenu"></input>
                <label htmlFor="btMenu" className="btMenu">
                    <div></div>
                    <div></div>
                    <div></div>
                </label>
                
                <LogoHeader/>
                
                <div className="listaHeader">
                    <div className="permissao" >
                        <ListaMenuHeader href="/listar" nome="TODAS MAES"/>
                    </div>
                    <div className="permissao">
                        <ListaMenuHeader href="/cadastrar" nome="CADASTRO MAE"/>
                    </div>
                    <div className="permissao">
                        <ListaMenuHeader href="/cadastrarConsultor" nome="CADASTRO CONSULTOR"/>
                    </div>
                    <div className="permissao">
                        <ListaMenuHeader href="/deletarConsultor" nome="DELETAR CONSULTOR"/>
                    </div>
                </div>
                
                    <ButtonHeaderPadrao to="/" nome="SAIR" onClick={this.removeToken}/>
                </ContainerHeader>
            </div>
        )
    }
}