const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttons = document.getElementById("buttons");

// 2nd step
const stopSounds = () => {
  sounds.forEach(sound => {
    const currentSound = document.getElementById(sound)
    currentSound.pause();
    currentSound.currentTime = 0;
  });
}


// 1st step
sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.classList.add("btn")
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    stopSounds();
    document.getElementById(sound).play();
  })
  buttons.appendChild(btn)
});

