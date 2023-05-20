const swimmer = {
    swim(){
       return 'Swimming';
    }
} 

const runner = {
    run(){
       return 'Running';
    }
} 

class Person {
    name;
    constructor(name){
        this.name = name;
    }
}

function extend(object, mixin){
    Object.assign(object.prototype, mixin);
}

extend(Person, swimmer)
extend(Person, runner)

const person = new Person();
person.swim();
person.run(); 
