import React, { Component } from 'react';
import Logo from './../../site/img/logoHeader.jpeg';
import './LogoHeader.css';

export class LogoHeader extends Component{
    render(){
        return(
            <div className="logoHeader">
                <a href="/"><img src={Logo} alt="imagem de icon"/></a>
            </div>
        )
    }
}