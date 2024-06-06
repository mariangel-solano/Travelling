function precioAus(){
    var sid = document.getElementById("sid").value;
    var resultAus = (sid * 2500);
    document.getElementById('res-aus').innerHTML = resultAus;
}

function precioSue(){
    var sue = document.getElementById("sue").value;
    var resultSue = (sue * 2000);
    document.getElementById('res-sue').innerHTML = resultSue;
}

function precioCor(){
    var cor = document.getElementById("cor").value;
    var resultCor = (cor * 2800);
    document.getElementById('res-cor').innerHTML = resultCor;
}

function precioMex(){
    var mex = document.getElementById("mex").value;
    var resultMex = (mex * 2000);
    document.getElementById('res-mex').innerHTML = resultMex;
}

function precioCord(){
    var cord = document.getElementById("cord").value;
    var resultCord = (cord * 1200);
    document.getElementById('res-cord').innerHTML = resultCord;
}

function precioMen(){
    var men = document.getElementById("men").value;
    var resultMen = (men * 1800);
    document.getElementById('res-men').innerHTML = resultMen;
}




function CompraSidney() {
    var compraSidney = document.querySelector('.compra.sidney');
    if (compraSidney.style.display === 'none' || compraSidney.style.display === '') {
        compraSidney.style.display = 'flex';
        compraSidney.style.flexDirection = 'column'; 
    } else {
        compraSidney.style.display = 'none';
    }
}

function CompraSuecia() {
    var compraSuecia = document.querySelector('.compra.suecia');
    if (compraSuecia.style.display === 'none' || compraSuecia.style.display === '') {
        compraSuecia.style.display = 'flex';
        compraSuecia.style.flexDirection = 'column'; 
    } else {
        compraSuecia.style.display = 'none';
    }
}

function CompraSeul() {
    var compraSeul = document.querySelector('.compra.seul');
    if (compraSeul.style.display === 'none' || compraSeul.style.display === '') {
        compraSeul.style.display = 'flex';
        compraSeul.style.flexDirection = 'column'; 
    } else {
        compraSeul.style.display = 'none';
    }
}

function CompraMexico() {
    var compraMexico = document.querySelector('.compra.mexico');
    if (compraMexico.style.display === 'none' || compraMexico.style.display === '') {
        compraMexico.style.display = 'flex';
        compraMexico.style.flexDirection = 'column'; 
    } else {
        compraMexico.style.display = 'none';
    }
}

function CompraCordoba() {
    var compraCordoba = document.querySelector('.compra.cordoba');
    if (compraCordoba.style.display === 'none' || compraCordoba.style.display === '') {
        compraCordoba.style.display = 'flex';
        compraCordoba.style.flexDirection = 'column'; 
    } else {
        compraCordoba.style.display = 'none';
    }
}

function CompraMendoza() {
    var compraMendoza = document.querySelector('.compra.mendoza');
    if (compraMendoza.style.display === 'none' || compraMendoza.style.display === '') {
        compraMendoza.style.display = 'flex';
        compraMendoza.style.flexDirection = 'column'; 
    } else {
        compraMendoza.style.display = 'none';
    }
}