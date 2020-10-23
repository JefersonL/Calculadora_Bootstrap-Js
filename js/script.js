function inserir(num){
    document.getElementById('visor').value = document.getElementById('visor').value + num;
}
function igual() {
    var valor = document.getElementById('visor').value;
    document.getElementById('visor').value = eval(valor);
}
function limpaVisor() {
    document.getElementById('visor').value = "";
}
function limpaNum() {
    var valor = document.getElementById('visor').value;
    document.getElementById('visor').value = valor.substr(0,valor.length-1);
}