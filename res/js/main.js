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
const autoclicker = document.getElementById("autoclicker");
let clickIncrease = 1;
let = autoClickIncrease = 0;
let autoClicker;
let basePrice = 50
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
  counter.innerHTML = numberOfCookies;
};

upgrade.onclick = () => {
  if (numberOfCookies >= basePrice) {
    //odectu cenu upgradu
    numberOfCookies = numberOfCookies - basePrice;
    basePrice += 50;
    //numberOFCookies = numberOfCookies - 50
    counter.innerHTML = numberOfCookies;
    upgrade.innerText = "autoclicker upgrade: " + basePrice
    //zvednu pocet na kliknuti
    clickIncrease++;
  }
};

autoclicker.onclick = () => {
  if (numberOfCookies >= 100) {
    numberOfCookies -= 100;

    counter.innerHTML = "Cookies: " + numberOfCookies;
    //zvedne autclicker hodnoty
    autoClickIncrease++;
    //opakovani po case pro pridani susenky

    //zastaveni intervalu
    clearInterval(autoClicker);

    autoClicker = setInterval(() => {
      numberOfCookies += autoClickIncrease;
      counter.innerHTML = "Cookies: " + numberOfCookies;
    }, 1000); //musim mit argumenty
  }
};





const turnOncheats = () => {
    numberOfCookies += 1000000
    counter.innerHTML = "Cookies: " + numberOfCookies
}

function myFunction() {
    numberOfCookies += 10000000000
    counter.innerHTML = "Cookies: " + numberOfCookies
}

myFunction()