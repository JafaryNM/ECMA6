// Finding particular users in ECMA 6

var users=[
    {
        name:'jafary'
    },
    {
        name:'alex'
    },
    {
        name:'july'
    },
    {
        name:'jafary'
    }

];
var user;

for(var i=0; i<users.length; i++){
    if (users[i].name==='jafary'){
         user=users[i]
         break;
    }
}

console.log(user)


// Using Finding Array To  Find Element On Array


var findUser=users.find(function(user){

    return user.name=='jafary'

});

// Find Results

console.log(findUser)



// O2 Special Case of Array Helper 


function Car(model){
    this.model=model
}


cars=[
    new Car('Suziki'),
    new Car('Toyota'),
    new Car('Toyota')
];

var findCar= cars.find(fuction(car){
    return car.model==='Suziki';
});











