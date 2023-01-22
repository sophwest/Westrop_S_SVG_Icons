console.log('JavaScript is running!');

const pokeBall = document.querySelector('#pokeball');
const greatBall = document.querySelector('#greatball');
const ultraBall = document.querySelector('#ultraball');
const masterBall = document.querySelector('#masterball');
const diveBall = document.querySelector('#diveball');
const dreamBall = document.querySelector('#dreamball');
const duskBall = document.querySelector('#duskball');
const friendBall = document.querySelector('#friendball');
const premierBall = document.querySelector('#premierball');
const quickBall = document.querySelector('#quickball');

function logThisId() {
    console.log('I selected this kind of Pokeball!', this.id);
}

pokeBall.addEventListener('click', logThisId);
greatBall.addEventListener('click', logThisId);
ultraBall.addEventListener('click', logThisId);
masterBall.addEventListener('click', logThisId);
diveBall.addEventListener('click', logThisId);
dreamBall.addEventListener('click', logThisId);
duskBall.addEventListener('click', logThisId);
friendBall.addEventListener('click', logThisId);
premierBall.addEventListener('click', logThisId);
quickBall.addEventListener('click', logThisId);