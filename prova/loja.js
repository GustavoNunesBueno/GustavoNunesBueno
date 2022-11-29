/*Criação de uma página WEB, onde será possível realizar o cadastro de produtos de uma loja (nome, marca e valor), alterar o valor de um produto, deletar um produto e apresentar a lista dos produtos para os clientes, na página.

Tudo isso deverá ser realizado em uma única página.

Itens obrigatórios:

- Criação de um array de objetos para armazenar os produtos. Deverá ser armazenados dentro do LocalStorage com a chave "produtosLoja". (3,0)
- Criação da página HTML para apresentar / alterar / cadastrar / deletar os produtos. (2,0)
- Função para listar os produtos. (1,0)
- Função para alterar o valor de um produto, deverá buscar cada produto pelo seu nome. (2,0)
- Função para deletar um produto. (1,0)
- Função para cadastrar um produto. (1,0)*/


let nome = document.getElementById('inpName')
let marca = document.getElementById('inpBrand')
let preco = document.getElementById('inpPrice')
let buscar = document.getElementById('product')
let remover = document.getElementById('delete')
let alterar = document.getElementById('alterar')

let produto = []

function Cadastrar(){
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
    Listar()
}
function Buscar(){

    for(i = 0;  i < produto.length; i++){

        if(buscar.value == produto[i].name ){
            
            alterar.value = produto[i].name
            nome.value = produto[i].name
            marca.value = produto[i].brand
            preco.value = produto[i].price
        }

    }
}

function Listar(){ 
    
    let lista = ''
produto = JSON.parse(localStorage.getItem('produtoLoja'))

if(produto == null){

    lista = 'Não existem usuários cadastrados! :('

}else{

    for(i=0; i < produto.length; i++){

        lista = lista + Object.values(produto[i]).join(' - ') + '<br>'

    }
    
}

document.getElementById("Lista").innerHTML = lista    

}


