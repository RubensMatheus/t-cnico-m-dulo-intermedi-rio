function difDatas() {
    var data1 = new Date(document.getElementById("data1").value);
    var data2 = new Date(document.getElementById("data2").value);
    
    var d1 = data1.getTime();
    var d2 = data2.getTime();

    // Diferença em milissegundos
    var diff_ms = d2-d1;

    // Diferença em dias
    var diff_dias = Math.floor(diff_ms / (1000 * 60 * 60 * 24));

    document.getElementById("saida").innerHTML = 
        "Milissegundos = " + diff_ms 
        + "<br>"
        + "Dias = " + diff_dias;
}
