function fds() {
    var data = new Date(document.getElementById("data").value);
    
    var resposta = data.getDay()==5 || data.getDay()==6;

    document.getElementById("saida").innerHTML = resposta;
}
