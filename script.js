`use strict`;

const emojiArray = ['🐮', '🐯', '🐼', '🐨', '🐵', '🐷', '🐸', '🐶', '🦁', '🐰', '🐤', '🐴', '🐺', '🐠'];

let emojiInputSubmit = document.querySelector('.submit');
let inputElement = document.querySelector('#emoji-input');


//Auto enter random Emoji to input
function getRandomEmoji(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

inputElement.value = getRandomEmoji(emojiArray);


//Add to Array
let typicalArray = [];

function addToTypicalArray() {
    let 
}