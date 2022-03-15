const $jokeContainer = document.querySelector('#joke-container');
const $flashImage = document.querySelector('#flash-image');
const $jokeForm = document.querySelector('#joke-form');

const jokester = {
  tellJoke: function (setup, punchline) {
    $jokeForm.classList.add('d-none');
    const this_ = this;
    const $introStatement = this_.renderJokePhrase('Hey Flash...');
    this_.appendJokePhrase($introStatement);
    setTimeout(function () {
      const $jokeSetup = this_.renderJokePhrase(setup);
      this_.appendJokePhrase($jokeSetup);
      setTimeout(function () {
        const $jokePunchline = this_.renderJokePhrase(punchline);
        this_.appendJokePhrase($jokePunchline);
        flash.laugh();
      }, 2000);
    }, 2000);
  },
  renderJokePhrase: phrase => {
    const $phrase = document.createElement('h4');
    $phrase.textContent = phrase;
    $phrase.className = 'fade-in text-center';
    return $phrase;
  },
  appendJokePhrase: $phrase => {
    $jokeContainer.append($phrase);
  }
};

const flash = {
  laughingUrl: 'images/flash-laugh.gif',
  laugh: function () {
    const this_ = this;
    setTimeout(function () {
      $flashImage.setAttribute('src', this_.laughingUrl);
    }, 3000);
  }
};

function handleJokeSubmission(event) {
  event.preventDefault();
  const { setup, punchline } = event.target.elements;
  jokester.tellJoke(setup.value, punchline.value);
}

$jokeForm.addEventListener('submit', handleJokeSubmission);
