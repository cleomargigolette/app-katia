import swall from 'sweetalert';


export function onSubmitFilho(event){
        
    event.preventDefault();

    this.setState({
        loading:true
    })
           
    this.serviceMae.editarFilhoMae(this.state.filhoId,this.state.filhoNome.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),
    this.state.filhoSobreNome.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),
    this.state.filhoDataNascimento,this.state.filhoDataEmissaoCertidaoNascimento,
    this.state.filhoNumeroMatriculaParte1, this.state.filhoNumeroMatriculaParte2)
    .then((response)=>{

        this.setState({
            filhoId:response.data.id,
            filhoNome:response.data.nome,
            filhoSobreNome:response.data.sobrenome,
            filhoDataNascimento:response.data.dataNascimento,
            filhoDataEmissaoCertidaoNascimento:response.data.dataEmissaoCertidaoNascimento,
            filhoNumeroMatriculaParte1:response.data.matriculaCertidaoNascimento,
            filhoNumeroMatriculaParte2:response.data.matriculoaCdertidaoNascimentoContinuacao
        });

        swall({
            title:'Dados do filho foram alterados',
            icon:'success'           
        })
      
    }).catch(err =>{
        swall({
            title:'Não foi possivel editar os dados',
            icon:'error'           
        })
    });  
    this.setState({
        loading:false
    });

   
}

