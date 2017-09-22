
// Классы: https://learn.javascript.ru/es-class
class test1 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // геттер
    get fullName() {
        return `${this.firstName} ${this.lastName}`;

    }

    // сеттер
    set fullName(newValue) {
        [this.firstName, this.lastName] = newValue.split(' ');
    }

    // вычисляемое название метода  - вызов: test1.TEST(); // PASSED!
    ["test".toUpperCase()]() {
        console.log(`${this.lastName} ${this.firstName}`);
        //alert("PASSED!");
    }

}

class test2 extends test1 {
    ["ok"](){
        alert("OK!")
    }
}

let usert = new test1 ("Вася", "Пупков");
console.log(usert.fullName);
usert.TEST();

// Прототипирование
// https://habrahabr.ru/post/144646/
function Animal(name) {
    this.name = name;
    this.canWalk = true;
    this.testText ='TestTekst';
}

var animal = new Animal("скотинка");

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;

console.log(Rabbit.prototype.testText);




