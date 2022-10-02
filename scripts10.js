// Default function arguments 

function makeAjaxRequest(url,method){
  
    // Logic To make request 

    // If user not pass request

    if(!method){
        method='GET'
    }

}

// Good Argument Approach Default Advanced Arguments 

function makeAjaxInAdvance(url,method='GET'){
    return method;
}

console.log(makeAjaxInAdvance('google.com'))


// Specieal Case On default advance Arguments 

// Create User

function user(){

}
// Create Randomly User ID

function userId(){

    return Math.random*99999;
}

// Create User From Admin

function createUserAdmin(user){

  user.admin=true;
  return user;
}













