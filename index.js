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





















// let textInput = document.getElementById('textInput');
// let submitBtn = document.getElementById('submitBtn');


// let findBracketMatch = (codeString) => {

//     let matchConfirmation = false;
//     let openBrackets = [];
//     let closedBrackets = [];

//     codeString.split('').forEach(
//         function findOpenBrackets(item, index) {
//             if (item === '{') {
//                 openBrackets.push(index);
//             }
//             if (item === '}') {
//                 closedBrackets.push(index);
//             }

//         }
//     );

//     if (openBrackets.length !== closedBrackets.length) {
//         return;
//     } else if (!codeString.includes('{') && !codeString.includes('}')) {
//         matchConfirmation = true;
//     } else {
//         openBrackets.forEach(
//             function findClosedBrackets(item, index) {
//                 if (codeString.includes('}', item)) {
//                     matchConfirmation = true;
//                 } else {
//                     matchConfirmation = false;
//                 }
//             }
//         );
//     };

//     console.log("Match Confirmed? ", matchConfirmation);
// };


// submitBtn.onclick = (e) => {
//     e.preventDefault();
//     let codeString = textInput.value;
//     findBracketMatch(codeString);
// }
