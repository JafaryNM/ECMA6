
// Templating String  

// Using ECMA5 Dispaly

function getMessage(){
    const year=new Date().getFullYear();
    return 'The year is ' + ' '+ year;
    
}
console.log(getMessage());

// Using ECMA6 On Display 

function getMessageEcma6(){
    const yearEcma=new Date().getFullYear();
    return `Year now is ${yearEcma}`;
}

console.log(getMessageEcma6())









