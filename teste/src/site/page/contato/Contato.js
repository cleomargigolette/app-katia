import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import IconEmail from './../../icon/email.svg';
import IconTelefone from './../../icon/telefone.svg';
import IconCelular from './../../icon/whatsFooter.svg';
import LogoFooter from './../../img/logoFooter.jpeg';
import IconFace from './../../icon/face.svg';
import IconInsta from './../../icon/insta.svg';
import IconWhats from './../../icon/whats.svg';
import './Contato.css';

export class Contato extends Component{
    render(){
        return(
            <div>
                <section className="sectionContato" id="contato">
                    <div className="divisaoSection"></div>
                    <div>
                        <h1>CONHEÇA NOSSAS REDES SOCIAS OU TIRE SUAS DÚVIDAS PELO WHATS</h1>
                        <p>Click nos ícones abaixo para acessar</p>
                    </div>
                    <hr></hr>
                    <div className="redesSociais">
                        <div className="face" >
                        <a href="https://www.facebook.com/assesoriarmraccoltoemoraes/" target="_blank">
                            <img  src={IconFace} alt="iconFace"/></a>
                        </div>
                        <div className="whats">
                        <a href="https://api.whatsapp.com/send?l=pt&amp;phone=5531992027747&amp;text=Olá!%20Vim%20do%20seu%20Site%20e%20gostaria%20de%20saber%20se%20tenho%20direito,pode%20verificar%20para%20mim?" target="_blank">
                            <img  src={IconWhats} alt="iconWhats"/></a>
                        </div>
                        <div className="insta">
                        <a href="https://www.instagram.com/raccoltoemoraes?r=nametag" target="_blank">
                            <img  src={IconInsta} alt="iconInsta "/></a>
                        </div>
                    </div>
                    <div className="contatoFooter">
                        <div className="contato">
                            <div>
                                <img src={IconTelefone} alt="icone telefoen"/>
                                <p>(31)32014476</p> 
                            </div>
                            <div>
                                <img src={IconCelular} alt="icone celular"/>
                                <p>(31)992027747</p>
                                
                            </div>
                            <div>
                                <img src={IconEmail} alt="icone email"/> 
                                <p>raccoltoemoraes@hotmail.com</p>
                            </div>   
                        </div>                       
                        <div className="logoContato">
                            <Link to="/loginSystem"><img src={LogoFooter} alt="logo da empresa"/></Link>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
