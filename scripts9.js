
// Arrow Funtion 
// Let code first with ECMA6

const addNumbers =function(a,b){
    return a+b;
}

console.log(addNumbers(1,3));

// Let Approach Using ECMA 6

const addNumbesInArrowFn=(a,b)=>{
    return a+b;
}

console.log(addNumbesInArrowFn(5,5));

// But if you are using single line expressions 
// Modified your arrow function
// Single Arrow Function there automatic return value

const modifiedArrowFn=(a,b)=> a+b;
console.log(modifiedArrowFn(4,5));

// Dont Affraid to use Arrow Function 

const longArrowFn=(a,b)=>{

    return modifiedArrowFn/(292920+(modifiedArrowFn+938393));

}



// 02 Using Advance Features of ECMA 6

const double=function(number){
    return number*2;
}

console.log(double(8));


// Convert above code to Arrow Functions 

const doubleArrowFn=(arrowNumber)=>arrowNumber*2;
console.log(doubleArrowFn(4))

// You can ommitt single bracket if you have single argurments


const doubleForSingleArgument=singleNumber=>singleNumber*2;
console.log(doubleForSingleArgument(8))

// You Should return brackets if you dont have arguments 

const valueNoArgument=()=>{
    return 2;
}

console.log(valueNoArgument())


// Special Case Of Mapping Problems 

const arrayNumbers=[2,4,8];

const arrayDoubleMapping=arrayNumbers.map(function(arrayNumber){
    return arrayNumber*2;
});

console.log(arrayDoubleMapping)

// Reduce Your Code With Arrow Function

const arrayModifiedNumbers=[1,2,3];
const arrayMapping=arrayModifiedNumbers.map((arrayModifiedNumber)=>arrayModifiedNumber*2);
console.log(arrayMapping)

// When can use Arrow Fn


const team={
    members:['Agrey','Jafary'],
    teamName:'Dangerous Square',
    teamSummary:function(){

     //  Resolve error in Arrow fn
     // this=team
      return this.members.map((member)=>{
        return `My ${member} is on team ${this.teamName}`

      });

    }
}

console.log(team.teamSummary());























