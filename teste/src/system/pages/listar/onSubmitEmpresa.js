import swall from 'sweetalert';

export function onSubmitEmpresa(event){
    event.preventDefault();

    this.setState({
        loading:true
    });

    this.serviceMae.editarEmpresaMae(this.state.empresaId,this.state.empresaNome.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),
    this.state.empresaDataAdmissao,this.state.empresaDataDemissao,this.state.empresaSeguroDesemprego,this.state.empresaMotivoSaidaEmpresa
    ).then((response) =>{
    

        this.setState({
            empresaNome:response.data.nome,
            empresaDataAdmissao:response.data.dataAdmissao,
            empresaDataDemissao:response.data.dataDemissao,
            empresaMotivoSaidaEmpresa:response.data.motivoSaidaEmpresa,
            empresaSeguroDesemprego:response.data.seguroDesemprego
        });

        swall({
            title:'Empresa alterada.',
            icon:'success'           
        })

    }).catch(err =>{
        swall({
            title:'Não possível alterar os dados da empresa.',
            icon:'error'           
        })
        
    });
    this.setState({
        loading:false
    })
}