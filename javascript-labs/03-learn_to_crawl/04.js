/**
 * Create three variables with numbers assigned to them.
 * Do not use zero.
 * Make the numbers at least 4 digits long, e.g. 3874, 2398.
 * Create a 4th variable with the number 7 and call it "luckyNumber".
 * 
 * After creating the variables, do the
 * following without typing any more numbers.
 * 
 * Output the following to the console:
 *      1. The sum of the numbers.
 *      2. The result of subtracting the two smallest
 *         numbers from the larger one.
 *      3. The result of multiplying all the numbers.
 *      4. The result of the largest number divided
 *         by the difference between the smaller ones.
 *      5. The result of the the numbers modulo 7.
 * 
 * Finally, label all of the outputs by using console log in the way
 * that is demonstrated below. For the labels, be sure to come up 
 * with clear and descriptive names.
 */

let x, y, z;

x = 1234;
y = 2345; 
z = 3456;

console.log(z / (y - x ));
console.log((x + y + z) % 7);

const labelOne = "The sum of the numbers."
console.log(labelOne, (x + y + z));

const labelTwo = "The result of subtracting the two smallest numbers from the larger one."
console.log(labelTwo, (z - y - x));

const labelThree = "The result of multiplying all the numbers."
console.log(labelThree, (x * y * z));

const labelFour = "The result of the largest number divided by the difference between the smaller ones."
console.log(labelFour, (z / (y - x )));

const labelFive = "The result of the the numbers modulo 7."
console.log(labelFive, ((x + y + z) % 7));
