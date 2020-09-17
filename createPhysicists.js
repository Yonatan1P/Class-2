'use stric';

var physicistArray = [];
var counter = 0;
var playerScore = 0;

persistGameState();
console.log(counter, playerScore);
// Physicist Constructor Function to create the physicist objects
function CreatePhysicist (name, imagePath) {
    this.name = name;
    this.imagePath = imagePath;
    physicistArray.push(this);
};

CreatePhysicist.storedData = [];

//all the new instances of createPhysicist objects, there are 13
var albertEinstein = new CreatePhysicist ('Albert Einstein', 'physicist-images/albertEinstein.jpg');
var marieCure = new CreatePhysicist ('Marie Curie', 'physicist-images/marieCurie.jpg');
var maxPlanck = new CreatePhysicist ('Max Planck', 'physicist-images/maxPlanck.jpg');
var neilsBohr = new CreatePhysicist ('Neils Bohr', 'physicist-images/nielsBohr.jpg');
var nikolaTesla = new CreatePhysicist ('Nikola Tesla', 'physicist-images/nikolaTesla.jpg');
var isaacNewton = new CreatePhysicist ('Isaac Newton', 'physicist-images/isaacNewton.jpg');
var erwinSchrodinger = new CreatePhysicist ('Erwin Schrodinger', 'physicist-images/erwinSchrodinger.jpg');
var stephenHawking = new CreatePhysicist ('Stephen Hawking', 'physicist-images/stephenHawking.jpg');
var wernerHeisenberg = new CreatePhysicist ('Werner Heisenberg', 'physicist-images/wernerHeisenberg.jpg');
var michaelFaraday = new CreatePhysicist ('Michael Faraday', 'physicist-images/michaelFaraday.jpg');
var paulDirac = new CreatePhysicist ('Paul Dirac', 'physicist-images/paulDirac.jpg');
var jamesMaxwell = new CreatePhysicist ('James Maxwell', 'physicist-images/jamesMaxwell.jpg');
var juliusOppenheimer = new CreatePhysicist ('Julius Oppenheimer', 'physicist-images/juliusOppenheimer.jpg');

//function to show the next physicist when answer is submitted

function showPhysicist() {
    
    // if (counter >= 1) {
    //     var nextPic = document.getElementById(`${physicistArray[counter-1].name}`);
    //     nextPic.remove();
    // }
    
    for(let i = 0; i < physicistArray.length; i++) {
        if (counter === i) {
            var thePhysicist = document.getElementById('displayPhysicist');
            var physicistPic = document.createElement('img');
            physicistPic.id = physicistArray[i].name;
            physicistPic.src = physicistArray[i].imagePath;
            thePhysicist.appendChild(physicistPic);
            
        }
    }
}

//this is the first instance of physicist that appears when the game page is loaded
showPhysicist(); 

//increment the player score every time the correct answer matches the users answer

//this adds an event listener to the element labelled with the id submit

var submission = document.getElementById('question');

submission.addEventListener('submit', clickHandler);

function clickHandler (event) {
    event.preventDefault();
    var answer = document.getElementById('answer')
    var thePhysicist = document.getElementById(`${physicistArray[counter].name}`)

    if (answer.value === thePhysicist.id) {
        playerScore++
    }

    console.log(playerScore);
    counter++;

    storeDataLocally();

    if(counter === physicistArray.length) {
        finalScore();
    }
    clearContent();
    showPhysicist();
}

function finalScore() {
    
    var gameArea = document.getElementById('game');
    var gameInterface = document.getElementById('interface');
    gameInterface.remove();

    var finalImage = document.createElement('img');
    finalImage.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Einstein_tongue.jpg/220px-Einstein_tongue.jpg';
    
    var score = document.createElement('p');
    score.textContent = `Your Score is: ${playerScore}`
    score.id = 'finalScore';
    gameArea.appendChild(score);
    gameArea.appendChild(finalImage);

}

function persistGameState() {
    if (localStorage.getItem('counter')) {
        var counterParsed = localStorage.getItem('counter');
        counter = JSON.parse(counterParsed);
    }

    if (localStorage.getItem('score')) {
        var scoreParsed = localStorage.getItem('score');
        playerScore = JSON.parse(scoreParsed);
    }
}

function storeDataLocally() {
    var counterStored = JSON.stringify(counter);
    var scoreStored = JSON.stringify(playerScore);

    localStorage.setItem('counter', counterStored);
    localStorage.setItem('score', scoreStored);
}

function clearContent() {
    var thePhysicist = document.getElementById('displayPhysicist');
    thePhysicist.innerHTML = '';
}

var reset = document.getElementById('reset');

reset.addEventListener('click', restartGame);

function restartGame (event) {
    counter = 0;
    playerScore = 0;
    storeDataLocally();
    location.reload();
}