let nome = document.getElementById('inpName')
let marca = document.getElementById('inpBrand')
let preco = document.getElementById('inpPrice')
let buscar = document.getElementById('product')

let produto = []

function Confirmar(){
let    characters = {

    name: '',
    brand: '',
    price: ''
    
    }
    
    characters.name = nome.value
    characters.brand = marca.value
    characters.price = preco.value

    produto = JSON.parse(localStorage.getItem('produtoLoja'))

    
    if(produto == null){

        produto = []

        produto.push(characters)
        localStorage.setItem('produtoLoja', JSON.stringify(produto))

    }else{

        produto.push(characters)
        localStorage.setItem('produtoLoja', JSON.stringify(produto))

    }
  
}
function Buscar(){

for(i = 0;  i < produto.length; i++){

    if(buscar.value == produto[i].name ){

        nome.value = produto[i].name
        marca.value = produto[i].brand
        preco.value = produto[i].price


    }

}




}

