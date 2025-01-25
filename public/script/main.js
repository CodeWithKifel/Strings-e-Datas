// Questão 1 - Inverter os caracteres da frase
document.querySelector("#q1-btn").addEventListener("click", () => {
  const frase = document.querySelector("#q1-input").value;
  const invertido = frase.split("").reverse().join("");
  document.querySelector("#q1-result").textContent = invertido;
});

// Questão 2 - Marcar as vogais em negrito
document.querySelector("#q2-btn").addEventListener("click", () => {
  let frase = document.querySelector("#q2-input").value;
  frase = frase.replace(
    /[aeiouAEIOU]/g,
    (match) => `<strong>${match}</strong>`
  );
  document.querySelector("#q2-result").innerHTML = frase;
});

// Questão 3 - Contar as palavras e suas ocorrências
document.querySelector("#q3-btn").addEventListener("click", () => {
  const texto = document.querySelector("#q3-input").value;
  const palavras = texto.split(/\s+/);
  const ocorrencias = {};

  palavras.forEach((palavra) => {
    palavra = palavra.toLowerCase();
    ocorrencias[palavra] = (ocorrencias[palavra] || 0) + 1;
  });

  const tabela = document.querySelector("#q3-result");
  tabela.innerHTML = `<tr><th>Palavra</th><th>Ocorrências</th></tr>`;
  for (const [palavra, qtd] of Object.entries(ocorrencias)) {
    tabela.innerHTML += `<tr><td>${palavra}</td><td>${qtd}</td></tr>`;
  }
});

// Questão 4 - Palavra de maior ocorrência
document.querySelector("#q4-btn").addEventListener("click", () => {
  const texto = document.querySelector("#q4-input").value;
  const palavras = texto.split(/\s+/);
  const ocorrencias = {};

  palavras.forEach((palavra) => {
    palavra = palavra.toLowerCase();
    ocorrencias[palavra] = (ocorrencias[palavra] || 0) + 1;
  });

  let maiorPalavra = "";
  let maiorQtd = 0;
  for (const [palavra, qtd] of Object.entries(ocorrencias)) {
    if (qtd > maiorQtd) {
      maiorQtd = qtd;
      maiorPalavra = palavra;
    }
  }

  document.querySelector(
    "#q4-result"
  ).textContent = `A palavra com maior ocorrência é "${maiorPalavra}" com ${maiorQtd} ocorrências.`;
});

// Questão 5 - Substituir palavras no texto
document.querySelector("#q5-btn").addEventListener("click", () => {
  const procurar = document.querySelector("#q5-procurar").value;
  const substituir = document.querySelector("#q5-substituir").value;
  let texto = document.querySelector("#q5-texto").value;

  texto = texto.replace(new RegExp(procurar, "g"), substituir);
  document.querySelector("#q5-result").textContent = texto;
});

// Questão 6 - Dias de Vida
document.querySelector("#q6-btn").addEventListener("click", () => {
  const nascimento = new Date(document.querySelector("#q6-nascimento").value);
  const hoje = new Date();
  const diff = hoje - nascimento;
  const diasDeVida = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.querySelector(
    "#q6-result"
  ).textContent = `Você tem ${diasDeVida} dias de vida.`;
});

// Questão 7 - Data por Extenso
document.querySelector("#q7-btn").addEventListener("click", () => {
  const data = document.querySelector("#q7-nascimento").value;
  if (!data) {
    alert("Por favor, insira uma data válida.");
    return;
  }

  const [ano, mes, dia] = data.split("-");
  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  const resultado = `${dia} de ${meses[parseInt(mes) - 1]} de ${ano}`;
  document.querySelector("#q7-result").textContent = resultado;
});

// Questão 8 - Distância entre Datas (em semanas)
document.querySelector("#q8-btn").addEventListener("click", () => {
  const data1 = document.querySelector("#q8-data1").value;
  const data2 = document.querySelector("#q8-data2").value;

  if (!data1 || !data2) {
    alert("Por favor, insira ambas as datas.");
    return;
  }

  const [ano1, mes1, dia1] = data1.split("-").map((num) => parseInt(num, 10));
  const [ano2, mes2, dia2] = data2.split("-").map((num) => parseInt(num, 10));

  const date1 = new Date(ano1, mes1 - 1, dia1);
  const date2 = new Date(ano2, mes2 - 1, dia2);

  const diff = Math.abs(date2 - date1);
  const semanas = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));

  document.querySelector(
    "#q8-result"
  ).textContent = `${semanas} semanas de diferença entre as datas.`;
});

// Questão 9 - Classificar Senha
document.querySelector("#q9-senha").addEventListener("input", () => {
  const senha = document.querySelector("#q9-senha").value;
  const resultado = document.querySelector("#q9-result");

  if (
    /[a-z]/.test(senha) &&
    /[A-Z]/.test(senha) &&
    /\d/.test(senha) &&
    /[!@#$%^&*(),.?":{}|<>]/.test(senha)
  ) {
    resultado.textContent = "Senha forte";
    resultado.style.color = "green";
  } else if (/[a-z]/.test(senha) && /[A-Z]/.test(senha) && /\d/.test(senha)) {
    resultado.textContent = "Senha moderada";
    resultado.style.color = "orange";
  } else if (/[a-zA-Z]/.test(senha)) {
    resultado.textContent = "Senha fraca";
    resultado.style.color = "red";
  } else {
    resultado.textContent = "Senha muito fraca";
    resultado.style.color = "gray";
  }
});

// Questão 10 - Codificar Frase (TENIS/POLAR)
document.querySelector("#q10-btn").addEventListener("click", () => {
  const frase = document.querySelector("#q10-frase").value;
  const codificada = frase
    .split("")
    .map((letra) => {
      switch (letra.toUpperCase()) {
        case "T":
          return letra === "T" ? "P" : "p";
        case "P":
          return letra === "P" ? "T" : "t";
        case "E":
          return letra === "E" ? "O" : "o";
        case "O":
          return letra === "O" ? "E" : "e";
        case "N":
          return letra === "N" ? "L" : "l";
        case "L":
          return letra === "L" ? "N" : "n";
        case "I":
          return letra === "I" ? "A" : "a";
        case "A":
          return letra === "A" ? "I" : "i";
        case "S":
          return letra === "S" ? "R" : "r";
        case "R":
          return letra === "R" ? "S" : "s";
        default:
          return letra;
      }
    })
    .join("");
  document.querySelector(
    "#q10-result"
  ).textContent = `Frase codificada: ${codificada}`;
});
