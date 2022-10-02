class Car{
    // Initialized your constructor
   constructor({ title}){

    this.title=title

    }
    drive(){
        return "Voom is very fantastic"
    }

}

// Inherit Car class
class Toyota extends Car{

    constructor(options){

        super(options); // I want to call Car.constructor()

        this.color=options.color

    }

    hock(){
        return 'some hook display out'
    }
}

const toyota=new Toyota({'color':'red'})

console.log(toyota.hock())
console.log(toyota.drive())



































