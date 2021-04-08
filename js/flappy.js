// pega elementos
let  cano1 = document.querySelector('.cano')
let cano2= document.querySelector('.cano2')
let cano3 = document.querySelector('.cano3')
let canoS1= document.querySelector('.cano-superior')
let canoS2= document.querySelector('.cano-superior2')
let canoS3= document.querySelector('.cano-superior3')
let body = document.querySelector('body')
// botão de start e movimentação
let andar = false
let andar2 = false   
let start =document.querySelector('.start')
let  atributoPersonalizado=document.querySelector('[wm-flappy]')
let objM= {cano1:710, movi(){return this.cano1-=1},cano2:490, movi2(){ return this.cano2-=1},cano3:249, movi3(){ return this.cano3-=1}}

canoS1.style.height= random(300,50) +'px'
canoS2.style.height= random(100,15) +'px'
canoS3.style.height= random(200,15) +'px'
// movimentação do passáro 

let passaro = document.querySelector('.imagem')
let subirPassaro = false

let movimentaçãoP= 307



start.onclick=function(e){
    start.style.display='none'


    
    body.onkeypress= function(e){
      
        subirPassaro =true
        
        if(subirPassaro){
            setTimeout(()=>{
                movimentaçãoP-=15
                passaro.style.top= movimentaçãoP +'px'
             
                subirPassaro=false
            },16)

        }
     


    }

    setInterval(()=>{
        

            objM.movi()


          
          if(cano1.getBoundingClientRect().right <=1000){
              andar=true
          }

          if(cano2.getBoundingClientRect().right <=1000){
            andar2=true
        }
          if(andar){
            objM.movi2()
          }
          if(andar2){
            objM.movi3  ()
          }
          
            cano1.style.left = objM.cano1 +'px'
            cano2.style.left=objM.cano2+'px'
            cano3.style.left=objM.cano3+'px'


        if(cano1.getBoundingClientRect().right <=507){
            objM.cano1=710

        }
        else if(cano2.getBoundingClientRect().right <=507){
            objM.cano2=490

            canoS2.style.height= random(300,5) +'px'

            
        }


        else if(cano3.getBoundingClientRect().right <=507){
            objM.cano3=249
            canoS3.style.height= random(300,5) +'px'    



        }
            
    },16)

    setInterval(() => {

        if(subirPassaro === false){
            movimentaçãoP+=5
            passaro.style.top=movimentaçãoP +'px    '


        }
        

        
    },100);
   
}


function random(max,min){
    return parseInt(Math.random() * (max- min )- min) 
}

