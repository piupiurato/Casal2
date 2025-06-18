const mensagens = [
  { texto: "Oi, meu amorzinho 💕", quem: "ela" },
  { texto: "Oi, minha princesa linda 😍", quem: "eu" },
  { texto: "Tava aqui pensando em você agora mesmo!", quem: "ela" },
  { texto: "Eu penso em você o tempo todo, sabia? ❤️", quem: "eu" },
  { texto: "Você é tudo pra mim, amorzinho...", quem: "ela" },
  { texto: "E você é o meu mundo todinho 🌍", quem: "eu" },
  { texto: "Tô morrendo de saudade de você 😢", quem: "ela" },
  { texto: "Calma, meu amor... logo logo a gente se vê 💋", quem: "eu" },
  { texto: "Te amo mais que tudo nessa vida!", quem: "ela" },
  { texto: "E eu te amo mais ainda, pra sempre 💖", quem: "eu" }
];


let indice = 0;
let musicaIniciada = false;

function mostrarMensagem() {
  const musica = document.getElementById("musicaFundo");

  if (!musicaIniciada) {
    musica.play();
    musicaIniciada = true;
  }

  if (indice < mensagens.length) {
    const chatBox = document.getElementById("chatBox");
    const msg = document.createElement("div");
    msg.classList.add("mensagem", mensagens[indice].quem);
    msg.textContent = mensagens[indice].texto;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
    indice++;
  } else {
    alert("Fim da conversa romântica 💘");
  }
}
