const nome = document.getElementById('texto1');
const convite = document.getElementById('texto2')
let botao = document.getElementById('btn');
let p = document.querySelector('#pesquisa');

const convidadosDoCristian = ['Mariana', 'Marlaine', 'Vanessa'];

const convidadosDoCarlos = ['Dirley', 'Renan', 'Jefferson'];

botao.addEventListener('click', clicar);
function clicar() {

    if ((nome.value.length == '') || (convite.value.length == '')) {
        alert('Preencha os campos para continuar!');
    } else if (convite.value === 'Cristian') {
        if (convidadosDoCristian.includes(nome.value)) {
            p.innerHTML = '<strong>Você está liberado para entrar! Aproveite a festa.</strong>';
        }
        else {
            p.innerHTML = '<strong>Você não foi convidado para a festa,por isso não pode entrar!<strong>';
        }
    } else if (convite.value === 'Carlos') {
        if (convidadosDoCarlos.includes(nome.value)) {
            p.innerHTML = '<strong>Você está liberado para entrar! Aproveite a festa.</strong>';
        }
        else {
            p.innerHTML = '<strong>Você não foi convidado para a festa,por isso não pode entrar!<strong>';
        }
    }
}

