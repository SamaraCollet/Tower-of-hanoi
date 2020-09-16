function load() {
    // pegar o id das torres
    let el = document.getElementById("tower1")
    let el2 = document.getElementById("tower2")
    let el3 = document.getElementById("tower3")

    //criar os listeners de click
    el.addEventListener("click", handleClick);
    el2.addEventListener("click", handleClick);
    el3.addEventListener("click", handleClick);
}

//carregar os listeners ao carregar a pagina
document.addEventListener("DOMContentLoaded", load, false);

//variaveis que vão ficar salvo na tela
let currentTower = 'tower1';
let nextTower = ['tower2', 'tower3']
let choice = "escolha"
let discs = ["disc1", "disc2", "disc3"]

//função de evento de click das torres
const handleClick = function(event) {
    //mostra quem clicou
    let tower = event.target

    //faz o click selecionar somente o parent e não dos discos
    if (discs.includes(tower.id)) {
        tower = tower.parentElement
    }

    //verifica se é o disco escolhido ou o adicionado
    if (choice == "escolha") {
        // se a torre não tiver com nenhum disco, sai da função
        if (tower.childElementCount < 1) {
            return
        }
        //muda a a torre clicada
        if (nextTower.includes(tower.id)) {
            nextTower.push(currentTower)
            nextTower.splice(nextTower.indexOf(tower.id), 1)
            currentTower = tower.id
        }
        choice = "adicionar"
    } else {
        //pega a torre de onde o disco vai sair
        let lastTower = document.getElementById(currentTower)

        //pega o disco a ser retirado
        let disc = lastTower.lastElementChild

        //pega o ultimo disco da torre que vai receber o disco
        let lastDisc = tower.lastElementChild

        //verifica se existe disco na torre
        if (lastDisc == null) {
            if (disc != null) {
                tower.appendChild(disc)
            }
        } else {
            //pega o tamanho do ultimo disco
            let sizeDiscLastDisc = lastDisc.clientWidth
                //pega o tamanho do disco selecionado
            let sizeDiscNextDisc = disc.clientWidth
                //verifica se o disco selecionado não é maior que o disco debaixo
            if (sizeDiscLastDisc > sizeDiscNextDisc) {
                tower.appendChild(disc)
            }
        }
        //altera a variavel da tela
        choice = "escolha"
    }
    //declara vencedor
    let win = document.getElementById('tower3');
    let win2 = document.getElementById('tower2')

    if (win.childElementCount > 2 || win2.childElementCount > 2) {
        alert("Você venceu!!!");
    }

}