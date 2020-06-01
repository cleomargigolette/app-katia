import swall from 'sweetalert';


export function onSubmitProcesso(event){
        
    event.preventDefault();

    this.setState({
        loading:true
    })
           
    this.serviceMae.editarProcessoMae(this.state.processoId, this.state.processoSituacaoProcesso,
        this.state.processoExigencia,this.state.processoObservacao).then((response) => {

        this.setState({
            processoSituacaoProcesso:response.data.situacaoProcesso,
            processoExigencia:response.data.exigencia,
            processoObservacao:response.data.observacao

        });

        console.log(response.data.observacao)

        swall({
            title:'Dados do processo foram alterados.',
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
