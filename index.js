let textInput = document.getElementById('textInput');
let submitBtn = document.getElementById('submitBtn');


let findBracketMatch = (codeString) => {

    let matchConfirmation = Boolean;
    let openBrackets = [];
    let closedBrackets = [];

    codeString.split('').forEach(
        function findOpenBrackets(item, index) {
            if (item === '{') {
                openBrackets.push(index);
            }
            if (item === '}') {
                closedBrackets.push(index);
            }

        }
    );

    if (openBrackets.length !== closedBrackets.length) {
        matchConfirmation = false;
    } else if (!codeString.includes('{') && !codeString.includes('}')) {
        matchConfirmation = true;
    } else {
        openBrackets.forEach(
            function findClosedBrackets(item, index) {
                if (codeString.includes('}', item)) {
                    matchConfirmation = true;
                } else {
                    matchConfirmation = false;
                }
            }
        );
    };

    console.log("Match Confirmed? ", matchConfirmation);
};


submitBtn.onclick = (e) => {
    e.preventDefault();
    let codeString = textInput.value;
    findBracketMatch(codeString);
}
