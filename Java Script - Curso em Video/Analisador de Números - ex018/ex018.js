let num = document.getElementById('n1');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#msg');
let valores = [];

function add() {
    if (num.value.length == 0) {
        window.alert('[ERRO] Preencha o campo em branco para continuar!');
    } else if (num.value < 1 && num.value > 100) {
        window.alert('[ERRO] Verique os dados preenchidos e tente novamente!');
    } else {
        for (let i = 0; i <= valores.length; i++) {
            valores.push();
        }
    }
}