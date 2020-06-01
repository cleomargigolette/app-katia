import React, { Component } from 'react';
import IconFace from './../../icon/face.svg';
import IconInsta from './../../icon/insta.svg';
import IconWhats from './../../icon/whats.svg';
import { Link } from 'react-router-dom';
import { NomeEmpresaTop } from './../../../componentsCommons/nomeEmpresaTop/NomeEmpresaTop.js';
import { LogoHeader } from './../../../componentsCommons/logo/LogoHeader.js';
import { ListaMenuHeader } from './../../../componentsCommons/listaHeader/ListaMenuHeader.js';
import { ButtonFooter } from './../../../componentsCommons/button/buttonFotter/ButtonFooter.js';
import ServiceMae from './../../../service/MaeService.js';
import { formatarTelefone } from './../../../commonsUtils/mascaras/MascaraCelular.js';
import { formatarCep } from './../../../commonsUtils/mascaras/MascaraCep.js';
import { cpfMask } from './../../../commonsUtils/mascaras/MascaraCpf.js';
import ReactLoading from 'react-loading';
import moment from 'moment';
import './Consulta.css';

export class ConsultaMae extends Component{

    constructor(){
        super();
        this.state = {
                loading:true,
                cpf:"",
                maePrimeiroNome:"",
                maeSobreNome:"",
                maeCpf:"",
                maeRg:"",
                maeTelefone:"",
                maeEmail:"",
                maeNomeMae:"",
                maeNomePai:"",
                maeDataNascimento:"",
                maeEstadoCivil:"",
                maeEscolaridade:"",
                maePis:"",
            
                filho:[],
                
                enderecoId:"",
                enderecoRua:"",
                enderecoBairro:"",
                enderecoCidade:"",
                enderecoEstado:"",
                enderecoNumeroCasa:"",
                enderecoComplemento:"",
                enderecoCep:"",

                empresaId:"",
                empresaNome:"",
                empresaDataAdmissao:"",
                empresaDataDemissao:"",
                empresaMotivoSaidaEmpresa:"",
                empresaSeguroDesemprego:"",
            
                processoId:"",
                processoDataAberturaProcesso:"",
                processoSituacaoProcesso:"",
                processoExigencia:"",
                processoObservacao:""
        }
    }

    componentDidMount(){
        this.serviceMae = new ServiceMae();
        this.serviceMae.buscarMaePeloId(localStorage.getItem('id')).then((response) => {
            this.setState({
                
                mae:response.data,
                filho:response.data.filho,
                maeId:response.data.id,
                maePrimeiroNome:response.data.primeiroNome,
                maeSobreNome:response.data.sobreNome,
                maeCpf:response.data.cpf,
                maeRg:response.data.rg,
                maeTelefone:response.data.telefone,
                maeEmail:response.data.email,
                maeNomeMae:response.data.nomeMae,
                maeNomePai:response.data.nomePai,
                maeDataNascimento:response.data.dataNascimento,
                maeEstadoCivil:response.data.estadoCivil,
                maeEscolaridade:response.data.escolaridade,
                maePis:response.data.pis,

                enderecoId:response.data.endereco.id,
                enderecoRua:response.data.endereco.rua,
                enderecoBairro:response.data.endereco.bairro,
                enderecoCidade:response.data.endereco.cidade,
                enderecoEstado:response.data.endereco.estado,
                enderecoNumeroCasa:response.data.endereco.numeroCasa,
                enderecoComplemento:response.data.endereco.complemento,
                enderecoCep:response.data.endereco.cep,

                empresaId:response.data.empresa.id,
                empresaNome:response.data.empresa.nome,
                empresaDataAdmissao:response.data.empresa.dataAdmissao,
                empresaDataDemissao:response.data.empresa.dataDemissao,
                empresaMotivoSaidaEmpresa:response.data.empresa.motivoSaidaEmpresa,
                empresaSeguroDesemprego:response.data.empresa.seguroDesemprego,

                processoId:response.data.processo.id,
                processoDataAberturaProcesso:response.data.processo.dataAberturaProcesso,
                processoSituacaoProcesso:response.data.processo.situacaoProcesso,
                processoExigencia:response.data.processo.exigencia,
                processoObservacao:response.data.processo.observacao,
                
                loading:false
            
            } )
        }) 
        
    }

    retornaValorSeguroDesemprego=()=>{
        const verdadeiro = "Sim";
        const falso = "Não"

        if(this.state.empresaSeguroDesemprego){
            return verdadeiro;
        }else {
            return falso;
        }
    }

    mostrarFilhos(){
        return(this.state.filho.map((crianca, key) => {
            return(
                <section key={crianca.id} className="sectionMae">    
                    <h1>DADOS DO FILHO</h1>
                    <div className="infoMae">
                        <div>
                            <p><strong>Nome: </strong>{crianca.nome} {crianca.sobrenome}</p>
                        </div>
                        <div>
                            <p><strong>Data Nascimento: </strong>{moment(crianca.dataNascimento).format("DD/MM/YYYY")}</p>
                        </div>
                    </div>
                </section>
            )}
        ))
    }

    moment = require('moment');

    removerId=()=>{
        localStorage.removeItem('id')
    }
    
    render(){
        return(
            this.state.loading?<ReactLoading type={'spinningBubbles'} color={'#c06014'} height={'22%'} width={'22%'} id="loading"/>:
            <div className="consulta">
                <div className="containerHeaderLogin"> 
                
                <LogoHeader/>
                
                <div className="redesSociaisLogin">
                      
                    <div>
                        <ListaMenuHeader href="https://www.facebook.com/assesoriarmraccoltoemoraes/" target="_blank" nome={<img  src={IconFace} alt="iconFace"/>}/>    
                    </div>
                    <div>
                        <ListaMenuHeader href="https://api.whatsapp.com/send?l=pt&amp;phone=5531992027747" target="_blank" nome={<img  src={IconWhats} alt="iconWhats"/>}/>
                    </div>
                    <div>
                        <ListaMenuHeader href="https://www.instagram.com/raccoltoemoraes?r=nametag" target="_blank" nome={<img  src={IconInsta} alt="iconInsta "/>}/>   
                    </div>
                    
                </div>

                    <Link to="/" className="buttonHeaderMenu" onClick={this.removerId}>SAIR</Link>
            
                </div>

                <NomeEmpresaTop/>
                
                <div className="info">
                    <section className="sectionMae">
                        <h1>DADOS DA MÃE</h1>
                        <div className="infoMae">
                            <div>
                                <p><strong>Nome: </strong>{this.state.maePrimeiroNome} {this.state.maeSobreNome}</p>
                                <p><strong>CPF: </strong>{cpfMask(this.state.maeCpf)}</p>
                                <p><strong>Rg: </strong>{this.state.maeRg}</p>
                                <p><strong>Número do Pis: </strong>{this.state.maePis}</p>
                                <p><strong>Telefone: </strong>{formatarTelefone(this.state.maeTelefone)}</p>
                                <p><strong>Estado Civil: </strong>{this.state.maeEstadoCivil}</p>
                                
                            </div>
                            <div>
                                <p><strong>Escolaridade: </strong>{this.state.maeEscolaridade}</p>
                                <p><strong>E-mail: </strong>{this.state.maeEmail}</p>
                                <p><strong>Nome da Mae: </strong>{this.state.maeNomeMae}</p>
                                <p><strong>Nome do Pai: </strong>{this.state.maeNomePai}</p>
                                <p><strong>Data Nascimento: </strong>{moment(this.state.maeDataNascimento).format("DD/MM/YYYY")}</p>
                            </div>
                        </div>
                    </section>

                    {this.mostrarFilhos()}
                    
                    <section className="sectionMae">
                        <h1>DADOS DO ENDEREÇO</h1>
                        <div className="infoMae">
                            <div>
                                <p><strong>Rua: </strong>{this.state.enderecoRua}</p>
                                <p><strong>Bairro: </strong>{this.state.enderecoBairro}</p>
                                <p><strong>Cidade: </strong>{this.state.enderecoCidade}</p>
                                <p><strong>Estado: </strong>{this.state.enderecoEstado}</p>
                            </div>
                            <div>
                                <p><strong>Complemento: </strong>{this.state.enderecoComplemento}</p>
                                <p><strong>Número: </strong>{this.state.enderecoNumeroCasa}</p>
                                <p><strong>Cep: </strong>{formatarCep(this.state.enderecoCep)}</p>
                            </div>
                        </div>
                    </section>
                    <section className="sectionMae">
                        <h1>DADOS DA ÚLTIMA EMPRESA</h1>
                        <div className="infoMae">
                            <div>
                                <p><strong>Nome: </strong>{this.state.empresaNome}</p>
                                <p><strong>Data de Admissão: </strong>{moment(this.state.empresaDataAdmissao).format("DD/MM/YYYY")}</p>
                                <p><strong>Data de Demissão: </strong>{moment(this.state.empresaDataDemissao).format("DD/MM/YYYY")}</p>
                            </div>
                            <div>
                                <p><strong>Foi pego Seguro Desemprego?: </strong>{this.retornaValorSeguroDesemprego()}</p>
                                <p><strong>Motivo da Demissão: </strong>{this.state.empresaMotivoSaidaEmpresa}</p>
                            </div>
                        </div>
                    </section>
                    <section className="sectionMae">
                        <h1>STATUS DO PROCESSO</h1>
                        <div className="infoMae">
                            <div>
                                <p><strong>Status: </strong>{this.state.processoSituacaoProcesso}</p>
                                <p><strong>Exigência: </strong>{this.state.processoExigencia}</p>
                            </div>
                            <div>
                                 <p><strong>Observação: </strong>{this.state.processoObservacao}</p>
                                <p><strong>Data de abertura: </strong>{moment(this.state.processoDataAberturaProcesso).format("DD/MM/YYYY")}</p>
                            </div>
                        </div>
                    </section>
                    <ButtonFooter to="/" nome="SAIR" onClick={this.removerId}/>
                </div>
            </div>
        )
    }
}