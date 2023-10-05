// Fetching a json file; most of the time you will be fetching an api or something else though

fetch('./movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data))

//   Fetching from an api

fetch('https://api.github.com/users/mrshawnmckee')
  .then((response) => response.json())
  .then((data) => (document.querySelector('h1').textContent = data.login)) //This replaces the h1 with my login name on the screen
