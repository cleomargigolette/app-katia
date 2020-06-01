

export function detalhesMaeFunction(idMae){
    this.serviceMae.buscarMaePeloId(idMae).then((response) => {

        let filho = response.data.filho[0]

        this.setState({
            
            InfoMae: response.data,
            detalhesMae: !this.state.detalhesMae,
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

            filhoId:filho.id,
            filhoNome:filho.nome,
            filhoSobreNome:filho.sobrenome,
            filhoDataNascimento:filho.dataNascimento,
            filhoDataEmissaoCertidaoNascimento:filho.dataEmissaoCertidaoNascimento,
            filhoNumeroMatriculaParte1:filho.matriculaCertidaoNascimento,
            filhoNumeroMatriculaParte2:filho.matriculoaCdertidaoNascimentoContinuacao,

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

            processoDataAberturaProcesso:response.data.processo.dataAbertura,
            processoSituacaoProcesso:response.data.processo.situacaoProcesso,
            processoId:response.data.processo.id,
            processoExigencia:response.data.processo.exigencia,
            processoObservacao:response.data.processo.observacao
        })
    })  
}