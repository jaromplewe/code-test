let textInput = document.getElementById('textInput');
let submitBtn = document.getElementById('submitBtn');

let findBracketMatch = (codeString) => {
    
    let matchConfirmation = false;
    let bracketCounter = 0;
    let codeStringArr = codeString.split('')

    for (let i = 0; i < codeStringArr.length; i++) {
        if (codeStringArr[i] == '{') {
            bracketCounter += 1;
        }
        if (codeStringArr[i] == '}') {
            bracketCounter -= 1;
        }
        if (bracketCounter < 0) {
            break;
        }
    }

    if (bracketCounter === 0) {
        matchConfirmation = true;
    }

    console.log("Match Confirmed? ", matchConfirmation);
};

submitBtn.onclick = (e) => {
    e.preventDefault();
    let codeString = textInput.value;
    findBracketMatch(codeString);
}