import swall from 'sweetalert';


export function onSubmitMae(event){
        
    event.preventDefault();

    this.setState({
        loading:true
    })
           
    this.serviceMae.editarMae(this.state.maeId, this.state.maePrimeiroNome.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),
    this.state.maeSobreNome.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),
    this.state.maeEmail,this.state.maeCpf,this.state.maeRg,this.state.maeTelefone,
    this.state.maeNomeMae.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),
    this.state.maeNomePai.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),
    this.state.maeDataNascimento,this.state.maeEscolaridade,this.state.maeEstadoCivil,this.state.maePis).then((response) => {

        this.setState({
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
            maeEscolaridade:response.data.escolaridade,
            maeEstadoCivil:response.data.estadoCivil,
            maePis:response.data.pis
        });

        swall({
            title:'Dados da mãe foram alterados.',
            icon:'success'           
        })
      
    }).catch(err =>{
        swall({
            title:'Não foi possivel editar os dados.',
            icon:'error'           
        })
    });  
    this.setState({
        loading:false
    });

   
}
