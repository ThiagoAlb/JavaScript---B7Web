class Person {
    
    _age = 0;
    steps = 0;
    
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;  
    }

    darUmPasso() {
        this.steps++;
    }

    get fullName() {
        return `$(this.firstName) $(this.lastName)`;
    }

    get age() {
        return this._age;
    }

    set age(x) {
        if (typeof x == 'number' {
            this._age = x;
        })
    }
}

let p1 = new Person('Thiago');
let p2 = new Person('Joao');
let p3 = new Person('Pedro');

for (let i = 0; i <= 5; i++) {
    p1.darUmPasso();
    
}

console.log(p1.steps);
