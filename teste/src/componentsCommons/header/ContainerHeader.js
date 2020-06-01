import React, { Component } from 'react';
import './ContainerHeader.css';

export class ContainerHeader extends Component{
    render(){
        return(
            <div className="ContainerHeader">
                {this.props.children}
            </div>
        )
    }
}