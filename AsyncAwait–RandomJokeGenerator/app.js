const setupDiv = document.getElementById('setup');
const newJokeBtn = document.getElementById('newJokeBtn');

newJokeBtn.addEventListener('click', getJoke);

async function getJoke() {
  const url = 'http://api.icndb.com/jokes/random';

  const jokePromise = await fetch(url);
  const joke = await jokePromise.json();

  setupDiv.innerHTML = joke.value.joke;
}

getJoke();
