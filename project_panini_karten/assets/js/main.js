//Variable Input
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const stageName = document.querySelector("#stageName");
const albums = document.querySelector("#albums");
const singles = document.querySelector("#singles");
const netWorth = document.querySelector("#netWorth");
const age = document.querySelector("#age");
const quote = document.querySelector("#quote");
const image = document.querySelector("#imgURL");
const btnSubmit = document.querySelector("button");

const userInput = document.querySelector("#userInput");

// Variable Output

const firstNameOutput = document.querySelector("#firstNameOutput");
const lastNameOutput = document.querySelector("#lastNameOutput");
const stageNameOutput = document.querySelector("#stageNameOutput");
const albumsOutput = document.querySelector("#albumsOutput");
const singlesOutput = document.querySelector("#singlesOutput");
const netWorthOutput = document.querySelector("#netWorthOutput");
const ageOutput = document.querySelector("#ageOutput");
const quoteOutput = document.querySelector("#quoteOutput");

const outputSection = document.querySelector("#output");

class Rapper {
    constructor(firstName, lastName, stageName, albums, single, netWorth, age, image,quote){
        this.firstName = firstName;
        this.lastName = lastName;
        this.stageName = stageName;
        this.albums = albums;
        this.single = single;
        this.netWorth = netWorth;
        this.age = age;
        this.image = image;
        this.quote = quote;
    }
}

const rapperAll= [];

btnSubmit.addEventListener("click",(event) => {
    event.preventDefault();

    rapperAll.push(new Rapper(firstName.value, lastName.value, stageName.value, albums.value, singles.value, netWorth.value, age.value, image.value, quote.value));
    
    console.log(JSON.stringify(rapperAll[rapperAll.length-1]));
})