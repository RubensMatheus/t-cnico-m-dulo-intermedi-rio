const potencia = document.querySelector('#potencia-button');
const metade = document.querySelector('#metade-button');
const area = document.querySelector('#area-button');


function cubo(){
    let x = Number(document.querySelector('#potencia-input').value);
    let r1 = x ** 3;
    document.getElementById('solucao').value = r1;
}

function metad(){
    let y = Number(document.querySelector('#metade-input').value);
    let r2 = y / 2;
    document.getElementById('solucao').innerHTML = r2
}

function areac(){
    let z = Number(document.querySelector('#area-input').value);
    let r3 = Math.PI * (z ** 2);
    document.getElementById('solucao').innerHTML = r3;
}


potencia.onclick = cubo;
metade.onclick = metad;
area.onclick = areac;