function converter() {
    var entrada = Number(document.getElementById("minutos").value);
    
    var horas = (entrada / 60);
    var horas_int = Math.floor(horas);
    var minutos = (horas - horas_int) * 60;
    var minutos_int = Math.round(minutos);
    
    var resposta = 
        entrada + "m = " 
        + horas_int + "h" + minutos_int + "m";

    document.getElementById("saida").innerHTML = resposta;
}
