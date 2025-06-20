function comprar(){
    let ingresso = document.getElementById('tipo-ingresso');
    let qntd = document.getElementById('qtd').value;

    if(ingresso.value == 'pista') {
        comprarPista(qntd);
    }
}

function comprarPista(qntd){
    let qntdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qntd>qntdPista){
        alert ('Quantidade indisponível')
    } else{
        qntdPista = qntdPista - qntd;
        document.getElementById('qtd-pista').textContent = qntdPista
        alert ('Compra realizada!')
    }
}