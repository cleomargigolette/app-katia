import React, { Component } from 'react';
import { Header } from '../../component/header/Header.js';
import { Home } from './../home/Home.js';
import { QuemSomos} from './../quemSomos/QuemSomos.js';
import { Servico } from './../servico/Servico.js';
import { Contato } from './../contato/Contato.js';
import { Footer } from '../../component/footer/Footer.js';
import { ButtonWhatsFixo } from './../../component/button/buttonWhatsFixo/ButtonWhatsFixo.js';
import './Site.css';

export class Site extends Component{

    animacao = window.addEventListener('scroll', function(){
        
        const target = window.document.querySelectorAll('[data-anime]');
        
        const windowTop= window.pageYOffset + ((window.innerHeight * 3) /3.5);

        target.forEach(function(elemento){
            if((windowTop) > elemento.offsetTop){
                elemento.classList.add("animate")
            }else{
                elemento.classList.remove("animate")
            }
        })
        
    })

    render(){ 
        return(
        <div className="site">
            <ButtonWhatsFixo/>
            <Header/>
            <Home/>
            <QuemSomos/>
            <Servico/>
            <Contato/>
            <Footer/>
        </div>)
    }
}