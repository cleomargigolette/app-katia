import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ButtonFooter.css';

export class ButtonFooter extends Component{
    render(){
        return(
            <div>
                <Link to={this.props.to} className="buttonFooterMenu" onClick={this.props.onClick}>{this.props.nome}</Link>
            </div>
        )
    }
}