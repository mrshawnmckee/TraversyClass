const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn')

const generateJoke = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                jokeEl.innerHTML = JSON.parse(this.responseText).value
            } else {
                jokeEl.innerHTML = "Something went wrong"
            }
        }
    }
    xhr.send();
}



jokeBtn.addEventListener('click', generateJoke);
// If you want the page to open with a prepopulated joke instead of the loading word: 
document.addEventListener('DOMContentLoaded', generateJoke)
