/**
 * Created by sangmin on 4/2/15.
 */
var won = 0, lost = 0;

for (var i=0;i<1000; i++) {

    var curtains = [1, 2, 3];
    var winningCurtain = Math.floor(Math.random()*2+1); // Determine winning curtain
    var selectedCurtain = Math.floor(Math.random()*2+1); // Randomly select a curtain

    //Show one of the losing curtain
    var losingCurtains = [];
    for (var j=0; j<curtains.length; j++)
        if (curtains[j] != winningCurtain) losingCurtains.push(curtains[j]);

    //Remaining curtains
    var remainingCurtains = [];
    remainingCurtains.push(winningCurtain);

    //If the selected curtain is the first losing curtain, consider second curtain shown
    if (losingCurtains[0] == selectedCurtain){
        remainingCurtains.push(losingCurtains[0]);
    } else if (losingCurtains[1] == selectedCurtain || selectedCurtain == winningCurtain) {
        //otherwise the first one is considered shown
        remainingCurtains.push(losingCurtains[1]);
    }

    var pickSwitch = Math.round(Math.random()); // 0 = not switching 1 = switching
    if (pickSwitch) {
        selectedCurtain = (remainingCurtains[0] == selectedCurtain)? remainingCurtains[1] : remainingCurtains[0];
    }

    //check if the final selected curtain is the winning curtain
    if (selectedCurtain == winningCurtain) {
        won++;
    } else {
        lost++;
    }

}

console.log("Won: " +(won/10)+"% Lost: " +(lost/10)+"%");