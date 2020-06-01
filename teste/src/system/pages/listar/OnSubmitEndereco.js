import swall from 'sweetalert';

export function onSubmitEndereco(event){
    event.preventDefault();

    this.setState({
        loading:true
    });

    this.serviceMae.editarEnderecoMae(this.state.enderecoId,this.state.enderecoRua.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),
    this.state.enderecoBairro.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),
    this.state.enderecoCidade.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),
    this.state.enderecoEstado, this.state.enderecoNumeroCasa,
    this.state.enderecoComplemento.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),
    this.state.enderecoCep).then((response) =>{
    
        let endereco = response.data;

        this.setState({
            enderecoRua:endereco.rua,
            enderecoBairro:endereco.bairro,
            enderecoCidade:endereco.cidade,
            enderecoEstado:endereco.estado,
            enderecoNumeroCasa:endereco.numeroCasa,
            enderecoComplemento:endereco.complemento,
            enderecoCep:endereco.cep
        });

        swall({
            title:'Endereco alterado.',
            icon:'success'           
        })

    }).catch(err =>{
        swall({
            title:'Não possível alterar o endereco.',
            icon:'error'           
        })
        
    });
    this.setState({
        loading:false
    })
}