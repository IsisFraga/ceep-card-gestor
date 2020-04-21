'use strict';

var btn = document.querySelector('#btnMudaLayout');

function mudaTexto() {
    if (btn.textContent == 'Blocos') {
        btn.textContent = 'Linhas';
    } else {
        btn.textContent = 'Blocos';
    }
}

var mural = document.querySelector('.mural');
function mudaLayout() {
    mural.classList.toggle('mural--linha');
}

btn.addEventListener("click", mudaTexto);
btn.addEventListener("click", mudaLayout);
btn.classList.remove('no-js');