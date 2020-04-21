"use strict";

;(function () {
    var cartoes = document.querySelectorAll(".cartao");

    var _loop = function _loop(j) {
        var cartao = cartoes[j];

        cartao.addEventListener("focusin", function () {
            cartao.classList.add("cartao--focado");
        });

        cartao.addEventListener("focusout", function () {
            cartao.classList.remove("cartao--focado");
        });

        cartao.addEventListener("change", function mudaCor(event) {
            var elementoSelecionado = event.target;
            var isRadioTipo = elementoSelecionado.classList.contains('opcoesDoCartao-radioTipo');
            if (isRadioTipo) {
                cartao.style.backgroundColor = elementoSelecionado.value;
            }
        });

        cartao.addEventListener("keydown", function deixaClicarComEnter(event) {
            if (event.target.classList.contains("opcoesDoCartao-opcao") && (event.key === 'Enter' || event.key === ' ')) {
                event.target.click();
            }
        });
        cartao.addEventListener('click', function (event) {
            var elementoSelecionado = event.target;
            if (elementoSelecionado.classList.contains('opcoesDoCartao-remove')) {
                cartao.classList.add("cartao--some");
                cartao.addEventListener("transitionend", function () {
                    cartao.remove();
                });
            }
        });
    };

    for (var j = 0; j < cartoes.length; j++) {
        _loop(j);
    }
})();