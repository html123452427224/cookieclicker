//console.log; - vypisuje do konzole
console.log("ahoj světe");
/*
let myNumber = 16;
console.log(myNumber);
myNumber = 4;
console.log(myNumber);

const PI = 3.14;
console.log(PI);
PI = 4;
console.log(PI)
*/

const dog = document.getElementById("dog");
const counter = document.getElementById("counter");
let numberOfCookies = 0;
const upgrade = document.getElementById("upgrade");
let clickIncrease = 1;
//.onclick - na kliknuti
// () => arrow funkce
// {} - scope
dog.onclick = () => {
    console.log("click");
    //numberOfCookies = numberOfCookies + 1;
    //numberOfCookies += 1;     
    //++ pricte jednicku - inkrement
    numberOfCookies += clickIncrease;
    console.log(numberOfCookies);
    counter.innerHTML =  numberOfCookies;

}

upgrade.onclick = () => {
    if (numberOfCookies >= 50) {
        //odectu cenu upgradu
        numberOfCookies = numberOfCookies - 50;
        //numberOFCookies = numberOfCookies - 50
        counter.innerHTML =  numberOfCookies;
        //zvednu pocet na kliknuti
        clickIncrease++;
    }
}


