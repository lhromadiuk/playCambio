
const client = new Colyseus.Client('wss://playcambio.de');
const usernameInput = document.getElementById('username');
const gameCodeInput = document.getElementById('gameCode');
const startNewGameButton = document.getElementById('startNewGame');
const joinGameButton = document.getElementById('joinGame');
const viewRulesButton = document.getElementById('viewRules');
const notificationBar = document.getElementById('notificationBar');

startNewGameButton.addEventListener('click', async () => {
    try {
        const username = usernameInput.value;
        if (!username) {
            showNotification('Enter user name!');
            return;
        }
        const room = await client.create('cambio_room', { username:username });
       // const idkw  =await client.join("cambio_room", { username: username }).then(room => {})
        console.log('Joined new game:', room);
        window.open('room.html', '_blank')

    } catch (error) {
        console.error('Failed to create room:', error);
        alert('Failed to start a new game.');
    }
});


joinGameButton.addEventListener('click', async () => {
    
        const gameCode = gameCodeInput.value;
        const username = usernameInput.value;
        if (!username) {
            showNotification('Enter user name!');
            return;
        }
        if (!gameCode) {
            showNotification('Enter a game code!');
            return;
        }
        client.joinById(gameCode, { username:username })
    .then(room => {
        console.log("Successfully joined room", room.id);
        
    })
    .catch(error => {
        showNotification('Wrong code!');
        
    });
        


});


viewRulesButton.addEventListener('click', () => {
    showNotification('Rules will be added later :) ');
});

function showNotification(message) {
    notificationBar.innerText = message;
    notificationBar.style.opacity = '1';
    notificationBar.style.display = 'block';

    setTimeout(() => {
        notificationBar.style.opacity = '0';
        setTimeout(() => notificationBar.style.display = 'none', 500)

    }, 2500);
}

