// pega elementos
let  cano = document.querySelector('.cano-superior')
let start =document.querySelector('.start')
let  atributoPersonalizado=document.querySelector('[wm-flappy]')


//movimentação dos canos

let movimentacao = '307'

//-80px ele vai desaparecer




start.onclick=function(e){
    start.style.display='none'


    setInterval(()=>{
        movimentacao-=0.80
        cano.style.left = movimentacao +'px'
    })
   



}


function random(max,min){
    return parseInt(Math.random() * (max- min )- min) 
}


    //setInterval(()=>{

        //cano.style.height=`${random(300,5)}%`
    // console.log(random(300,5))
    //},500)