// # Programming Basics: Arrays and Array Methods

// These exercises are designed for practicing arrays and array methods. 
//**You may need to look up some methods to complete these tasks.
//** Print each result to the console.

// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. 
//Declare another variable and assign the second item of the array as a value.
let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let secondItem = euroCities[1];
console.log(euroCities);
console.log(secondItem);

// 2. Change the first item in the array to "Berlin".
euroCities.splice(0, 1, "Berlin");
console.log(euroCities);

// 3. Print the length of the array "euroCities".
console.log(euroCities.length);

// 4. Remove the last item of the array "euroCities". 
euroCities.pop();
console.log(euroCities);

// 5. Use an array method to add "Budapest" to the euroCities array. 
euroCities.push("Budapest");
console.log(euroCities);

// 6. **Bonus**: Remove the second and third items from the euroCities array. 
euroCities.splice(1, 1);
console.log(euroCities);
euroCities.splice(1, 1);
console.log(euroCities);

// 7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.
let asianCities = ["Hong Kong", "Singapore", "Tapei City", "Huangzhou", "Beijing"];
console.log(asianCities);

// 8. **Bonus**: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.  
let slicedCities = asianCities.slice(1, 4);
console.log(slicedCities);

// 9. **Bonus**: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).  
let worldCities = euroCities.concat(asianCities);
console.log(worldCities);

// 10. Reverse the order of worldCities.
console.log(worldCities.reverse());

// 11. **Bonus**: Replace the 3rd item in the array of worldCities with "Toronto". 
worldCities.splice(2, 1, "Toronto");
console.log(worldCities);

// 12. **Bonus**: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
worldCities.splice(1, 0, "Washington");
console.log(worldCities);

// 13. **Bonus** Write a program to join all elements of the result (worldCities) into a string. 
// Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"];
// Expected Outputs: 
// "Berlin , London, Bangkok, Phnom Penh"
// "Berlin+London+Bangkok+Phnom Penh" 
console.log(worldCities.join("+"));

// **Bonus**

// 1. Write a program to reverse the string: "Hello World". 
let greeting = "Hello World";
let newGreeting = greeting.split(" ");
newGreeting.reverse();
console.log(newGreeting);


// **Extra Practice**

// Print the results to the console.

// 1. Make an array of your siblings' names or your favorite movie characters' names.
let siblings = ["Anke", "Heide", "Tilman"];

// 2. Make an array of your parents' names.
let parents = ["Vater", "Mutter"];

// 3. Combine these two arrays.
let family = parents.concat(siblings);
console.log(family);

// 4. Add your pets' names.
family.push("Ledija", "Zaphira");
console.log(family);

// 5. Reverse the order of the array.
console.log(family.sort);

// 6. Access one of your parents' names.
// 7. Update the name of one of your parents. 