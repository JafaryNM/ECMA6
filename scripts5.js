var computers=[
    {
        name:'Apple',
        ram:24
    },
    {
        name:'Compac',
        ram:4
    },
    {
        name:'Acer',
        ram:16
    }

];

// Using EMCA 5 To Solve Problem

var allComputerCanRunProgram=true;
var onlySomeComputerCanRunProgram=false;

for(var i=0; i<length.computers;i++){
    var computers=computers[i];

    if (computers.ram<=2){

     allComputerCanRunProgram=false
      
    }

    else{
     onlySomeComputerCanRunProgram=true
    }
}
console.log(allComputerCanRunProgram)


// Using ECMA 6 Using Every Function


computers.every(function(computure){

    return computers.ram>16

});


































