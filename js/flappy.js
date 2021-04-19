// Cria  uma função que cria elemento
//cria  uma função que adiciona elementos que

function criaElementos(tagName,div){
     let elemento=document.createElement(tagName)
    elemento.classList.add(div)
    return elemento
}

function criaCano(reversa=false){  // cria  através do ''CriaElemento'' o cano e adiciona a borda
    this.cano = criaElementos('div','cano')
    let borda =criaElementos('div','borda')
    let tampa = criaElementos('div','tampa')
    this.cano.appendChild(reversa?borda:tampa)
    this.cano.appendChild(reversa?tampa:borda)
    this.setAltura = altura => borda.style.height=`${altura}px`
}   



function criaCanos(altura,alturaMin,x){
    this.cano=new criaElementos('div','canos')
    this.superior= new criaCano(true)
    this.inferior= new criaCano(false)

    this.cano.appendChild(this.superior.cano)
    this.cano.appendChild(this.inferior.cano)

    this.sortearAbertura= ()=>{
            let alturaSuperior = Math.random() * (altura -alturaMin)
            let alturaInferior= altura - alturaMin - alturaSuperior
            this.superior.setAltura(alturaSuperior)
            this.inferior.setAltura(alturaInferior)

    }
    this.getX=()=> parseInt(this.cano.style.left.split('px')[0])
    this.setX=x =>this.cano.style.left = `${x}px`

    this.setX(x)
    this.sortearAbertura()
}



function movimentar(altura,largura,abertura,espaço,marcaPonto){
    this.pares = [
        new criaCanos(altura,abertura,largura),
        new criaCanos(altura,abertura,largura + espaço),
        new criaCanos(altura,abertura,largura + espaço * 2),
        new criaCanos(altura,abertura,largura + espaço * 3),
    ]
    let movimento = 5
    this.animar=()=>{
        this.pares.forEach((par)=>{
            par.setX(par.getX()- movimento)
            if(par.getX()<-100){
                par.setX(par.getX() + espaço * this.pares.length)
                par.sortearAbertura()

            }
            let meio = altura/2
            let marcou = par.getX() +movimento >= meio && par.getX()<meio
            if(marcou) marcaPonto()
        })

    }
  

    

}

function passaro (alturaJogo){
    let passaro = false
    this.elemento= new criaElementos('img','passaro')
    this.elemento.src='../imgs/passaro.png'
    this.getY=()=>{
        return parseInt(this.elemento.style.bottom.split('px')[0])
    } 
    this.setY= y=>{
        return this.elemento.style.bottom =`${y}px`
    } 
    window.onkeyup=(e)=> passaro=false
    window.onkeydown=(e)=> passaro=true
    this.animar = ()=>{
        const novoY = this.getY() + (passaro ? 8 : -5)
        console.log(novoY)
        const alturaMaxima=alturaJogo - this.elemento.clientHeight
        if(novoY <=0){
            this.setY(0)
        }
        else if(novoY > alturaMaxima){
            this.setY(alturaMaxima)
        }else{
            this.setY(novoY)
        }

    }
    this.setY(alturaJogo/2)
}
function Progresso(){
        this.elemento=criaElementos('span','progresso')
        this.atualizarPonto =pontos=>{
            this.elemento.innerHTML= pontos
        }
        this.atualizarPonto(0)
     
}

function estaoSobrepostos(elementoA,elementoB){
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top

    return horizontal && vertical
}


function colidiu (passaro,canos){
    let colidiu =false
    canos.pares.forEach((par)=>{
        if(!colidiu){
            const superior  = par.superior.cano
            const inferior = par.inferior.cano
            colidiu = estaoSobrepostos(passaro.elemento,superior)||estaoSobrepostos(passaro.elemento,inferior)

        }
    })
    return colidiu
}



function flappyBird(){
     let areaDoJogo = document.querySelector('[wm-flappy]')
    let alturaDoJogo= areaDoJogo.clientHeight
    let larguraDoJogo = areaDoJogo.clientWidth
    let pontos =0
    let progresso = new Progresso()
    let canos = new movimentar(alturaDoJogo,larguraDoJogo,200,400,()=> progresso.atualizarPonto(++pontos))

    const Passaro= new passaro(alturaDoJogo)

    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(Passaro.elemento)
    canos.pares.forEach((par)=>{
        areaDoJogo.appendChild(par.cano)

        this.start= ()=>{
            temporizador=setInterval(()=>{

                Passaro.animar()
                canos.animar()

                if(colidiu(Passaro,canos)){
                    clearInterval(temporizador)
                }
            },16)
        }
    })


}


 new flappyBird().start()