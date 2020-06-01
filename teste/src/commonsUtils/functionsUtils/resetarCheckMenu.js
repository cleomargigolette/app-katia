export function resetarCheckMenu(id){
    let idString = id.toString();
    let elemento = document.getElementById(idString);
    elemento.checked=false
}