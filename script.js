function atribuirVariavel(disc) {
    //pega o ultimo disco clicado
    let element = document.getElementById('disco')
        //set o valor de value do input hidden da tela
    element.value = disc
}

function escolhaTorre(escolha) {
    //pega o id do ultimo disco clicado
    let element = document.getElementById('disco').value
        //pega o elemento disco clicado
    var node = document.getElementById(element);
    if (node.parentNode) { // se houver elemento clicado remove da div de origem
        node.parentNode.removeChild(node);
    }
    //pega elemento torre clicada
    let tower = document.getElementById(escolha);
    //set disco na torre
    tower.appendChild(node)
}