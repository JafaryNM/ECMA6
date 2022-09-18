// Reduce Helper 

// Solving using ECM5 
var numbers= [10,20,30,40]; 
var sum=0;

for (var i=0;i<numbers.length; i++){
    sum+=numbers[i];
}

console.log(sum);

// REDUCE ARRAY HELPER 
// 01. Solving by using array helpers 

numbers.reduce(function(sum, number){
  // Array helper passing initial values 

 return sum +number;

},0);









