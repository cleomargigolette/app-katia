import React, {Component } from 'react';
import Imgservico from './../../img/imgServico.jpg';
import VideoMp4 from './../../video/videoRaccoltoeMoraes.mp4';
import VideoOgg from './../../video/videoRaccoltoeMoraes.ogg';
import VideoWebm from './../../video/videoRaccoltoeMoraes.webm';
import './Servico.css';

export class Servico extends Component{
    
    render(){
        return(
            <div className="servico" id="servico">
                <div className="divisaoSection"></div>
                <div className="bannerServico">
                    <img src={Imgservico} alt=''/>
                    <div>
                        <h1>
                            Salário Maternidade
                        </h1>
                        <p>
                            Foi mandanda embora estando gestante?
                        </p>
                        <p>
                            Estava desempregada quando ganhou o filho?
                        </p>
                        <p>
                            Trabalhou com a carteira assinada antes de ter o bebê?
                        </p>
                        <p>
                            Perdeu o bebê depois do 6º mês de gestação?
                        </p>    
                        <p>
                            Pediu demissão grávida?
                        </p>
                        <p>
                            Abandonou o trabalho?
                        </p>
                        <p>
                            Era menor aprendiz?
                        </p>
                        <h2>
                            Sua criança ainda não tem 5 anos e
                        </h2>
                        <h2>
                            você ainda não recebeu nenhum beneficio?
                        </h2>
                    </div>
                </div>
                <div className="titleServico">
                    <h1>
                        COM A RACCOLTO E MORAES VOCÊ PODE GARANTIR O SALÁRIO MATERNIDADE
                    </h1>
                </div>
                <div className="apresentacaoServico">
                    <video className="video" controls="controls">
                        <source src={VideoMp4} type="video/mp4"></source>
                        <source src={VideoOgg} type="video/ogv"></source>
                        <source src={VideoWebm} type="video/webm"></source> 
                        Seu navegador não suporta html5
                    </video>
                </div>
            </div>
        )
    }
}
