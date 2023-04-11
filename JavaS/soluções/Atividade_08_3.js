function diasNoMes() {
    var mes = new Number(document.getElementById("mes").value);
    
    var hoje = new Date();
    var ano = hoje.getFullYear();

    var dias = new Date(ano, mes, 0).getDate();

    var resposta = 
        "O mês "+ mes +" do ano " + ano
        + " tem " + dias + " dias";

    document.getElementById("saida").innerHTML = resposta;
}
