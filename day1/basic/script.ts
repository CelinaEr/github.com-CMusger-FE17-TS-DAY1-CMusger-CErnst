
//ex 1
// program to generate a multiplication table

// take input from the user
const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
for(let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}

//---OR---

//creating a multiplication table
for(let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}

/*----End----*/

// Basic Ex2
//1. Print your full name in the browser (you will have an object that has 2 properties fName and lName). 
// let fName = "Celina";
// let lName = "Ernst";
// console.log(fName,lName);


// 2. Print your first name 10 times in the browser using a forEach loop (don't forget that forEach loop work on arrays, so you can put the object in an array and repeat it). 
// 3. A function should be triggered 5 seconds after opening the page that prints your last name in the console 10 times.

let names = {fname: "Celina", lname: "Ernst"};

let nameArray = Object.values(names);

document.write(`${names.fname} ${names.lname} <br><br>`);

for(let i=0; i<=10;i++){
    document.write(`${nameArray[0]} ${i} <br>`);
}

let time: () => void = function(){
    for(let i=0; i<=10;i++){
        setTimeout(() =>  {
            console.log(`${nameArray[1]} ${i}`);
        },5000);
    }    
}
time()


//2. 2. Print your first name 10 times in the browser using a forEach loop 
//(don't forget that forEach loop work on arrays, so you can put the object in an array and repeat it). 


//3. A function should be triggered 5 seconds after opening the page that prints your last name in the console 10 times.


//Basic Ex3
//Create an array of names, this array should only accept strings: //1. Print only the index of the elements
    let names = ["Celina", "Arwa", "Gloria", "Jimmy", "Manuel", 
    "Abdullah", "Chris", "Kristina", "Ibrahim", "Christos"];

    for (let index in names) {
        console.log([index]);
    }

    //2. Print only the values

    for (let name of names){
        console.log(name);
    }
        //OR forEach

        names.forEach(function (name) {
            console.log(name);

        });

    //3. Print both index and values.

    for (let index in names) {
        console.log(names[index]);
    }
    // forEach, for in, for of, they nedds an array
    
    for (let index in names){
        console.log(index, names[index]);
    }