import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ButtonHeaderPadrao.css';

export class ButtonHeaderPadrao extends Component{
    render(){
        return(
            <div className="buttonHeaderPadrao">
                <Link to={this.props.to} onClick={this.props.onClick}>{this.props.nome}</Link>
            </div>
        )
    }
}