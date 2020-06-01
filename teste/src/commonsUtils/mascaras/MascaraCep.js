export function formatarCep(cep){
    if(cep != null){
        let cepParte1 = cep.toString().slice(0,4);
        let cepParte2 = cep.toString().slice(4,7);
        return `${cepParte1}-${cepParte2}`
    }
}