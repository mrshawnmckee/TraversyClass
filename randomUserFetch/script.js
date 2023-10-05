const generateBtn = document.getElementById('generate')


function generateRandomUser() {
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((data) => {
        // document.getElementById('space-y-3').firstChild.firstChild.textContent = data.name.first
      })
}

generateBtn.addEventListener('click', generateRandomUser)
