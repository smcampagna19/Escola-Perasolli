
function responder() {
  var input = document.getElementById("pergunta");
  var mensagens = document.getElementById("mensagens");
  var texto = input.value.trim();
  var textoMinusculo = texto.toLowerCase();
  var resposta = "";

  if (texto === "") {
    return;
  }

  var msgUsuario = document.createElement("div");
  msgUsuario.className = "msg usuario";
  msgUsuario.textContent = texto;
  mensagens.appendChild(msgUsuario);

  if (textoMinusculo.includes("curso")) {
    resposta = "A Escola Perasoli oferece os cursos de Informática Básica, Administração, Desenvolvimento de Sistemas e Enfermagem.";
  } else if (textoMinusculo.includes("horário") || textoMinusculo.includes("horario")) {
    resposta = "O horário de atendimento da escola é de segunda a sexta, das 7h às 17h.";
  } else if (
    textoMinusculo.includes("contato") ||
    textoMinusculo.includes("telefone") ||
    textoMinusculo.includes("email") ||
    textoMinusculo.includes("e-mail")
  ) {
    resposta = "Você pode entrar em contato pelo telefone (14) 4000-1234 ou pelo e-mail contato@escolaperasoli.com.";
  } else if (
    textoMinusculo.includes("escola") ||
    textoMinusculo.includes("perasoli") ||
    textoMinusculo.includes("perasolli")
  ) {
    resposta = "A Escola Perasoli oferece cursos de Informática Básica, Administração, Desenvolvimento de Sistemas e Enfermagem. Nosso objetivo é proporcionar educação de qualidade e preparar os alunos para o mercado de trabalho.";
  } else if (
    textoMinusculo.includes("oi") ||
    textoMinusculo.includes("olá") ||
    textoMinusculo.includes("ola")
  ) {
    resposta = "Olá! Como posso ajudar você hoje?";
  } else {
    resposta = "Desculpe, eu só respondo perguntas simples sobre cursos, horários, contato e escola.";
  }

  var msgIa = document.createElement("div");
  msgIa.className = "msg ia";
  msgIa.textContent = resposta;
  mensagens.appendChild(msgIa);

  mensagens.scrollTop = mensagens.scrollHeight;
  input.value = "";
  input.focus();
}

document.getElementById("pergunta").addEventListener("keypress", function(evento) {
  if (evento.key === "Enter") {
    responder();
  }
});
