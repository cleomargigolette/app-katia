import React, {Component } from 'react'
import ImagSectionQuemSomos from './../../img/imgSectionQuemSomos.jpg';
import IconMissao from './../../icon/missao4.svg';
import IconVisao from './../../icon/visao3.png';
import IconValores from './../../icon/valores3.svg';
import IconQuemSomos from './../../icon/quemSomos.svg';
import './QuemSomos.css';

export class QuemSomos extends Component{
    render(){
        return(
            <div>
                <section className="sectionQuemSomos" id="quemSomos">
                    <div className="divisaoSection"></div>
                    <div className="titleQuemSomos">
                        <div className="textQuemSomos">
                            <h1>
                                Quem Somos
                            </h1>
                            <img src={IconQuemSomos} alt="icone quem somos"/>
                        </div>
                        <img className="imgQuemSomos" src={ImagSectionQuemSomos} alt="imagem de um bebê em preto e branco"/>
                    </div>
                    <div className="composicaoQuemSomos">
                        <div>
                            <h1>HISTÓRIA</h1>
                            <p>Fundada em 2013, há mais de 6 anos atuando a favor das mamães
                                que buscam o que é seu de direito. Nesses anos de caminhada nos desenvolvemos
                                e nos especializamos em salário maternidade. 
                            </p>
                        </div>
                            <h1>DIFERENCIAIS</h1>
                            <p>Hoje atuamos em todo o território nacional, ajudando até aquelas mamães
                                que estão em lugares mais afastado de grandes centros.
                            </p>
                        <div className="missaoVisaoValores">
                            <div >
                                <h1>MISSÃO</h1>
                                <img className="missao" src={IconMissao} alt="ícone missão." />
                                <p>Garantir que todas as mamães que
                                    tenham direito ao salário maternidade,
                                    possam recebê-lo
                                    de forma fácil e rápido.
                                </p>
                            </div>
                            <div >
                                <h1>VISÃO</h1>
                                <img className="visao" src={IconVisao} alt="ícone visao."/>
                                <p>Ganhar destaque no Brasil,
                                por ser uma a empresa
                                especializada
                                em ajudar mamães com o salário maternidade.
                                </p>
                            </div>
                            <div >
                                <h1>VALORES</h1>
                                <img className="valores" src={IconValores} alt="ícone valores" />
                                <p>Ética<br></br>Transparência<br></br>Humanização</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}