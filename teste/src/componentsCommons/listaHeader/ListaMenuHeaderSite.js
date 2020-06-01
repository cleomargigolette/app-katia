import React, { Component } from 'react';
import './ListaMenuHeader.css';

export class ListaMenuHeader extends Component{
    render(){
        return(
            <div className="listaMenuHeader">
                <a href={this.props.href} onClick={this.props.onClick} target={this.props.target}>{this.props.nome}</a> 
            </div>
        )
    }
}