// Using ES5
numbers=[1,2,3,4,5,6];
doubleNumbers=[]; // Avoid or mutate date

for(i=0;i<numbers.length; i++){
    doubleNumbers.push(numbers[i]*2);
}

console.log(doubleNumbers)

// 01. Applying ES6 Map Array helpers Fn

var numbersDouble=numbers.map(function(number){

    return number*2;
});

console.log(numbersDouble);


//02. Special Case of Map Array Helpers 

cars=[
    {
        model:'Toyota',
        price:'Expensive'
    },
    {
        model:'Suzuki',
        price:'Cheap'
    }
];

// Using Map array Helper
// Return all prices on Array of Object

var prices=cars.map(function(car){

    return car.price

});

console.log(prices)

// 03. Wheres should Map array helpers 

/** */






