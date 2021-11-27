
//initialize the count as 0 
//listen for clicks on an increment button 
//increment the count variable when the button is clicked 
//change the count-el in the HTML to reflect the new count 

//camelCase
let countEl = document.getElementById("count-el");
let previousEntries = document.getElementById('previous-entries');


let clientCount = 0;

function increment(){
    clientCount += 1;
    countEl.textContent = clientCount;

}

//Create a function, save(), which logs out the count when it's clicked

function save() {
    let countString = clientCount + " - ";
    previousEntries.textContent += countString;

    //We need to make the button save work and reset 

    countEl.textContent=0;
    count=0;
}







