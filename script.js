function atribuirVariavel(disc) {
    //pega o ultimo disco clicado
    let element = document.getElementById('disco')
        //set o valor de value do input hidden da tela

    // ---------------------------------------------------------------    
    //TO DO = 1º PEGAR TORRE DO DISCO SELECIONADO
    //        2º VERIFICAR SE O ULTIMO ELEMENTO DA TORRE CORRESPONDE AO ELEMENTO SELECIONADO
    //        *APENAS SETAR VALOR SE PASSO 2º FOR IGUAL A TRUE
    // --------------------------------------------------------------------------

    element.value = disc
}

function escolhaTorre(escolha) {
    //pega o id do ultimo disco clicado
    let element = document.getElementById('disco').value
        //pega o elemento disco clicado
    let node = document.getElementById(element);

    //pega a div de origem
    let torreDeOrigem = document.getElementById(node.parentNode.id)

    if (node.parentNode) { // se houver elemento clicado remove da div de origem
        node.parentNode.removeChild(node);
    }
    //pega elemento torre clicada
    let tower = document.getElementById(escolha);

    // pega o ultimo disco da torre clicada
    let ultimoDisco = tower.lastElementChild

    //verifica se existe ultimo disco
    if (ultimoDisco !== null) {
        ultimoDisco = ultimoDisco.classList.value

        //verifica o tamanho do ultimo disco
        if ((ultimoDisco == 'disc3') || (ultimoDisco == 'disc2' && element == 'disc1')) {
            //caso o ultimo disco seja menor o disco selecionado volta a div de origem
            torreDeOrigem.appendChild(node)
        } else {
            //set disco na torre
            tower.appendChild(node)
        }
    } else {
        //set disco na torre
        tower.appendChild(node)
    }
}