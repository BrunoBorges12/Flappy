// pega elementos
let  cano1 = document.querySelector('.cano')
let cano2= document.querySelector('.cano2')
let cano3 = document.querySelector('.cano3')


let canoS1= document.querySelector('.cano-superior')
let canoS2= document.querySelector('.cano-superior2')
let canoS3= document.querySelector('.cano-superior3')


let andar = false
let andar2 = false   
let start =document.querySelector('.start')
let  atributoPersonalizado=document.querySelector('[wm-flappy]')
let objM= {cano1:710, movi(){return this.cano1-=1},cano2:490, movi2(){ return this.cano2-=1},cano3:249, movi3(){ return this.cano3-=1}}

//movimentação dos canos


//-80px ele vai desaparecer
//fff 

canoS1.style.height= random(300,5) +'px'

canoS2.style.height= random(300,5) +'px'
canoS3.style.height= random(300,5) +'px'





start.onclick=function(e){
    start.style.display='none'


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
   




}


function random(max,min){
    return parseInt(Math.random() * (max- min )- min) 
}


    //setInterval(()=>{

        //cano.style.height=`${random(300,5)}%`
    // console.log(random(300,5))
    //},500)