// 'const' example
// const author = 'robin';
// author = 'vangilder'; // throws error

// console.log(author);

// 'let' example
// var firstname = "Robin";
// if(firstname){
//     let firstname = "Joseph";
//     console.log(firstname); // logs "Joseph"
// }
// console.log(firstname); // logs "Robin"

// Template Strings/Literals/String Templates example
// var firstname = "Robin";
// var lastname = "VanGilder";
// var middlename = "Timothy";
// console.log(`Hello! My name is ${firstname} ${middlename} ${lastname}!`);

// Functions example, basic syntax
// function sayHello(firstname){
//     return `Hello there, ${firstname}!`;
// }
// console.log(sayHello('Robin')); // logs "Hello there, Robin!"

// Default parameters example
// function greeting(name = "Robinskio", message = "Hello"){
//     console.log(`${message}, ${name}!`);
// }
// greeting('Joseph'); // logs 'Hello, Joseph"

// Functions example, arrow syntax!
// function add_title(firstname){
//     return `Sir ${firstname}`;
// }
// These two functions do exactly the same thing!
// const add_title = (firstname, land) => {
//     if(firstname == "Joseph"){
//         return "Hey Joe how's it goin'.";
//     }
//     return `Sir ${firstname} of ${land}`;
// };
// console.log(add_title('Joseph', 'Seattle')); // Logs "Hey Joe how's it goin'."

// Arrow function returning an object
// const person = (firstname, lastname) =>({
//     first: firstname,
//     last: lastname
// })
// console.log(person('Robin', 'VanGilder'));

// Object variable destructuring example
// const sandwich = {
//     bread: 'pumpernickel',
//     meat: 'ham',
//     cheese: 'cheddar',
//     toppings: ['onion', 'peppers', 'horseradish']
// }
// let {bread, cheese} = sandwich;
// cheese = 'swiss';
// console.log(bread, cheese); // Logs "pumpernickel swiss"

// Desctructuring with functions example!
// const lordify = ({firstname}) => {
//     console.log(`${firstname} of Anglesey`);
// }
// const regular_person = {
//     firstname: "Robin",
//     lastname: "VanGilder"
// }
// lordify(regular_person); // Logs "Robin of Anglesey"

// Destructuring arrays example
// const animals = ['Horse', 'Dog', 'Cat'];
// const [firstanimal] = animals;
// const [,,thirdanimal] = animals;
// console.log(`The first animal is ${firstanimal} and the third is ${thirdanimal}`);

// Object Literal Enhancement example
// const firstname = "Robin";
// const lastname = "VanGilder";
// const write = function() {
//     console.log(`I, ${this.firstname} ${this.lastname}, am the author of this code!`);
// }
// const author = {firstname, lastname, write};
// author.write(); // Logs "I, Robin VanGilder, am the author of this code!"

// Example of a method without the function keyword
// const author = {
//     firstname: 'Robin',
//     lastname: 'VanGilder',
//     write(){
//         let firstname = 'Robinskio';
//         console.log(`I am ${firstname} ${this.lastname}!`);
//     }
// }
// author.write(); // Logs "I am Robinskio VanGilder!"

// Spread Operator example
// const ingredience = ['roast beef', 'cheddar', 'peppers', 'onion'];
// const breads = ['top slice', 'bottom slice'];
// const sandwich = [...ingredience,...breads];
// console.log(sandwich.join(', ')); // Logs "roast beef, cheddar, peppers, onion, top slice, bottom slice"
// const reverse_sandwich = [...sandwich].reverse();
// console.log(reverse_sandwich.join(', ')); // Logs "bottom slice, top slice, onion, peppers, cheddar, roast beef"
// const [meat, ...toppings] = ingredience;
// console.log(toppings.join(', ')); // Logs "cheddar, peppers, onion"

// Asynchronous JavaScript w/ fetch and then() example
// fetch("https://api.randomuser.me/?nat=US&results=10")
//     .then(response => response.json())
//     .then(members => console.log(members))
//     .then(err => console.log(err))

// Asynchronous JS with await in the form of a function
// const random_person = async () => {
//     let results = await fetch("https://api.randomuser.me/?nat=US&results=10");
//     let { res } = results.json();
//     console.log(res);
// }
// random_person();

// Promise example
// const get_people = count =>
//     new Promise((resolves, rejects) =>{
//         const api = `https://api.randomuser.me/?nat=US&results=10`;
//         const request = new XMLHttpRequest();
//         request.open('GET', api);
//         request.onload = () => 
//             (request.status === 200) ?
//                 resolves(JSON.parse(request.response).results) :
//                 rejects(Error(request.statusText));
//         request.onerror = (err) => rejects(err);
//         request.send();
//     })
// get_people(5).then(
//     members => console.log(members),
//     err => console.error(new Error('Cannot load members from randomuser.me'))
// )

// Function-based class w/ prototypical inhericance example
// function Vacation(destination, length){
//     this.destination = destination;
//     this.length = length;
// }
// Vacation.prototype.print = function(){
//     console.log(`${this.destination} | ${this.length} days`);
// }
// const maui = new Vacation('Maui', 14);
// maui.print(); // logs "Maui | 14 days"

// JavaScript Class example
// export class Vacation{
//     constructor (destination, length){
//         this.destination = destination;
//         this.length = length;
//     }
//     print(){
//         console.log(`${this.destination} | ${this.length} days`);
//     }
// }
// const maui = new Vacation('Maui', 14);
// maui.print();
// export class Expedition extends Vacation{
//     constructor(destination, length, gear){
//         super(destination, length);
//         this.gear = gear;
//     }
//     print(){
//         super.print();
//         console.log(`Bring your ${this.gear.join(' and your ')}`);
//     }
// }
// const k2 = new Expedition('K2', 34, [
//     'pickaxe',
//     'tent',
//     'sleeping bag',
//     'rations'
// ])
// k2.print(); // Logs "K2 | 34 days" and "Bring your pickaxe and your tent and your sleeping bag and your rations"

// VVV put these in the other file to import
// import { Vacation, Expedition } from './examples_ch1';

// maui = new Vacation('Frankfurt', 4);
// maui.print();