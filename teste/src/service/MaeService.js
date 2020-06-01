import axios from 'axios';
import BaseService from './BaseService.js';

export default class MaeService extends BaseService {

    buscarMaePeloId(idMae){
        return axios.get(`${this.baseUrl}public/mae/`+idMae,{
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
    }

    buscarMaePeloCpfNome(cpf, primeiroNome){
        var dados={
            cpf: cpf,
            primeiroNome: primeiroNome
        }
        return axios.post(`${this.baseUrl}public/mae/consulta`,dados,{
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
    }

    buscarTodasMaeAtivas(){
       
        return axios.get(`${this.baseUrl}public/mae/ativo`,{
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
    }

    salvarMae(primeiroNome, sobreNome, email, cpf, rg, telefone, nomeMae,
        nomePai, dataNascimento, idConsultor,escolaridade,estadoCivil,pis){
        
        const dados = {
         
            primeiroNome: primeiroNome,
            sobreNome: sobreNome,
            email: email,
            cpf:cpf,
            rg:rg,
            telefone:telefone,
            nomeMae:nomeMae,
            nomePai:nomePai,
            dataNascimento:dataNascimento,
            idConsultor:idConsultor,
            escolaridade:escolaridade,
            estadoCivil:estadoCivil,
            pis:pis
        }

        return axios.post(`${this.baseUrl}public/mae`, dados,{
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })

    }

    editarMae(id,primeiroNome, sobreNome, email, cpf, rg, telefone, nomeMae,
        nomePai, dataNascimento,escolaridade,estadoCivil,pis){
        
        const dados = {
            id:id,
            primeiroNome: primeiroNome,
            sobreNome: sobreNome,
            email: email,
            cpf:cpf,
            rg:rg,
            telefone:telefone,
            nomeMae:nomeMae,
            nomePai:nomePai,
            dataNascimento:dataNascimento,
            escolaridade:escolaridade,
            estadoCivil:estadoCivil,
            pis:pis          
        }

        return axios.put(`${this.baseUrl}public/mae`, dados,{
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })

    }

    salvarEnderecoMae(rua,bairro,cidade,estado,numeroCasa,complemento,cep,idMae){
        
        const dados = {
            rua: rua,
            bairro:bairro,
            cidade:cidade,
            estado:estado,
            numeroCasa:numeroCasa,
            complemento:complemento,
            cep:cep,
            idMae:idMae
        }

        return axios.post(`${this.baseUrl}public/endereco`, dados,{
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })

    }

    editarEnderecoMae(id,rua,bairro,cidade,estado,numeroCasa,complemento,cep){
        
        const dados = {
            id:id,
            rua: rua,
            bairro:bairro,
            cidade:cidade,
            estado:estado,
            numeroCasa:numeroCasa,
            complemento:complemento,
            cep:cep
        }

        return axios.put(`${this.baseUrl}public/endereco`, dados,{
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })

    }

    editarProcessoMae(id,situacaoProcesso,exigencia,observacao){
        
        const dados = {
            id:id,
            situacaoProcesso:situacaoProcesso,
            exigencia:exigencia,
            observacao:observacao
        }

        return axios.put(`${this.baseUrl}public/processo`, dados,{
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })

    }

    salvarFilhoMae(nome,sobrenome,dataNascimentoFilho,idMae,dataEmissaoCertidaoNascimento,
        matriculaCertidaoNascimento, matriculoaCdertidaoNascimentoContinuacao){
        
        const dados = {
            
            nome: nome,
            sobrenome: sobrenome,
            dataNascimento:dataNascimentoFilho,
            idMae:idMae,
            dataEmissaoCertidaoNascimento:dataEmissaoCertidaoNascimento,
            matriculaCertidaoNascimento:matriculaCertidaoNascimento,
            matriculoaCdertidaoNascimentoContinuacao:matriculoaCdertidaoNascimentoContinuacao
        }

        return axios.post(`${this.baseUrl}public/filho`, dados,{
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })

    }

    editarFilhoMae(id,nome,sobrenome,dataNascimentoFilho,dataEmissaoCertidaoNascimento,
        matriculaCertidaoNascimento, matriculoaCdertidaoNascimentoContinuacao){
        
        const dados = {
            id:id,
            nome: nome,
            sobrenome: sobrenome,
            dataNascimento:dataNascimentoFilho,
            dataEmissaoCertidaoNascimento:dataEmissaoCertidaoNascimento,
            matriculaCertidaoNascimento:matriculaCertidaoNascimento,
            matriculoaCdertidaoNascimentoContinuacao:matriculoaCdertidaoNascimentoContinuacao
        }

        return axios.put(`${this.baseUrl}public/filho`, dados,{
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })

    }

    salvarEmpresaMae(nome,dataAdmissao,dataDemissao,seguroDesemprego,idMae,motivoSaidaEmpresa){
        
        const dados = {
            nome: nome,
            dataAdmissao: dataAdmissao,
            dataDemissao:dataDemissao,
            seguroDesemprego:seguroDesemprego,
            idMae:idMae,
            motivoSaidaEmpresa:motivoSaidaEmpresa
        }

        return axios.post(`${this.baseUrl}public/empresa`, dados,{
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })

    }

    editarEmpresaMae(id,nome,dataAdmissao,dataDemissao,seguroDesemprego,motivoSaidaEmpresa){
        
        const dados = {
            id:id,
            nome: nome,
            dataAdmissao: dataAdmissao,
            dataDemissao:dataDemissao,
            seguroDesemprego:seguroDesemprego,
            motivoSaidaEmpresa:motivoSaidaEmpresa
        }

        return axios.put(`${this.baseUrl}public/empresa`, dados,{
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })

    }

}