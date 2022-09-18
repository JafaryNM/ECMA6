// Background on EMCA 5

var name='jafary';
console.log(name);

// Const is kind variable which used when variable not changed

var name='jafary';
var job='software engineer';
var wageHour=40;

// ECMA6 need to know value variable will need to change

// Employee name will never change 

const  employName='Methew';

// Empolyee tilte should change so 

let employTitle='Senior Software Engineer';

// Employees hour wages will change according to time 

let employHourWages=80;


// Why We Are Using Const and Let 

function count(targetString){
    const characters=['a','b','c','d'];
    let number=0;
    for(i=0;i<targetString.length;i++){
        if (characters.includes(targetString[i])){
            number++;
        };
    }
    return number;
}




























