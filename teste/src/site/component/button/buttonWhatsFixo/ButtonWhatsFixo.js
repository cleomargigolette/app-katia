import React, { Component } from 'react';
import './ButtonWhatsFixo.css';
import IconWhats from './../../../icon/whats.svg';

export class ButtonWhatsFixo extends Component{
    render(){
        return(
            <div>
                <a href="https://api.whatsapp.com/send?&amp;phone=5531992027747&amp;text=Olá!%20Vim%20do%20seu%20Site%20e%20gostaria%20de%20saber%20se%20tenho%20direito,pode%20verificar%20para%20mim?" target="_blank">
                    <img className="bntWhatsFixo" src={IconWhats} alt="icone whats"/>
                </a>
            </div>
        )
    }
}