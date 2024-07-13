const joke1 = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

const generateJoke = async () => {
  const config = {
    headers: { Accept: "application/json" },
  };
  const res = await fetch("https://icanhazdadjoke.com/", config);
  const data = await res.json();
  joke1.innerHTML = data.joke;

  // Fetching with .then()
  //   fetch("https://icanhazdadjoke.com/", config)
  //     .then((res) => res.json())
  //     .then((data) => (jokeEl.innerHTML = data.joke));
};

generateJoke();

jokeBtn.addEventListener("click", () => generateJoke());
