document.addEventListener("DOMContentLoaded", function () {

    function criptografarTexto(texto) {
        return texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }

    function descriptografarTexto(texto) {
        return texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }

    function exibirMensagem(mensagem) {
        const imagem = document.querySelector(".imagem_person");
        const mensagemDiv = document.querySelector(".mensagem");
        const mensagemTexto = mensagemDiv.querySelector("p");
        mensagemTexto.textContent = mensagem;
        imagem.style.display = "none"; 
        mensagemDiv.style.display = "block"; 
    }

    function copiarTexto() {
        const mensagemTexto = document.querySelector(".mensagem p").textContent;
        navigator.clipboard.writeText(mensagemTexto)
            .then(() => {
                alert("Texto copiado!");
            })
            .catch(() => {
                alert("Falha ao copiar o texto.");
            });
    }

    const botaoCriptografia = document.querySelector(".botao_criptografia");
    const botaoDescriptografia = document.querySelector(".botao_descriptografia");
    const botaoCopiar = document.querySelector(".botao_copiar");
    const textarea = document.querySelector(".texto");

    botaoCriptografia.addEventListener("click", function () {
        const textoOriginal = textarea.value;
        const textoCriptografado = criptografarTexto(textoOriginal);
        exibirMensagem(textoCriptografado);
    });

    botaoDescriptografia.addEventListener("click", function () {
        const textoCriptografado = textarea.value;
        const textoDescriptografado = descriptografarTexto(textoCriptografado);
        exibirMensagem(textoDescriptografado);
    });

    botaoCopiar.addEventListener("click", copiarTexto);
});