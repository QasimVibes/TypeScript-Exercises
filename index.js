"use strict";
// Question No 2
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName = "Eric";
let messages = `Hello ${personName}, would you like to learn some Python today?`;
console.log(messages);
// Question No 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let person = "Qasim raZZaq ali";
console.log(person.toLowerCase());
console.log(person.toUpperCase());
let titlecase = person.split(" ").map((item) => {
    return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
});
console.log(titlecase.join(" "));
// Question No 4
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let author = "Albert Einstein";
let quote = "Life is like riding a bicycle. To keep your balance, you must keep moving.";
console.log(`${author} once said, “${quote}”`);
// Question No 5
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famous_person = "Albert Einstein";
let message = `${famous_person} once said, “${quote}”`;
console.log(message);
// Question No 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let nameWithWhiteSpace = "\t  \n Qasim Razzq \n  \t";
console.log("Name with whitespace:", nameWithWhiteSpace);
let strippedName = nameWithWhiteSpace.trim();
console.log("StrippedName:", strippedName);
// Question No 7
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log("Addition 3 + 5 =", 3 + 5);
console.log("Subtraction 12 - 4 =", 12 - 4);
console.log("Multiplication 4 * 2 =", 4 * 2);
console.log("Division 24 / 3 =", 24 / 3);
// Question No 8
// You should create four lines that look like this:
// _____________________________________________
//  console.log(5 + 3)
// _____________________________________________
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log("_____________________________________________");
console.log(5 + 3);
console.log("_____________________________________________");
console.log("\n_____________________________________________");
console.log(5 + 3);
console.log("_____________________________________________");
console.log("\n_____________________________________________");
console.log(5 + 3);
console.log("_____________________________________________");
console.log("\n_____________________________________________");
console.log(5 + 3);
console.log("_____________________________________________");
// Question No 9
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favoriteNumber = 99;
let Message = `My favorite number is ${favoriteNumber}`;
console.log(Message);
// Question No 10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// Author: Qasim Razzaq
// Date: July 18, 2023
// This program check the given number is positive or negative.
let number = -32;
if (number >= 0) {
    console.log(`Your given number ${number} is Positive`);
}
else {
    console.log(`Your given number ${number} is Negative`);
}
// Author: Qasim Razzaq
// Date: July 18, 2023
// This program check the given number is prime or not a prime number.
let primeNumber = 89;
let isPrime = true;
for (let i = 2; i < primeNumber; i++) {
    if (primeNumber % i == 0) {
        console.log(`Your given number ${primeNumber} is not a Prime number`);
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log(`Your given number ${primeNumber} is a Prime number`);
}
// Question No 11
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let names = ["Ali", "Hamza", "Farhan"];
console.log("List of Friends Names");
names.forEach((name, index) => {
    console.log(`${index + 1}. ${name}`);
});
// Question No 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log("Greetings to Friends");
names.forEach((name) => {
    console.log(`Hello, ${name}! Pleasure to meet you.`);
});
// Question No 13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let favorite = [
    "Honda motorcycle",
    "Tesla Model S",
    "Ford Mustang",
    "BMW i8",
    "Ducati Panigale V4",
    "Jeep Wrangler",
];
favorite.forEach((name) => {
    console.log(`I would like to own a ${name}`);
});
// Question No 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guestList = ["Ayesha", "Hina", "Rabia"];
guestList.forEach((name) => {
    console.log(`Hey ${name}, I'm making my famous lasagna tonight and I'd love for you to join me.`);
});
console.log(`Unfortunately, ${guestList[1]} has to cancel his dinner plans. She's not feeling well.`); // Question no 15 part
// Question No 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
guestList.splice(1, 1, "Aqsa");
// Print a second set of invitation messages, one for each person who is still in your list.
guestList.forEach((name) => {
    console.log(`Hey ${name}, I'm making my famous lasagna tonight and I'd love for you to join me.`);
});
console.log(`We have finded a bigger dinner table ${guestList}`); // Question no 16 part
// Question No 16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// Add one new guest to the beginning of your array
guestList.unshift("Nabiha");
console.log(guestList);
// Add one new guest to the middle of your array.
let guestLength = Math.round(guestList.length / 2);
guestList.splice(guestLength, 0, "Fatima");
console.log(guestList);
// Use append() to add one new guest to the end of your list.
guestList.push("Afshan");
console.log(guestList);
// Print a new set of invitation messages, one for each person in your list.
guestList.forEach((name) => {
    console.log(`Hey ${name}, how about a casual dinner at my place soon? It'll be great to catch up!`);
});
console.log("Sorry, we can only invite two people for dinner."); // Question no 17 part
// Question No 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
// Print a message to each of the two people still on your list, letting them know they’re still invited.
guestList.forEach((remainingGuest) => {
    console.log(`Dear ${remainingGuest}, you're still invited to dinner.`);
});
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guestList.splice(0, guestList.length);
console.log("Final guest list:", guestList);
// Question No 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// Store the locations in a array. Make sure the array is not in alphabetical order.
let places = ["Dubai", "United States", "Japan", "Turkey", "Amsterdam",];
// Print your array in its original order.
console.log(places);
// Print your array in alphabetical order without modifying the actual list
let orderSort = [...places];
orderSort.sort();
console.log(orderSort);
// Show that your array is still in its original order by printing it.
console.log(places);
// Print your array in reverse alphabetical order without changing the order of the original list.
let reverseSort = [...places];
reverseSort.sort();
reverseSort.reverse();
console.log(reverseSort);
// Show that your array is still in its original order by printing it again.
console.log(places);
// Reverse the order of your list. Print the array to show that its order has changed.
places.reverse();
console.log(places);
// Reverse the order of your list again. Print the list to show it’s back to its original order.
places.reverse();
console.log(places);
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
places.sort();
console.log(places);
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
places.reverse();
console.log(places);
// Question No 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log(`Dinner Guests: We are inviting ${guestList.length} people to dinner.`);
// Question No 20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let programmingLanguages = ["Java", "Ruby", "C++", "Php", "C#", "Nodejs"];
console.log("List of Programming Languages");
programmingLanguages.forEach((language, index) => {
    console.log(`${index + 1}. ${language}`);
});
// Question No 21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// Create an object for each programming language.
const programmingLanguagesObjects = programmingLanguages.map((language) => ({
    name: language,
    paradigm: "Object-oriented",
    popularity: "High",
}));
// Print the objects.
console.log(programmingLanguagesObjects);
// Question No 22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let changeIndex = ["Nile", "Amazon", "Mount Everest", "Matterhorn"];
console.log(changeIndex);
// Intentional Error: Trying to access an index that doesn't exist
console.log(changeIndex[10]);
// Correct the error
console.log(changeIndex[3]);
// Question No 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car = "mazda";
console.log("Is car == 'mazda'? I predict True.");
console.log(car == "mazda"); // Should print True
console.log("Is car != 'mazda'? I predict False.");
console.log(car != "mazda"); /// Should print False
console.log("Is car.length  == 5? I predict True.");
console.log(car.length == 5); // Should print True
let peopleAge = 25;
console.log("Is age > 18? I predict True.");
console.log(peopleAge > 18); // Should print True
console.log("Is age < 18? I predict False.");
console.log(peopleAge < 18); // Should print False
let temperature = 33;
console.log("Is temperature >= 32? I predict True.");
console.log(temperature >= 32); // Should print True
console.log("Is temperature <= 32? I predict False.");
console.log(temperature <= 32); // Should print False
let sunny = false;
let warm = true;
console.log("Is it sunny and warm? I predict False.");
console.log(sunny && warm); // Should print False
console.log("Is it sunny or warm? I predict True.");
console.log(sunny || warm); // Should print True
console.log("Is it not sunny or warm? I predict False.");
console.log(!(sunny || warm)); // Should print False
// Question No 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// Tests for equality and inequality with strings
let city = 'Islamabad';
console.log(city === 'Islamabad'); // Should print True
console.log(city != 'Islamabad'); // Should print False
// Tests using the lower case function
let text = 'Hello World';
let lowercaseText = text.toLowerCase();
console.log(lowercaseText == 'hello world'); // Should print True
console.log(lowercaseText == 'HELLO WORLD'); // Should print False
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let a = 7;
let b = 6;
console.log(a > b); // Should print True
console.log(a < b); // Should print False
console.log(a >= b); // Should print True
console.log(a <= b); // Should print False
// Tests using "and" and "or" operators
let isMorning = true;
let isSunday = false;
console.log(isMorning && isSunday); // Should print False
console.log(isMorning || isSunday); // Should print True
// Test whether an item is in a array
let colors = ['orange', 'red', 'black', 'green'];
let searchColorTrue = 'green';
let searchColorFalse = 'yellow';
console.log(colors.includes(searchColorTrue)); // Should print True
console.log(colors.includes(searchColorFalse)); // Should print False
// Test whether an item is not in a array
let fruits = ['apple', 'banana', 'cherry'];
let searchFruitTrue = 'orange';
let searchFruitFalse = 'apple';
console.log(!fruits.includes(searchFruitTrue)); // Should print True
console.log(!fruits.includes(searchFruitFalse)); // Should print False
// Question No 25
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
let alien_color = "green";
if (alien_color === "green") {
    console.log("Player just earned 5 points!");
}
// Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
alien_color = "yellow";
if (alien_color === "green") {
    console.log("Player just earned 5 points!");
}
// Question No 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// Write one version of this program that runs the if block and another that runs the else block.
let alienColor = "green";
// Version that runs the if block
if (alienColor === "green") {
    console.log("Player just earned 5 points!");
}
else {
    console.log("Player just earned 10 points!");
}
// Version that runs the else block
alienColor = "yellow";
if (alienColor === "green") {
    console.log("Player just earned 5 points!");
}
else {
    console.log("Player just earned 10 points!");
}
// Question No 27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// If the alien is green, print a message that the player earned 5 points.
// If the alien is yellow, print a message that the player earned 10 points.
// If the alien is red, print a message that the player earned 15 points.
// Write three versions of this program, making sure each message is printed for the appropriate color alien.
let AlienColor = "green";
// Version that prints message for green alien
if (AlienColor === "green") {
    console.log("Player earned 5 points!");
}
else if (AlienColor === "yellow") {
    console.log("Player earned 10 points!");
}
else if (AlienColor === "red") {
    console.log("Player earned 15 points!");
}
// Version that prints message for yellow alien
AlienColor = "yellow";
if (AlienColor === "green") {
    console.log("Player earned 5 points!");
}
else if (AlienColor === "yellow") {
    console.log("Player earned 10 points!");
}
else if (AlienColor === "red") {
    console.log("Player earned 15 points!");
}
// Version that prints message for red alien
AlienColor = "red";
if (AlienColor === "green") {
    console.log("Player earned 5 points!");
}
else if (AlienColor === "yellow") {
    console.log("Player earned 10 points!");
}
else if (AlienColor === "red") {
    console.log("Player earned 15 points!");
}
// Question No 28
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// If the person is less than 2 years old, print a message that the person is a baby.
let age = 45;
if (age < 2) {
    console.log("The person is a baby.");
}
// If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler");
}
// If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age >= 4 && age < 13) {
    console.log("The person is a kid");
}
// If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager");
}
// If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (age >= 20 && age < 65) {
    console.log("The person is a adult");
}
// If the person is age 65 or older, print a message that the person is an elder.
else if (age >= 65) {
    console.log("The person is a elder");
}
// Question No 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits = ["mango", "apple", "orange"];
// Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if (favorite_fruits.includes("mango")) {
    console.log("You really like mango!");
}
if (favorite_fruits.includes("bananas")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("orange")) {
    console.log("You really like orange!");
}
if (favorite_fruits.includes("grapes")) {
    console.log("You really like grapes!");
}
if (favorite_fruits.includes("apple")) {
    console.log("You really like apple!");
}
// Question No 30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
const userNames = ["Rabia", "Olivia", "Aqsa", "Admin", "Ava", "Qasim"];
userNames.forEach((name) => {
    if (name === "Admin") {
        console.log(`Hello ${name}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${name}, thank you for logging in again`);
    }
});
// Question No 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// If the list is empty, print the message We need to find some users!
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
else {
    userNames.forEach((name) => {
        if (name === "Admin") {
            console.log(`Hello ${name}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${name}, thank you for logging in again`);
        }
    });
    // Remove all of the usernames from your array, and make sure the correct message is printed
    userNames.splice(0, userNames.length);
    if (userNames.length === 0) {
        console.log("All users have been removed. We need to find some users!");
    }
}
// Question No 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// Make a list of five or more usernames called current_users.
let current_users = ["Rabia", "Asma", "Fatima", "Sana", "Hina", "Ayesha"];
// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users = ["FATIMA", "Qasim", "Rabia", "Ali", "Rimsha"];
// Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let lower_current = current_users.map((value) => value.toLowerCase());
let lower_new = new_users.map((value) => value.toLowerCase());
for (let i = 0; i < new_users.length; i++) {
    if (lower_current.includes(lower_new[i])) {
        console.log(`Sorry, ${new_users[i]} username is already taken. Please enter a new username.`);
    }
    else {
        console.log(`Congratulations, ${new_users[i]} username is available.`);
    }
}
// Question No 33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// Store the numbers 1 through 9 in a array.
// Loop through the array.
// Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((number) => {
    let ordinal_ending;
    if (number == 1) {
        ordinal_ending = "st";
    }
    else if (number == 2) {
        ordinal_ending = "nd";
    }
    else if (number == 3) {
        ordinal_ending = "rd";
    }
    else {
        ordinal_ending = "th";
    }
    console.log(`${number}${ordinal_ending}`);
});
// Question No 34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let favoritePizza = ["Neapolitan", "New York Style", "Margherita",];
console.log("List of my favorite pizzas");
for (let i = 0; i < favoritePizza.length; i++) {
    console.log(favoritePizza[i]);
}
console.log("\nI like these pizzas");
for (let i = 0; i < favoritePizza.length; i++) {
    console.log(`I like ${favoritePizza[i]} pizza`);
}
console.log("\nI really love pizza!");
console.log("Margherita pizza is one of the best pizzas I have ever eaten");
console.log("The cheesy bite you get every day is awesome");
// Question No 35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
// Modify your program to print a statement about each animal, such as A dog would make a great pet. 
// Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
const animals = ["dog", "cat", "fish"];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} would make a great pet!`);
}
console.log("Any of these animals would make a great pet!");
// Question No 36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
const make_shirt = (size, message) => {
    console.log(`The T-shirt size is ${size} and it has the message: ${message}`);
};
make_shirt("Large", "I love Typescript");
// Question No 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
const make_shirt1 = (size = "Large", message = "I love TypeScript") => {
    console.log(`The T-shirt size is ${size} and it has the message: "${message}"`);
};
make_shirt1();
make_shirt1("Medium");
make_shirt1("Small", "TypeScript is awesome!");
// Question No 38
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
const describe_city = (city, country = "Unknown Country") => {
    console.log(`${city} is in ${country}`);
};
describe_city("Toronto", "Canada");
describe_city("Paris", "France");
describe_city("Budapest");
// Question No 39
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this: "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
const city_country = (city, country) => {
    return `${city}, ${country}`;
};
console.log(city_country("Toba Tek Singh", "Pakistan"));
console.log(city_country("Faisalabad", "Pakistan"));
console.log(city_country("Lahore", "Pakistan"));
const make_album = (Artist_Name, Album_Title, Track) => {
    let album = { Artist_Name, Album_Title };
    if (Track) {
        album.Track_Number = Track;
    }
    return album;
};
console.log(make_album("The Beatles", "Please Please Me, Revolver, Abbey Road"));
console.log(make_album("Michael Jackson", "Thriller, Off the Wall, Bad"));
console.log(make_album("Justin Bieber", "Justice, Changes, Purpose"));
console.log(make_album("Dua Lipa", "Future Nostalgia", 29));
// Question No 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicianNames = ["Harry Houdini", "Lance Burton", "David Copperfield", "Dynamo",];
const show_magicians = (item) => {
    item.forEach((name) => {
        console.log(name);
    });
};
show_magicians(magicianNames);
// Question No 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
const make_great = (names) => {
    for (let i = 0; i < names.length; i++) {
        names[i] = `The Great ${names[i]}`;
    }
};
make_great(magicianNames);
show_magicians(magicianNames);
// Question No 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name
const magicianNamesCopy = [...magicianNames];
const modifiedMagicianNames = [...magicianNamesCopy];
make_great(modifiedMagicianNames); // Modify the copied array
show_magicians(magicianNamesCopy); // Show the original array
show_magicians(modifiedMagicianNames); // Show the modified array
// Question No 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time
const make_sandwich = (items) => {
    console.log("Sandwich Ingredients:");
    items.forEach((item) => {
        console.log(item);
    });
};
make_sandwich(["Boiled potatoes", "Cheese", "Beetroot", "Cucumber"]);
make_sandwich(["Corn", "Carrots", "Onions"]);
make_sandwich(["Peanut Butter", "Lettuce"]);
// Question No 45
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
const carInformation = (Manufacturer, Model, ...args) => {
    let Car = Object.assign({ Manufacturer,
        Model }, Object.assign({}, ...args));
    return Car;
};
let carResult = carInformation("Nissan", "Altima", { Color: "Black", Optional: "Black interior" });
console.log(carResult);
