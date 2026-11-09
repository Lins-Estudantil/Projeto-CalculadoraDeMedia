const campos = document.querySelectorAll(".campos input");
const btnCalcular = document.getElementById("btn-calcular");
const resultado = document.getElementById("resultado");

const MEDIA_MINIMA = 7;

function mostrarResultado(classe, html) {
    resultado.className = "resultado " + classe;
    resultado.innerHTML = html;
}

function calcularMedia() {
    let soma = 0;

    for (const campo of campos) {
        // O valor de um input é sempre texto. Number() converte para número.
        const nota = Number(campo.value);

        if (campo.value === "" || isNaN(nota) || nota < 0 || nota > 10) {
            mostrarResultado("erro", "Preencha as 4 notas com valores de 0 a 10.");
            return;
        }

        soma += nota;
    }

    const media = soma / campos.length;

    if (media >= MEDIA_MINIMA) {
        mostrarResultado("aprovado", "Sua média é <strong>" + media.toFixed(1) + "</strong>Aprovado! 🎉");
    } else {
        mostrarResultado("recuperacao", "Sua média é <strong>" + media.toFixed(1) + "</strong>Você ficou de recuperação.");
    }
}

btnCalcular.addEventListener("click", calcularMedia);

// Permite calcular apertando Enter dentro de qualquer campo
campos.forEach(function (campo) {
    campo.addEventListener("keydown", function (evento) {
        if (evento.key === "Enter") {
            calcularMedia();
        }
    });
});
