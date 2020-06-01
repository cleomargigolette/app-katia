
export function formatarTelefone(telefone){
    if(telefone != null){
        let ddd = telefone.toString().slice(0,2);

        let telefoneParte1 = telefone.toString().slice(2,7);

        let telefoneParte2 = telefone.toString().slice(7,11);

        return `(${ddd})${telefoneParte1}-${telefoneParte2}`
    }
}