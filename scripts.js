/*

ECMA6 -- Is standard JavaScript implementation
There three basic concept on how to use ECMA script 

ECMA 6 --> Babel(Compiler)-->ECMA5(Safe for you browser)

*/


/*

Array Helpers 
-- Foreach
-- Map
-- Filter
-- Find
-- Every
-- Some
-- Reduce


*/

// 01. For Each Helper  

// Let Work first with ES5

var colours=['green', 'blue','yellow'];

for (i=0;i<colours.length;i++){
  console.log(colours[i])
}


// Let Solve by using forEach array helper
// Advantages of using Array helper is technical writting less of code 

var primaryColours=['green', 'blue', 'red'];

primaryColours.forEach(function(primaryColour){

    console.log(primaryColour);
});


/**
 WHAT HAPPEN BEHIND THE SCENE IN forEach array Helper
 *  primaryColour     *

 *   green            *
 *   blue             *  --------> | Iteration fn |        
 *   red              *
 *                    *               
  
 */



// 02. Special Case of forEach Array helpers

// Create Array of Numbers
   
 var numbers=[10,20,30,40,50];

// Create Variable to hold Sum

 var sum=0;

// Using Calling Back Fn

function adder(number){
    sum+=number;
}

// Loop Over the Array and Increment some variables

numbers.forEach(adder);

//Print Some Variable 
console.log(sum);



// 03. Really Application of ForEach Helper 

/**
 * --Gmail Account you can applying using of array helper 
 * --Delete Some emails by clicking select some text 
 * --
 * 
 *   emails.forEach(function(email){
 *       deleteEmail(email)
 * });
 * 
 */












