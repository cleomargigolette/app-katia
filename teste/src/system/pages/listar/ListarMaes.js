import React, { Component, Fragment} from 'react';
import { HeaderMenu } from '../../component/header/HeaderMenu.js';
import { HeaderAdmin } from '../../component/headerAdmin/HeaderAdmin.js';
import { NomeEmpresaTop} from './../../../componentsCommons/nomeEmpresaTop/NomeEmpresaTop.js';
import { ButtonFooter } from './../../../componentsCommons/button/buttonFotter/ButtonFooter.js';
import ConsultorService from '../../../service/ConsultorService.js';
import moment from 'moment';
import IconePerfil from './../../icon/iconeOla.png';
import { formatarTelefone } from './../../../commonsUtils/mascaras/MascaraCelular.js';
import { cpfMask } from './../../../commonsUtils/mascaras/MascaraCpf.js';
import { formatarCep } from './../../../commonsUtils/mascaras/MascaraCep.js';
import { resetarCheckMenu } from './../../../commonsUtils/functionsUtils/resetarCheckMenu.js';
import { detalhesMaeFunction } from './DetalhesMae.js';
import { onSubmitMae } from './OnSubmitMae.js';
import { onSubmitEndereco } from './OnSubmitEndereco.js';
import { onSubmitProcesso } from './OnSubmitProcesso.js';
import { onSubmitFilho } from  './OnSubmitFilho.js';
import { onSubmitEmpresa } from './onSubmitEmpresa.js';
import { Redirect, Link } from 'react-router-dom';
import swall from 'sweetalert';
import './ListarMaes.css';
import ServiceMae from '../../../service/MaeService.js';


export class ListarMaes extends Component{
    constructor(){
        super();
        this.state={
            consultor:[],
            idConsultdetalhesMae:false,
            admin:false,
            idConsultor:"",
            listaMaes:[],
            InfoMae:[],
            
            maeId:"",
            maePrimeiroNome:"",
            maeSobreNome:"",
            maeCpf:"",
            maeRg:"",
            maeTelefone:"",
            maeEmail:"",
            maeNomeMae:"",
            maeNomePai:"",
            maeDataNascimento:"",
            maePis:"",
            maeEstadoCivil:"",
            maeEscolaridade:"",
        
            filhoId:"",
            filhoNome:"",
            filhoSobreNome:"",
            filhoDataNascimento:"",
            filhoDataEmissaoCertidaoNascimento:"",
            filhoNumeroMatriculaParte1:"",
            filhoNumeroMatriculaParte2:"",
    
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
            processoExigencia:" ",
            processoObservacao:""
        }
    }
    
    componentDidMount(){

        this.serviceConsultor = new ConsultorService();
        this.serviceMae  = new ServiceMae();

        this.serviceConsultor.buscarUserPrincipal().then((response) =>{
            
            if(!response.data.ativo){
                swall({title:"Sua conta foi desativada",icon:'error'});
                this.contaDesativada()
            }
            this.setState({
                consultor:response.data

            })

            localStorage.setItem('idConsultor',response.data.id)
            localStorage.setItem('permissao',response.data.permissao)
        }).catch('error')

        setTimeout(()=> { this.vereficaAdmin() }, 1000);
        
        
    }

    handleChange= (event)=>{
        const target = event.target;
        this.setState({
            [target.name]:target.value
        })
    }

    voltarInfo = ()=>{
        this.setState({
            detalhesMae: !this.state.detalhesMae
        })
    }

    contaDesativada=()=>{
        return(<Redirect to="/login"/>)
    }

    vereficaAdmin=()=>{
        if(localStorage.getItem('permissao').toString()==="ADMINISTRADOR"){
            this.serviceMae.buscarTodasMaeAtivas().then((response)=>{
                this.setState({
                    listaMaes:response.data,
                    admin:!this.state.admin
                })
            })
            
        }else{
            this.serviceConsultor.buscarMaesPeloIdConsultor().then((response) =>{
                this.setState({
                    listaMaes:response.data,
                })     
            })
        }
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


    listarMaes = () => {
      console.log(this.state.maeId)
        return(this.state.detalhesMae?<div>
            <div className="info" id="perfilInfo">
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
                    <input type="checkbox" id="checkModalMae"></input>
                    <label className="buttonAtualizar" htmlFor="checkModalMae">Atualizar</label>
                    
                    <form className="modal" onSubmit={onSubmitMae.bind(this)}>
                        <div>
                            <label>Nome</label>
                            <input type="text" name="maePrimeiroNome" value={this.state.maePrimeiroNome} onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Sobrenome</label>
                            <input type="text" name="maeSobreNome" value={this.state.maeSobreNome} onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>CPF</label>
                            <input type="number" name="maeCpf" value={this.state.maeCpf} onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>RG</label>
                            <input type="number" name="maeRg" value={this.state.maeRg} onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>PIS</label>
                            <input type="number" name="maePis" value={this.state.maePis} onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Telefone</label>
                            <input type="cell" name="maeTelefone" value={this.state.maeTelefone} onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Estado Civil</label>
                            <select type="text" name="maeEstadoCivil" value={this.state.maeEstadoCivil} onChange={this.handleChange}>
                                <option>CASADA</option>
                                <option>SOLTEIRA</option>
                                <option>SEPARADA</option>
                                <option>VIUVA</option>
                                <option>DIVORCIADA</option>
                            </select>
                        </div>
                        <div>
                            <label>Escolaridade</label>
                            <select type="text" name="maeEscolaridade" value={this.state.maeEscolaridade} onChange={this.handleChange}>
                                <option>ENSINO_FUNDAMENTAL_INCOMPLETO</option>
                                <option>ENSINO_FUNDAMENTAL_COMPLETO</option>
                                <option>ENSINO_MEDIO_INCOMPLETO</option>
                                <option>ENSINO_MEDIO_COMPLETO</option>
                                <option>ENSINO_SUPERIOR_INCOMPLETO</option>
                                <option>ENSINO_SUPERIOR_COMPLETO</option>
                            </select>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" name="maeEmail" value={this.state.maeEmail} onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Nome Da Mãe</label>
                            <input type="text" name="maeNomeMae" value={this.state.maeNomeMae} onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Nome Do Pai</label>
                            <input type="text" name="maeNomePai" value={this.state.maeNomePai} onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Data de Nascimento</label>
                            <input type="date" className="inputDate" name="maeDataNascimento" value={this.state.maeDataNascimento} onChange={this.handleChange}></input>
                        </div>
                        <div className="buttonModal">
                            <button className="reseteButtonModal" type="onSubmit">SALVAR</button>
                            <label className="reseteButtonModal" type="resete" onClick={resetarCheckMenu.bind(this,"checkModalMae")}>SAIR</label>
                            
                        </div>

                    </form>
                </section>

                <section className="sectionMae">    
                    <h1>DADOS DO FILHO</h1>
                    <div className="infoMae">
                        <div>
                            <p><strong>Nome: </strong>{this.state.filhoNome} {this.state.filhoSobreNome}</p>   
                            <div className="matricula">
                            <p><strong>Matricula: </strong>{this.state.filhoNumeroMatriculaParte1}-{this.state.filhoNumeroMatriculaParte2} </p>
                        </div>               
                        </div>
                        <div>
                            <p><strong>Data Nascimento: </strong>{moment(this.state.filhoDataNascimento).format("DD/MM/YYYY")}</p>
                            <p><strong>Data emissão certidão Nascimento: </strong>{moment(this.state.filhoDataEmissaoCertidaoNascimento).format("DD/MM/YYYY")} </p>
                        </div>
                        
                    </div>
                    <input type="checkbox" id="checkModalFilho"></input>
                    <label className="buttonAtualizar" htmlFor="checkModalFilho">Atualizar</label>
                    
                    <form className="modal" onSubmit={onSubmitFilho.bind(this)}>
                        <div>
                            <label>Nome</label>
                            <input type="text" name="filhoNome" value={this.state.filhoNome} onChange={this.handleChange}></input>
                       </div>
                       <div>
                            <label>Sobrenome</label>
                            <input type="text" name="filhoSobreNome" value={this.state.filhoSobreNome} onChange={this.handleChange}></input>
                       </div>
                       <div>
                            <label>Matricula</label>
                            <input type="number" name="filhoNumeroMatriculaParte1" value={this.state.filhoNumeroMatriculaParte1} onChange={this.handleChange}></input>
                            <input type="number" name="filhoNumeroMatriculaParte2" value={this.state.filhoNumeroMatriculaParte2} onChange={this.handleChange}></input>
                       </div>
                       <div>
                            <label>Data emissão certidão Nascimento</label>
                            <input type="date" name="filhoDataNascimento" value={this.state.filhoDataNascimento} onChange={this.handleChange}></input>
                       </div>
                       <div>
                            <label>Data Nascimento</label>
                            <input type="date" name="filhoDataEmissaoCertidaoNascimento" value={this.state.filhoDataEmissaoCertidaoNascimento} onChange={this.handleChange}></input>
                       </div>
                       
                        <div className="buttonModal">
                            <button className="reseteButtonModal" type="onSubmit">SALVAR</button>
                            <label className="reseteButtonModal" type="resete" onClick={resetarCheckMenu.bind(this,"checkModalFilho")}>SAIR</label>
                        </div>
                    </form>
                </section>
                
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
                    <input type="checkbox" id="checkModalEndereco"></input>
                    <label className="buttonAtualizar" htmlFor="checkModalEndereco">Atualizar</label>
                    
                    <form className="modal" onSubmit={onSubmitEndereco.bind(this)}>
                        <div>
                            <label>Rua</label>
                            <input type="text" name="enderecoRua" value={this.state.enderecoRua} onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Bairro</label>
                            <input type="text" name="enderecoBairro" value={this.state.enderecoBairro} onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Cidade</label>
                            <input type="text" name="enderecoCidade" value={this.state.enderecoCidade} onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Estado</label>
                            <input type="text" name="enderecoEstado" value={this.state.enderecoEstado} onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Complemento</label>
                            <input type="text" name="enderecoComplemento" value={this.state.enderecoComplemento} onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Número</label>
                            <input type="text" name="enderecoNumeroCasa" value={this.state.enderecoNumeroCasa} onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Cep</label>
                            <input type="text" name="enderecoCep" value={this.state.enderecoCep} onChange={this.handleChange}></input>
                        </div>
                        <div className="buttonModal">
                            <button className="reseteButtonModal" type="onSubmit">SALVAR</button>
                            <label className="reseteButtonModal" type="resete" onClick={resetarCheckMenu.bind(this,"checkModalEndereco")}>SAIR</label>
                        </div>
                    </form>
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
                            <p><strong>Seguro Desemprego: </strong>{this.retornaValorSeguroDesemprego()}</p>
                            <p><strong>Motivo da Demissão: </strong>{this.state.empresaMotivoSaidaEmpresa}</p>
                        </div>
                    </div>
                    <input type="checkbox" id="checkModalEmpresa"></input>
                    <label className="buttonAtualizar" htmlFor="checkModalEmpresa">Atualizar</label>
                    <form className="modal" onSubmit={onSubmitEmpresa.bind(this)}>
                        <div>
                            <label>Nome</label>
                            <input type="text" name="empresaNome" value={this.state.empresaNome} onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Data de Admissão</label>
                            <input type="date" name="empresaDataAdmissao" value={this.state.empresaDataAdmissao} onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Data de Demissão</label>
                            <input type="date" name="empresaDataDemissao" value={this.state.empresaDataDemissao} onChange={this.handleChange}></input>
                        </div>
                        
                        <div> 
                            <label>Pegou Seguro Desemprego?</label>
                            <div className="seguroDesemprego">
                                <div>
                                    <label>Sim</label>    
                                    <input name="empresaSeguroDesemprego" type='radio' value={'true'} onChange={this.handleChange}/>
                                </div>
                                <div>
                                    <label>Não</label>    
                                    <input name="empresaSeguroDesemprego" type='radio' value={'false'} onChange={this.handleChange}/>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label>Causa da Demissão</label>
                            <select type="text" name="empresaMotivoSaidaEmpresa" value={this.state.empresaMotivoSaidaEmpresa} onChange={this.handleChange}>
                                <option>DEMISSAO_JUSTA_CAUSA</option>
                                <option>DEMISSAO_SEM_JUSTA_CAUSA</option>
                                <option>ABANDONO</option>
                                <option>PEDIDO_DEMISSAO</option>
                            </select>
                        </div>
                        
                        <div className="buttonModal">
                            <button className="reseteButtonModal" type="onSubmit">SALVAR</button>
                            <label className="reseteButtonModal" type="resete" onClick={resetarCheckMenu.bind(this,"checkModalEmpresa")}>SAIR</label>
                        </div>
                    </form>
                </section>
                <section className="sectionMae">
                    <h1>STATUS DO PROCESSO</h1>
                    <div className="infoMae">
                        <div>
                            <p><strong>Status: </strong>{this.state.processoSituacaoProcesso}</p>
                            <p><strong>Exigências: </strong>{this.state.processoExigencia}</p>
                        </div>
                        <div>
                            <p><strong>Observação: </strong>{this.state.processoObservacao}</p>
                            <p><strong>Data de abertura: </strong>{moment(this.state.processoDataAberturaProcesso).format("DD/MM/YYYY")}</p>
                        </div>
                    </div>
                    <input type="checkbox" id="checkModalProcesso"></input>
                    <label className="buttonAtualizar" htmlFor="checkModalProcesso">Atualizar</label>
                    
                    <form className="modal" onSubmit={onSubmitProcesso.bind(this)}>
                        <div>
                            <label>Status</label>
                            <select type="text" name="processoSituacaoProcesso" value={this.state.processoSituacaoProcesso} onChange={this.handleChange}>
                                <option>ANALISE</option>
                                <option>CONCEDIDO</option>
                                <option>INDEFERIDO</option>
                                <option>EXIGENCIA</option>
                            </select>
                        <div disable="true">
                            <label>Exigências</label>
                            <input type="text" name="processoExigencia" value={this.state.processoExigencia} onChange={this.handleChange}></input>
                        </div>
                        <div disable="true">
                            <label>Observação</label>
                            <input type="text" name="processoObservacao" value={this.state.processoObservacao} onChange={this.handleChange}></input>
                        </div>
                        </div>
                        <div className="buttonModal">
                            <button className="reseteButtonModal" type="onSubmit">SALVAR</button>
                            <label className="reseteButtonModal" type="resete" onClick={resetarCheckMenu.bind(this,"checkModalProcesso")}>SAIR</label>
                        </div>
                    </form>
                </section>
                <ButtonFooter to="/listar" onClick={this.voltarInfo} nome="VOLTAR"/>
        
            </div>
        </div>:(this.state.listaMaes.map((mae, key) => {
            return(
                <div key={mae.id}>
                    <ul className='listar'>
                        <li className="nomeMae"><strong>Nome: </strong>{mae.primeiroNome.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase();})} {mae.sobreNome.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); })}</li>
                        <li><strong>Situação Processo: </strong>{mae.processo.situacaoProcesso}</li>
                        <li><strong>Consultor: </strong>{mae.consultor.primeiroNome} {mae.consultor.sobreNome}</li>
                        <div className="saibaMais">
                            <label onClick={detalhesMaeFunction.bind(this,mae.id)}>MAIS DETALHES</label>
                        </div>
                    </ul>
                    
                </div>
            )
        })))
    }
    
    moment = require('moment');

    header=()=>{
        return(this.state.admin?<HeaderAdmin/>:<HeaderMenu/>)
    }

    render(){  
        return (
        <Fragment>
            <div className="containerPrincipal">
                {this.header()}
                <NomeEmpresaTop/>
                <Link className="linkPerfil" to="/perfil"><div className="welcome"><img src={IconePerfil} alt="icone Perfil"/><h1>Olá {this.state.consultor.primeiroNome}</h1></div></Link>
                <div className="maes">{this.listarMaes()}</div>            
            </div>
        </Fragment>
        )
    }
}