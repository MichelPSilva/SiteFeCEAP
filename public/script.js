function onOff(){
    //Exibe ou esconde o modal
    document
        .querySelector("#modal")//acha o modal via DOM
        .classList.toggle("hide");//muda a class do modal

    //Bloquear o scroll do body qnd o modal estiver na tela
    document
        .querySelector("body")//acha o body via DOM
        .classList.toggle("hideScroll");//muda a class do body

    //Habilitar scroll pro modal, caso "estoure" o tamanho da tela
    document
        .getElementById("modal")//1 - achar o modal via DOM
        .classList.toggle("addScroll");//2 - habilitar scroll no modal
    
    
    //solucao do bug da aula
    document.querySelector("#container").classList.toggle("someFundo");
}

