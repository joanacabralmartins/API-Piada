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
        .catch(error => {
            console.error('Ocorreu um erro ao carregar a piada:', error);
            jokeContainer.innerHTML = '<p>Erro ao carregar piada.</p>';
        });

    const loadReactionButton = document.getElementById('loadReaction');
    loadReactionButton.style.display = 'block';
}

function loadReaction() {
    const reactionContainer = document.getElementById('reactionContainer');

    axios.get('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            const imageUrl = response.data.message;
            const dogImage = document.createElement('img');
            dogImage.src = imageUrl;
            reactionContainer.innerHTML = '';
            reactionContainer.appendChild(dogImage);
        })
        .catch(error => {
            console.error('Ocorreu um erro ao carregar a imagem:', error);
            reactionContainer.innerHTML = '<p>Ocorreu um erro ao carregar a imagem.</p>';
        });
}

const loadJokeButton = document.getElementById('loadJoke'); 
const loadReactionButton = document.getElementById('loadReaction');
    
loadJokeButton.addEventListener('click', () => {
    loadJoke(); 
});

loadReactionButton.addEventListener('click', () => {
    loadReaction(); 
});
