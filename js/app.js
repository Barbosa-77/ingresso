function comprar(){
    let ingresso = document.getElementById('tipo-ingresso');
    let qntd = document.getElementById('qtd').value;

    if(ingresso.value == 'pista') {
        comprarPista(qntd);
    }

     if(ingresso.value == 'superior') {
        comprarSuperior(qntd);
     }
      if(ingresso.value == 'inferior') {
        comprarInferior(qntd);
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


function comprarSuperior(qntd){
    let qntdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qntd>qntdSuperior){
        alert ('Quantidade indisponível')
    } else{
        qntdSuperior = qntdSuperior - qntd;
        document.getElementById('qtd-superior').textContent = qntdSuperior
        alert ('Compra realizada!')
    }
}

function comprarInferior(qntd){
    let qntdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qntd>qntdInferior){
        alert ('Quantidade indisponível')
    } else{
        qntdInferior = qntdInferior - qntd;
        document.getElementById('qtd-inferior').textContent = qntdInferior
        alert ('Compra realizada!')
    }
}