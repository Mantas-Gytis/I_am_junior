
console.log ("Gytis daro JavaScript darbą");
console.log ("Kaip gyvenimas?");  // paprastas tekstas i konsole
console.log (0.2 + 0.3);
console.log ("");

// 1 užduotis. Konsolėje turi būti išspausdintos 3 skirtingo tipo kintamųjų reikšmės: String, Number ir Boolean.
console.log ("1 užduotis");
const shopName1 = "Maxima";
const shopName2 = "Rimi";
const shopName3 = "Norfa";
const shopNames = '"String" tipo kintamieji: ' +  shopName1 + ", " + shopName2 + ", " + shopName3 + ".";
console.log (shopNames);

let firstNumber = 0.2;
console.log (firstNumber++);  // pirmiau parodo priskirta reiksme 0.2, o tada ++ prideda 1 ir saugo reiksme 1.2
let lastNumber = 0.3;
console.log ("Suma " + firstNumber + " + " + lastNumber + " = " + (firstNumber + lastNumber));
console.log ("Bet kazkodel skirtumas " + firstNumber + " - " + lastNumber + " = " + (firstNumber - lastNumber));

let iAmJunior = true;
console.log (iAmJunior);
console.log ("");

// 2 užduotis. Parašykite JavaScript programą, kuri įvertina ar asmuo gali balsuoti
console.log("2 užduotis");
let age = 18;
let lithuanian = true;
let daysLiving = 40;
console.log("Asmens amžius: " + age);
if (lithuanian) {
  console.log("Asmuo Lietuvos pilietis")
} else {
  console.log("Asmuo ne Lietuvos pilietis")
};
console.log("Asmuo pragyveno Lietuvoje " + daysLiving + " dienų");
if (age < 18) {
  console.log ("Asmuo per jaunas balsuoti")
} else if (!lithuanian) {
  console.log ("Asmuo negali balsuoti nebūdamas Lietuvos pilietis")
} else if (daysLiving <30) {
  console.log ("Negali balsuoti asmuo, nepragyvenęs Lietuvoje 30 dienų")
} else {console.log("Asmuo gali balsuoti")};
console.log("");

/* 
3 užduotis. Parašykite JavaScript programą, kuri įvertintų žmogaus sveikatos riziką, atsižvelgiant į jo amžių, 
KMI (kūno masės indeksą) ir gyvenimo būdo veiksnius. Programa turėtų suskirstyti sveikatos riziką į skirtingus 
lygius ir pateikti konkrečius patarimus.
*/
console.log ("3 užduotis");
let age1 = 51;        // paciento amzius
let kmi = 40;         // paciento kuno mases indeksas
let smokes = true;   // ar pacientas ruko?
console.log("Paciento amžius: " + age1 + " metų.");
console.log("Paciento kūno masės indeksas: " + kmi);
if (smokes) {console.log("Pacientas rūko.")} else {console.log("Pacientas nerūko.")}
if (age1 < 30 && kmi < 25 && !smokes) {
  console.log("Maža rizika. Ir toliau stenkitės sveikai gyventi.")
} else if (age1 >= 30 && age1 <= 50 && kmi > 25 && kmi < 30 && !smokes ) {
  console.log("Vidutinė rizika. Vidutiniame amžiuje reikėtų susirūpinti antsvoriu.")
} else if (age1 > 50 && kmi >= 30 && smokes) {
  console.log("Labai didelė rizika. Susirūpinkite sveikata. Antsvoris ir rūkymas trumpina gyvenimą.")
} else if (age1 > 50 || kmi > 30 || smokes) {
  console.log("Didelė rizika. Vyresniame amžiuje reikėtų sveikiau gyventi.")
} else {console.log("Neapibrėžta rizika. Neapibrėžta įvesčių kombinacija.")};

