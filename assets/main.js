// DOM Adventure Game

// They won the RNG Game
const rngWin = function() {
    
    resetScene();
    
    // Displayed Text
    const paragraphs = ["Looks like you picked the right number!", "Hit spacebar to continue."];
        for (let line of paragraphs) {
            paragraph = document.createElement("p");
            paragraph.textContent = line;
            sceneDiv.appendChild(paragraph);
        };
    
    const continueKey = function (event) {
            
        if (event.key == ' ') {
            window.removeEventListener('keydown', continueKey)
            return goldRoom();
        } else {}
    };  
    
    window.addEventListener("keydown", continueKey);
}

// They lost the RNG Game
const rngLose = function() {
    
    resetScene();
    
    // Displayed Text
    const paragraphs = ["Looks like you picked the wrong number...", "Hit spacebar to continue."];
        for (let line of paragraphs) {
            paragraph = document.createElement("p");
            paragraph.textContent = line;
            sceneDiv.appendChild(paragraph);
        };
    
    const continueKey = function (event) {
            
        if (event.key == ' ') {
            window.removeEventListener('keydown', continueKey)
            return siren();
        } else {}
    };  
    
    window.addEventListener("keydown", continueKey);
};

//Create an RNG game! If they fail, they will go to a further away room from the finish.
const numGuess = function() {
    
    resetScene();
    
    // Displayed Text
    const paragraphs = ["May the RNG gods be in your favor...", "\nPick a number, 1 or 2?"];
        for (let line of paragraphs) {
            paragraph = document.createElement("p");
            paragraph.textContent = line;
            sceneDiv.appendChild(paragraph);
        };
    
  //Create a RNG and prompt the user to pick one or two.
  let realNum = Math.round(Math.random() * 2);
    
    const checkContent = function() {
        let answer = rngInput.value;
            if (answer == realNum) {
                return rngWin();
            } else {
                return rngLose();
            }
    };
    
    let rngForm = document.createElement('form')
    let rngInput = document.createElement('input')
    let rngSubmit = document.createElement('input')
    
    rngInput.setAttribute("type", "text");
    rngSubmit.setAttribute("type", "submit");
    
    buttonDiv.appendChild(rngForm);
    rngForm.appendChild(rngInput);
    rngForm.appendChild(rngSubmit);
    
    rngSubmit.addEventListener('click', checkContent);
};

// Bear Death Scene
const bearDeath = function() {
    
    resetScene();
    
    // Displayed Text
    const paragraphs = ["Welp, that wasn't a good decision.", "The bear charges at you...", "Hit spacebar to continue."];
        for (let line of paragraphs) {
            paragraph = document.createElement("p");
            paragraph.textContent = line;
            sceneDiv.appendChild(paragraph);
        };
    
    const continueKey = function (event) {
            
        if (event.key == ' ') {
            window.removeEventListener('keydown', continueKey)
            return death();
        } else {}
    };  
    
    window.addEventListener("keydown", continueKey);
};

// Bear Scene
const bearRoom = function() {
    
    resetScene();
    
    // Displayed Text
    const paragraphs = ["\nThere is a bear in here.", "It's sitting in front of another door eating from a pot of honey.", "\nHow are you going to move the bear?"];
        for (let line of paragraphs) {
            paragraph = document.createElement("p");
            paragraph.textContent = line;
            sceneDiv.appendChild(paragraph);
        };
    
    const checkContent = function() {
        let answer = bearInput.value;
            if (answer == 'taunt bear') {
                return numGuess();
            } else {
                return bearDeath();
            }
    };

  // Checking to see how they deal with the bear

    let bearForm = document.createElement('form')
    let bearInput = document.createElement('input')
    let bearSubmit = document.createElement('input')
    
    bearInput.setAttribute("type", "text");
    bearSubmit.setAttribute("type", "submit");
    
    buttonDiv.appendChild(bearForm);
    bearForm.appendChild(bearInput);
    bearForm.appendChild(bearSubmit);
    
    bearSubmit.addEventListener('click', checkContent);
    
};

// pitTrap Scene
const pitTrap = function() {
    
    resetScene();
    
    // Displayed Text
    const paragraphs = ["\nThe door swings open to utter darkness.", "You step through, but your foot can't find the floor.", "It's a big pit. And you're falling.", "\n\tAAAAAAAAHHHHHHHHHhhhhhhhhhhhh.....\n", "Hit spacebar to continue"];
        for (let line of paragraphs) {
            paragraph = document.createElement("p");
            paragraph.textContent = line;
            sceneDiv.appendChild(paragraph);
        };
    
    const continueKey = function (event) {
            
        if (event.key == ' ') {
            window.removeEventListener('keydown', continueKey)
            return death();
        } else {}
    };  
    
    window.addEventListener("keydown", continueKey);
};

// First Scene 
const start = function() {
    
    resetScene();
    
    // Displayed Text
    const paragraphs = ['\nYou awake in a dimly lit room.', 'There are doors to your left and right.', '\nWhich door do you pick?\n'];
        for (let line of paragraphs) {
            paragraph = document.createElement("p");
            paragraph.textContent = line;
            sceneDiv.appendChild(paragraph);
        };
    
    // Buttons for choosing a door
    let buttons = ['Left', 'Right'];
        for (let button of buttons) {
            const createButton = document.createElement('button');
            createButton.className = "nav-button";
            createButton.textContent = button;
            buttonDiv.appendChild(createButton);
            createButton.addEventListener("click", event => {
                if (button == 'Left') {
                    window.removeEventListener('keydown', doorKeys)
                    return bearRoom();
                } else if (button == 'Right') {
                    window.removeEventListener('keydown', doorKeys)
                    return pitTrap();
                } else {
                    console.log('broke')
                }
            });
        };
    
    // Key Listener for choosing a door
        
    const doorKeys = function (event) {
            
        switch(event.key) {
                case 'ArrowLeft':
                    window.removeEventListener('keydown', doorKeys)
                    return bearRoom();
                    break;

                case 'ArrowRight':
                    window.removeEventListener('keydown', doorKeys)
                    return pitTrap();

                default:
                    console.log('wrong key');
                    break;
        };
    };  
    
    window.addEventListener("keydown", doorKeys);
};

// If the player dies, show this scene
const playAgain = function() {
    
    resetScene();
    
    let playAgainButton = document.createElement("button");
        buttonDiv.appendChild(playAgainButton)
        playAgainButton.textContent = "Click here to play again!";
        playAgainButton.addEventListener("click", event => {
         start();
    });
};

// Death scene
const death = function() {
    
    resetScene();
    
    // Displayed Text
    let paragraphs = ['You died...', "Hit spacebar to continue"];
        for (let line of paragraphs) {
            paragraph = document.createElement("p");
            paragraph.textContent = line;
            sceneDiv.appendChild(paragraph);
        };
    
    const continueKey = function (event) {
            
        if (event.key == ' ') {
            return playAgain();
        } else {}
    };  
    
    window.addEventListener("keydown", continueKey);
    
};

const resetScene = function() {
    sceneDiv.innerHTML = ''
    buttonDiv.innerHTML = ''
}

// Starting Page
const sceneDiv = document.querySelector("#sceneDiv");
const buttonDiv = document.querySelector("#buttonDiv")

resetScene();

let button = document.createElement("button");
sceneDiv.appendChild(button)
button.textContent = "Start Game";
button.addEventListener("click", event => {
    start();
});