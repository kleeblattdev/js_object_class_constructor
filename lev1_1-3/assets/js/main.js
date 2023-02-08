////////////// lev1_1
class Ball {
    constructor(ballType="regular") {
        this.ballType= ballType;
}
}

ball1 = new Ball();
ball2 = new Ball("super");

console.log(ball1.ballType);	//=> "regular"
console.log(ball2.ballType);	//=> "super"

////////////// lev1_2

class Person{

    constructor(name, age){
    this.name= name;
    this.age= age;
    }

    info(){
        console.log(this.name + " is " + this.age + " years old.");
    }
}

const person = new Person("Emanuela", 18);
person.info();

////////////// lev1_3

const userName = document.querySelector("#name");
const age = document.querySelector("#age");
const examCheck = document.querySelector("#examCheck");
const btnSubmit = document.querySelector("#button");

const result = document.querySelector("#result");

class PersonExtended extends Person{
    write(){
        return "<li>" + this.name + ", " + this.age + " years old." + "</li>" ;
}
}

function passedExam() {
    if(examCheck.checked){
        return result.style.color="black";
    }else{
        result.style.color="red";
    }
}


const persons = [];

btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();

    persons.push(new PersonExtended(userName.value, age.value));

    passedExam();
    console.log(persons);
    result.innerHTML = persons[persons.length-1].write();
})