function loadJoke() {
    const jokeContainer = document.getElementById('jokeContainer');

    axios.get('https://v2.jokeapi.dev/joke/Any?lang=pt')
        .then(response => {
            const data = response.data;
            if (data.type === 'single') {
                jokeContainer.innerHTML = `<p>${data.joke}</p>`;
            } else if (data.type === 'twopart') {
                jokeContainer.innerHTML = `
                    <p>${data.setup}</p>
                    <p>${data.delivery}</p>
                `;
            }
        })
}

const loadJokeButton = document.getElementById('loadJoke'); 
    
loadJokeButton.addEventListener('click', () => {
    loadJoke(); 
});
