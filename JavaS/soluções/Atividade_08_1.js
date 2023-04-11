function difDatas() {
    var data = new Date();
    var resultado = 
        data.getDate() + "/"
        + (data.getMonth() + 1) + "/"
        + data.getFullYear();
    document.getElementById("saida").innerHTML = resultado;
}
