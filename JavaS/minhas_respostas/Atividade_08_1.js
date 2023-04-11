function exibirData() {
    var data = new Date();
    var resultado = data.getDate() + "/0"+ (data.getMonth() + 1) + "/"+ data.getFullYear();
    document.getElementById("saida").innerHTML = resultado;
}
