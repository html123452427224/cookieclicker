//console.log; - vypisuje do konzole
console.log("ahoj světe");

let myNumber = 16;
console.log(myNumber);
myNumber = 4;
console.log(myNumber);

const PI = 3.14;
console.log(PI);
PI = 4;
console.log(PI)


const dog = document.getElementById("dog");
const counter = document.getElementById("counter");
let numberOfCookies
const upgrade = document.getElementById("upgrade")
//.onclick - na kliknuti
// () => arrow funkce
// {} - scope
dog.onclick = () => {
    console.log("click");
    //numberOfCookies = numberOfCookies + 1;
    //numberOfCookies += 1;     
    //++ pricte jednicku - inkrement
    numberOfCookies++;
    console.log(numberOfCookies);
    counter.innerHTML = "Number of robux: " + numberOfCookies;

}

