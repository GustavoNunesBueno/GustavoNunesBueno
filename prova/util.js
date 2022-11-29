function Editar(){
    for(i=0; i<estacionamento.length; i++){
        if(placa.value == estacionamento[i].placa){
            // alert('Achei!!!')
            estacionamento[i].ano = ano.value 
            estacionamento[i].modelo = modelo.value
            estacionamento[i].marca = marca.value
            estacionamento[i].cor = cor.value
            // achado = estacionamento[i]
        }
    }
    localStorage.setItem('estacionamentoSalvo', JSON.stringify(estacionamento))
    limparInputs()
}