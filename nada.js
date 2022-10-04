
let player1 = 0,player2 = 0,nome,nome2
let carta1 = 0, carta2 = 0
let escolha, escolha2

escolha = prompt("digite (a) para jogar com um amigo\n digite (b)para jogar com computador ").toLowerCase()

switch (escolha) {
    case "a":
        
        nome = prompt("qual seu nome gente boa você ira ser player 1")
        nome2 = prompt("qual seu nome gente boa você ira ser player 2")
        
        for(i = 0; i < 5; i ++ ){
             player1 = Number(prompt("jogue saus cartas player 1"))
             player2 = Number(prompt("jogue saus cartas player 2"))
            
        if( player1 >= 1 && player1 <=13){
        
            carta1 += player1 
        }else{ alert(` apenas cartas de 1 há 13. tinha  que ser ${nome}`) }
        if(player2 >= 1 && player2 <=13){
            carta2 += player2
        }else{ alert(`apenas cartas de 1 há 13. tinha que ser ${nome2}`) }
        console.log(`${carta1}\n${carta2}`)
        alert(`sua soma player1 ${carta1}\nsua soma player2 ${carta2}`)
        
        
        }
        if (player1 < player2){
            carta1 -= carta2
            alert(`jogador 2 ganhou por diferença de\n${carta1}\nparabens
            ${nome2}`)        
        }else{
            carta2 -= carta1
            alert(`jogador 1 ganhou por diferença de\n${carta2}\nparabens
            ${nome}`)
        
        }
        
        break;
    case "b":    
         nome = prompt("qual seu nome gente boa você ira ser player 1")
         
         for(i = 0; i < 5; i ++ ){
            player1 = Number(prompt("jogue saus cartas player 1"))
            escolha2 = Math.floor(Math.random() * (13 - 1) ) + 1; 
            carta2 += escolha2
            console.log(escolha2)

            if( player1 >= 1 && player1 <=13){
        
                carta1 += player1 
            }else{ alert(` apenas cartas de 1 há 13. tinha  que ser ${nome}`) }

         }
         if (player1 < escolha2){
            carta1 -= carta2
            alert(`computador ganhou por diferença de\n${carta1}`)        
        }else{
            carta2 -= carta1
            alert(`jogador 1 ganhou por diferença de\n${carta2}\nparabens
            ${nome}`)
        
        }
        break;
}                