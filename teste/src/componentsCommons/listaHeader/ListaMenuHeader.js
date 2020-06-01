import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ListaMenuHeader.css';

export class ListaMenuHeader extends Component{
    render(){
        return(
            <div className="listaMenuHeader">
                <Link to={this.props.href} onClick={this.props.onClick} target={this.props.target}>{this.props.nome}</Link> 
            </div>
        )
    }
}