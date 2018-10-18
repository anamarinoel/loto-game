var generateNewNumberButton = document.getElementById("generateNewNumber");

generateNewNumberButton.addEventListener("click", function() {
    var fields = document.getElementsByClassName("field");
    var winingNumbers = getNumbers();
    
    for ( var i=0; i< fields.length; i++ ) {
        fields[i].innerHTML = winingNumbers[i];
    };
});

/**
 * Generates random numbers for LOTO game.
 * 
 * @param {Number} numberQuantity 
 * @param {Number} maxNumber 
 * 
 * @returns {Array}
 */
function getNumbers(numberQuantity = 7, maxNumber = 39) {
    var winingNumbers = [];

    while (winingNumbers.length < numberQuantity) {
        var luckyNumber = getRandomNumber(maxNumber);

        if (winingNumbers.indexOf(luckyNumber) == '-1') {
            winingNumbers.push(luckyNumber);
        }
    }

    return winingNumbers;
}

/**
 * Generates random number from 1 to maxNumber value.
 * 
 * @param {Number} maxNumber 
 * 
 * @returns {Number}
 */
function getRandomNumber(maxNumber) {
    return Math.ceil( Math.random() * maxNumber );
}