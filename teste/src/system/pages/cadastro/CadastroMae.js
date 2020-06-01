import React, { Component, Fragment } from 'react';
import { HeaderMenu } from '../../component/header/HeaderMenu.js';
import { HeaderAdmin } from './../../component/headerAdmin/HeaderAdmin.js';
import { NomeEmpresaTop } from "./../../../componentsCommons/nomeEmpresaTop/NomeEmpresaTop.js";
import MaeService from './../../../service/MaeService.js';
import swall from 'sweetalert'; 
import './CadastroMae.css';

export class CadastroMae extends Component{

    constructor(){
        super();
        this.state={
            carregarFormMae:true,
            carregarFormEndereco:false,
            carregarFormFilho:false,
            carregarFormEmpresa:false,

            idConsultor:localStorage.getItem('idConsultor'),
            idMae:'',

            primeiroNome:'',
            sobreNome:'',
            dataNascimento:'',
            email:'',
            telefone:'',
            rg:'',
            cpf:'',
            nomeMae:'',
            nomePai:'',
            escolaridade:'',
            estadoCivil:'',
            pis:'',

            rua:'',
            numeroCasa:'',
            complemento:'',
            bairro:'',
            cidade:'',
            estado:'',
            cep:'' ,

            empresaNome:"",
            empresaDataAdmissao:"",
            empresaDataDemissao:"",
            empresaMotivoSaidaEmpresa:"",
            empresaSeguroDesemprego:"",
            
            nome:'',
            sobrenome:'',
            dataNascimentoFilho:'',
            dataEmissaoCertidaoNascimento:'',
            matriculaCertidaoNascimento:'',
            matriculoaCdertidaoNascimentoContinuacao:'',
            isLogged:false,
            admin:false
        }
    }

    componentDidMount(){
        
        this.maeService = new MaeService();

        this.vereficaAdmin();
    }

    handleChange =(event) =>{
        const target = event.target;
        this.setState({
            [target.name]: target.value
        })
    }

    vereficaAdmin=()=>{
        if(localStorage.getItem('permissao').toString()==="ADMINISTRADOR"){
            this.setState({
                admin:true
            })
        }
    }

    onSubmitMae = (event) => {
        event.preventDefault();
               
                this.maeService.salvarMae(this.state.primeiroNome.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),
                this.state.sobreNome.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),
                this.state.email,this.state.cpf,this.state.rg,this.state.telefone,
                this.state.nomeMae.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),
                this.state.nomePai.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),
                this.state.dataNascimento,this.state.idConsultor,this.state.escolaridade,this.state.estadoCivil,
                this.state.pis).then((response) => {
            
                    this.setState({ primeiroNome:'', sobreNome:'', dataNascimento:'', email:'', telefone:'',
                    rg:'', cpf:'', nomePai:'', nomeMae:'', idMae:response.data.id, carregarFormEndereco:true,
                    carregarFormMae:false, carregarFormFilho:false,carregarFormEmpresa:false})

                    swall({title:'Mãe cadastrada.',icon:'success'})
                    
                    this.renderCadastro()
            
                }).catch(err =>{
                    swall({
                        title:'Verifique os campos e tente novamente.',
                        icon:'error'           
                    })
                }) 
        
        this.renderCadastro() 
    }

    onSubmitEndereco = (event) => {
        event.preventDefault();

        this.maeService.salvarEnderecoMae(this.state.rua.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),
        this.state.bairro.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),
        this.state.cidade.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),
        this.state.estado, this.state.numeroCasa,
        this.state.complemento.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),
        this.state.cep, this.state.idMae).then(() =>{
        
            this.setState({
                rua:'', bairro:'', cidade:'', estado:'', numeroCasa:'', complemento:'', cep:'',
                carregarFormFilho:true, carregarFormEndereco:false, carregarFormMae:false,carregarFormEmpresa:false
            })

            swall({title:'Endereço cadastrado.',icon:'success'})

            this.renderCadastro()

        }).catch(err =>{
            swall({
                title:'Verifique os campos e tente novamente.',
                icon:'error'           
            })
        })
        this.renderCadastro()  
    }

    onSubmitFilho = (event) => {
        event.preventDefault();

        this.maeService.salvarFilhoMae(this.state.nome.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),
        this.state.sobrenome.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),
        this.state.dataNascimentoFilho,this.state.idMae,this.state.dataEmissaoCertidaoNascimento,
            this.state.matriculaCertidaoNascimento, this.state.matriculoaCdertidaoNascimentoContinuacao).then(()=>{

            this.setState({
                carregarFormEmpresa:true,carregarFormFilho:false, carregarFormEndereco:false, carregarFormMae:false
            })
            swall({
                title:'Filho cadastrado',
                icon:'success'           
            })

            this.renderCadastro()

        }).catch(err =>{
            swall({
                title:'Verifique os campos e tente novamente.',
                icon:'error'           
            })
        })
        this.renderCadastro()
    
    }

    onSubmitEmpresa =(event)=>{
        event.preventDefault();

        this.maeService.salvarEmpresaMae(this.state.empresaNome.toLocaleLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),
        this.state.empresaDataAdmissao,this.state.empresaDataDemissao,this.state.empresaSeguroDesemprego,
        this.state.idMae,this.state.empresaMotivoSaidaEmpresa).then(()=>{
    
            this.setState({
                empresaNome:"",
                empresaDataAdmissao:"",
                empresaDataDemissao:"",
                empresaMotivoSaidaEmpresa:"",
                empresaSeguroDesemprego:"",
                carregarFormFilho:false, carregarFormEndereco:false, carregarFormMae:true,carregarFormEmpresa:false, idMae:''

            });
    
            swall({
                title:'Empresa cadastrada.',
                icon:'success'           
            })
    
        }).catch(err =>{
            swall({
                title:'Não possível cadastrar dados da empresa.',
                icon:'error'           
            })
            
        });
        this.renderCadastro() 
    }

    renderCadastroMae = () => {
        return(
        <form className="formCadastro" id="form" onSubmit={this.onSubmitMae}> 
            <h1>Dados Pessoais</h1>
                <div className="cadastro">
                    
                    <div>
                        <label>NOME</label>
                        <input autoComplete="off" size="15" className="inputCadastroNome" type="text" name="primeiroNome" value={this.state.primeiroNome} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>SOBRE NOME</label>
                        <input autoComplete="off" maxlenght="30" className="inputCadastroNome" type="text" name="sobreNome" value={this.state.sobreNome} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>DATA DE NASCIMENTO</label>
                        <input autoComplete="off" className="inputCadastroData" type="date" name="dataNascimento" value={this.state.dataNascimento} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>E-MAIL</label>
                        <input autoComplete="off" maxlenght="50" className="inputCadastroEmail" type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div>
                    
                        <label>TELEFONE</label>
                        <input autoComplete="off" maxlenght="11" type="tel" name="telefone" value={this.state.telefone} onChange={this.handleChange}/>
                    </div>
                    <div>  
                        <label>RG</label>
                        <input autoComplete="off" maxlenght="12" type="number" name="rg" value={this.state.rg} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>PIS</label>
                        <input type="number" name="pis" value={this.state.pis} onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>CPF</label>
                        <input autoComplete="off" maxlenght="11" type="number" name="cpf" value={this.state.cpf} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Estado Civil</label>
                        <select type="text" name="estadoCivil" value={this.state.estadoCivil} onChange={this.handleChange}>
                            <option>CASADA</option>
                            <option>SOLTEIRA</option>
                            <option>SEPARADA</option>
                            <option>VIUVA</option>
                            <option>DIVORCIADA</option>
                        </select>
                    </div>
                    <div>
                        <label>Escolaridade</label>
                        <select type="text" name="escolaridade" value={this.state.escolaridade} onChange={this.handleChange}>
                            <option>ENSINO_FUNDAMENTAL_INCOMPLETO</option>
                            <option>ENSINO_FUNDAMENTAL_COMPLETO</option>
                            <option>ENSINO_MEDIO_INCOMPLETO</option>
                            <option>ENSINO_MEDIO_COMPLETO</option>
                            <option>ENSINO_SUPERIOR_INCOMPLETO</option>
                            <option>ENSINO_SUPERIOR_COMPLETO</option>
                        </select>
                    </div>
                    <div>
                        <label>NOME MÃE DA BENEFICIADA</label>
                        <input autoComplete="off" maxlenght="50" type="text" name="nomeMae" value={this.state.nomeMae} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>NOME PAI DA BENEFICIADA</label>
                        <input autoComplete="off" maxlenght="50" type="text" name="nomePai" value={this.state.nomePai} onChange={this.handleChange}/>
                    </div>     
                    <button className="buttonForm" onClick={this.validaInput} type="onSubmit">PRÓXIMO</button>       
                </div>
                
            </form>)
    }

    renderCadastroEndereco = () => {
        return(
        <form className="formCadastro" id="form" onSubmit={this.onSubmitEndereco}> 
            <h1>Endereço</h1>
                <div className="cadastro">
                    <div>
                        <label>RUA</label>
                        <input autoComplete="off" maxlenght="30" type="text" name="rua" value={this.state.rua} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>NÚMERO</label>
                        <input autoComplete="off" maxlenght="4" type="number" name="numeroCasa" value={this.state.numeroCasa} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>COMPLENTO</label>
                        <input autoComplete="off" maxlenght="30" type="text" name="complemento" value={this.state.complemento} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>BAIRRO</label>
                        <input autoComplete="off" maxlenght="30" type="text" name="bairro" value={this.state.bairro} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>CIDADE</label>
                        <input autoComplete="off" type="text" name="cidade" value={this.state.cidade} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>UF</label>
                            <select name="estado" value={this.state.estado} onChange={this.handleChange}>
                                <option value="AC">AC</option> 
                                <option value="AL">AL</option>
                                <option value="AP">AP</option>
                                <option value="AM">AM</option>
                                <option value="BA">BA</option>
                                <option value="CE">CE</option>
                                <option value="DF">DF</option>
                                <option value="ES">ES</option>
                                <option value="GO">GO</option>
                                <option value="MA">MA</option>
                                <option value="MT">MT</option>
                                <option value="MS">MS</option>
                                <option value="MG">MG</option>
                                <option value="PA">PA</option>
                                <option value="PB">PB</option>
                                <option value="PR">PR</option>
                                <option value="PE">PE</option>
                                <option value="PI">PI</option>
                                <option value="RJ">RJ</option>
                                <option value="RN">RN</option>
                                <option value="RS">RS</option>
                                <option value="RO">RO</option>
                                <option value="RR">RR</option>
                                <option value="SC">SC</option>
                                <option value="SP">SP</option>
                                <option value="SE">SE</option>
                                <option value="TO">TO</option>
                            </select>
                    </div>
                    <div>         
                        <label>CEP</label>
                        <input autoComplete="off" maxlenght="11" type="number" name="cep" value={this.state.cep} onChange={this.handleChange}/>
                    </div>
                    <button className="buttonForm" type="onSubmit">PRÓXIMO</button>       
                </div>
            </form>)
    }

    
    renderCadastroFilho = () => {
        return(
        <form className="formCadastro" id="form" onSubmit={this.onSubmitFilho}> 
            <h1>Dados do filho</h1>
                <div className="cadastro">
                    <div>
                        <label>NOME</label>
                        <input autoComplete="off" maxlenght="30" type="text" name="nome" value={this.state.nome} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>SOBRE NOME</label>
                        <input autoComplete="off" maxlenght="30" type="text" name="sobrenome" value={this.state.sobrenome} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>DATA DE NASCIMENTO</label>
                        <input autoComplete="off" type="date" name="dataNascimentoFilho" value={this.state.dataNascimentoFilho} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>DATA EMISSÃO CERTIDÃO DE NASC.</label>
                        <input autoComplete="off" type="date" name="dataEmissaoCertidaoNascimento" value={this.state.dataEmissaoCertidaoNascimento} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Nº CERTIDÃO NASC.</label>
                        <input autoComplete="off" size="2" type="number" name="matriculaCertidaoNascimento" value={this.state.matriculaCertidaoNascimento} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Nº CERTIDÃO NASC.</label>
                        <input autoComplete="off" maxlenght="16" type="number" name="matriculoaCdertidaoNascimentoContinuacao" value={this.state.matriculoaCdertidaoNascimentoContinuacao} onChange={this.handleChange}/>
                    </div>
                    <button className="buttonForm" type="onSubmit">PRÓXIMO</button>       
                </div>
            </form>)
    }

    renderCadastroEmpresa = () => {
        return(
        <form className="formCadastro" id="form" onSubmit={this.onSubmitEmpresa}> 
            <h1>Dados da última empresa</h1>
                <div className="cadastro">
                    <div>
                        <label>NOME</label>
                        <input autoComplete="off" maxlenght="30" type="text" name="empresaNome" value={this.state.empresaNome} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>DATA DE ADMISSÃO</label>
                        <input autoComplete="off" type="date" name="empresaDataAdmissao" value={this.state.empresaDataAdmissao} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>DATA DE DEMISSÃO</label>
                        <input autoComplete="off" type="date" name="empresaDataDemissao" value={this.state.empresaDataDemissao} onChange={this.handleChange}/>
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
                    <button className="buttonForm" type="onSubmit">PRÓXIMO</button>       
                </div>
            </form>)
    }

    renderCadastro = () => {
        if (this.state.carregarFormMae) {
            return this.renderCadastroMae()
        }else if(this.state.carregarFormEndereco){
            return this.renderCadastroEndereco()
        }else if (this.state.carregarFormFilho) {
            return this.renderCadastroFilho()
        }else if (this.state.carregarFormEmpresa){
            return this.renderCadastroEmpresa()
        }
    }

    header=()=>{
        return(this.state.admin?<HeaderAdmin/>:<HeaderMenu/>)
    }

    render(){
        return(
        <Fragment>
            <div>
                {this.header()}
                <NomeEmpresaTop/>
                {this.renderCadastro()}
            </div>
        </Fragment>)        
    }
}