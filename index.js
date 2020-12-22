let textInput = document.getElementById('textInput');
let submitBtn = document.getElementById('submitBtn');

let codeString = '';
let matchConfirmation = Boolean;

submitBtn.onclick = (e) => {
    e.preventDefault();
    codeString = textInput.value;
    findMatch();
}

let openBrackets = [];
let closedBrackets = [];

let findOpenBrackets = (item, index) => {
    if (item === '{') {
        openBrackets.push(index);
    } 
    if (item === '}') {
        closedBrackets.push(index);
    } 

};

let findClosedBrackets = (item, index) => {
    if (codeString.includes('}', item)) {
        matchConfirmation = true;
    } else {
        matchConfirmation = false;
    }
};

let findMatch = () => {
    codeString.split('').forEach(findOpenBrackets);
    
    if (openBrackets.length !== closedBrackets.length) {
        matchConfirmation = false;
    } else if (!codeString.includes('{') && !codeString.includes('}')) {
        matchConfirmation = true;
    } else {
        openBrackets.forEach(findClosedBrackets);
    };

    console.log("Match Confirmed? ", matchConfirmation);
}
