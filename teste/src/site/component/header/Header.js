import React, { Component } from 'react';
import { ContainerHeader } from './../../../componentsCommons/header/ContainerHeader.js';
import { LogoHeader } from './../../../componentsCommons/logo/LogoHeader.js';
import { ListaMenuHeader } from './../../../componentsCommons/listaHeader/ListaMenuHeaderSite';
import { ButtonHeaderPadrao } from './../../../componentsCommons/button/buttonHeader/ButtonHeaderPadrao.js';
import './Header.css';

export class Header extends Component{
    
    resetarCheckMenu() {
        var elemento = window.document.getElementById("btMenu");
        elemento.checked=false
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
                    <ListaMenuHeader href="#home" onClick={this.resetarCheckMenu} nome="HOME"/>
                    <ListaMenuHeader href="#quemSomos" onClick={this.resetarCheckMenu} nome="QUEM SOMOS"/>
                    <ListaMenuHeader href="#servico" onClick={this.resetarCheckMenu} nome="SERVIÇOS"/>
                    <ListaMenuHeader href="#contato" onClick={this.resetarCheckMenu} nome="CONTATO" />
                </div>
                
                <ButtonHeaderPadrao to="/login" nome="LOGIN"/>
            </ContainerHeader>
        </div>)
    }
}
