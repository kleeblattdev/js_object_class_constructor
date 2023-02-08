//Variable Input
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const stageName = document.querySelector("#stageName");
const albums = document.querySelector("#albums");
const singles = document.querySelector("#singles");
const netWorth = document.querySelector("#netWorth");
const age = document.querySelector("#age");
const quote = document.querySelector("#quote");
const img = document.querySelector("#img");
const btnSubmit = document.querySelector("button");

class Rapper {
    constructor(firstName, lastName, stageName, albums, single, netWorth, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.stageName = stageName;
        this.albums = albums;
        this.single = single;
        this.netWorth = netWorth;
        this.age = age;
    }
}

const rapperAll= [];

btnSubmit.addEventListener("click",(event) => {
    event.preventDefault();

    rapperAll.push(new Rapper(firstName.value, lastName.value, stageName.value, albums.value, singles.value, netWorth.value, age.value))

    console.log(rapperAll);
})