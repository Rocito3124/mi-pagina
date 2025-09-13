const questions = [
  "¿Quieres empezar?",
  "¿Te gusta la música?",
  "¿Prefieres imágenes o videos?",
  "¿Te gustan los colores vivos?",
  "¿Quieres continuar?",
];

const backgrounds = [
  "assets/images/fondo1.jpg",
  "assets/videos/fondo2.mp4",
  "assets/images/fondo3.jpg",
  "assets/videos/fondo4.mp4",
  "assets/images/fondo5.jpg",
];

let current = 0;

const questionText = document.getElementById("question-text");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const bgContainer = document.getElementById("background-container");

function updatePanel() {
  if (current >= questions.length) {
    questionText.innerText = "¡Fin!";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    return;
  }

  questionText.innerText = questions[current];

  const bg = backgrounds[current];
  if (bg.endsWith(".mp4")) {
    bgContainer.innerHTML = `<video autoplay muted loop src="${bg}" style="width:100%;height:100%;object-fit:cover;"></video>`;
  } else {
    bgContainer.innerHTML = "";
    bgContainer.style.backgroundImage = `url(${bg})`;
  }

  current++;
}

yesBtn.addEventListener("click", updatePanel);
noBtn.addEventListener("click", updatePanel);
