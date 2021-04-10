function criaElemento(tagName,className){
    let ele = document.createElement(tagName)
    ele.classList.add(className)
    return ele
}


function novoElemento(reversa=false){

    this.canoS= criaElemento('div','canoS')
    const borda = criaElemento('div','borda')
    const tampa = criaElemento('div','tampa')
    this.canoS.appendChild(reversa?borda:tampa)
    this.canoS.appendChild(reversa?tampa:borda)

    this.altura=(altura)=>borda.style.height=`${altura}px` 

}

function criaCano(altura,abertura,x){
    this.elemento= criaElemento('div','cano')
    this.superior = new novoElemento(true)
    this.inferior = new novoElemento(false)

    this.elemento.appendChild(this.superior.canoS)
    this.elemento.appendChild(this.inferior.canoS)

    this.sorteaAbertura = ()=>{
        const alturaSuperior =Math.random()* (altura-abertura) 
        console.log(alturaSuperior)
        const alturaInferior = altura -abertura - alturaSuperior
        console.log(alturaInferior)
        this.superior.altura(alturaSuperior)
        this.inferior.altura(alturaInferior)
    }

}


let b =new criaCano(700,200)
b.sorteaAbertura()

document.querySelector('[wm-flappy]').appendChild(b.elemento)






  



