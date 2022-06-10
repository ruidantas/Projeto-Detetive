const prompt = require("prompt-sync")()
console.clear()

const intro1 = prompt (" DETETIVE CONAN \n============= \nPressione [ENTER] para começar.")

const intro2 = prompt ("\nVocê está sendo investigado por homicídio doloso... \n[ENTER]")

const intro3 = prompt ("\nA vítima foi encontrada e pegadas e também cinzas foram apresentadas em localidades próximas de sua residência... \n[ENTER]")

const intro4 = prompt ("\nAgora você só tem uma opção de mostrar sua inocência que é respondendo 5 perguntas que irei fazer...\n[ENTER]")

let pergunta = 0


let pergunta1 = +prompt("\nVocê estava em casa ontem a noite? 1.[SIM] 2.[NÃO]").trim()


while(pergunta1 != 1 && pergunta1 != 2){
    
pergunta1 = +prompt("Você estava em casa ontem a noite?: 1.[SIM] 2.[NÃO]")}

if(pergunta1 == 1){
  pergunta++
  
}


let pergunta2 = +prompt("\nVocê estava sozinho? 1.[SIM] 2.[NÃO]").trim()
 
while(pergunta2 != 1 && pergunta2 != 2){
    
pergunta2 = +prompt("\nVocê estava sozinho? 1.[SIM] 2.[NÃO]")}
if(pergunta2 == 1){
pergunta++
         
}
    

let pergunta3 = +prompt("\nVocê fuma? 1.[SIM] 2.[NÃO]").trim()
    
while(pergunta3 != 1 && pergunta3 != 2){
        
pergunta3 = +prompt("\nVocê fuma? 1.[SIM] 2.[NÃO]")}
if(pergunta3 == 1){
pergunta++
          
}


let pergunta4 = +prompt("\nVocê calça 41? 1.[SIM] 2.[NÃO]").trim()
        
while(pergunta4 != 1 && pergunta4 != 2){
            
pergunta4 = +prompt("\nVocê calça 41? 1.[SIM] 2.[NÃO]")}
if(pergunta4 == 1){
pergunta++
              
}

let pergunta5 = +prompt("\nVocê é canhoto? 1.[SIM] 2.[NÃO]").trim()

while(pergunta5 != 1 && pergunta5 != 2){
    
pergunta5 = +prompt("\nVocê é canhoto? 1.[SIM] 2.[NÃO]")
}

if(pergunta5 == 1){
  pergunta++
}

if (pergunta <= 2)
{
  console.log ("\Parabéns. Você é inocente.")
}

else if (pergunta == 3)
{
console.log ("\nVocê é suspeito!")
}

else if (pergunta >=4)
{
  console.log ("\nA policia está a caminho. Você é culpado!")
}


 
console.log(`Você acertou ${pergunta} perguntas`)
    
    





