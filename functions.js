class Person {
    constructor(name) {
        this.name = name;
    }

    logNameArrow() {
        setTimeout(() => {
            console.log(`Arrow: ${this.name}`);
        }, 100);
    }

    logNameRegular() {
        setTimeout(function(){
            console.log(`Regular: ${this.name}`);
        }, 100);
    }
}

let andres = new Person('Andres');
andres.logNameArrow()//Arrow: Andres
andres.logNameRegular()//Regular: undefined

//In this example we see that the arrow function is able to access andres
//because it is in the same scope of where it being defined
//Whereas the regular function is returning undefined because it is looking 
//for the global scope window object and not line 19