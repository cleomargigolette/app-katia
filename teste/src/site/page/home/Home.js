import React, { Component } from 'react';
import { NomeEmpresaTop } from './../../../componentsCommons/nomeEmpresaTop/NomeEmpresaTop.js';
import './Home.css';
import ImgHome from './../../img/imgBannerHome.jpg';
import ImgSectionHome from './../../img/imgHome.jpg';

export class Home extends Component{
    render(){
        return(
            <div id="home"> 
                <div>
                    <NomeEmpresaTop/>
                    <img className="imgHome" src={ImgHome} alt="imagem de uma mãe e sua filha pequena." />
                </div> 
                <section className="sectionHome" >
                    <div>
                        <h1>Salário Maternidade:</h1>
                        <p>O que é, <br/> como funciona <br/>  e quem tem direito?</p>   
                        <a href="https://api.whatsapp.com/send?&amp;phone=553193320702&amp;text=Olá!%20Vim%20do%20seu%20Site%20e%20gostaria%20de%20saber%20se%20tenho%20direito,pode%20verificar%20para%20mim?" target="_blank">
                            <button>SAIBA MAIS</button>
                        </a>                 
                    </div>
                    <img className="imgSectionHome" src={ImgSectionHome} alt="sombra de uma mãe e seu filho nos braços."/>                   
                </section>
            </div>
        )
    }
}