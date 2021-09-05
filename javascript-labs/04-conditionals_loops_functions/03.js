
/**
 * 1. Create while loop equivalents of the loops in the previous exercises!
 *
 * 2. Using the random number generator above, write a while loop that generates
 *    random numbers until it has generated one that is divisible by 11. Do you
 *    remember what operator to use?
 */
//1
//  * 1. Create a for loop that will log all the numbers between 5 and 1000.
//  *    incrementing in 5s. So the output would start "5, 10, 15, 20 ..."
//  * 2. Create a for loop that outputs every number between 100 and -100 included.
//  * 3. Create a for loop that outputs this sequence of numbers: 3, 2, 5, 4, 7, 6,
//  *    9, 8 ... That is, starting at 0: +3, -1, +3, -1, +3. Make it output 5000
//  *    times, what is the number you get at the end?

//1 

i = 0; 
while (i < 1000) {
    console.log(i);
    i += 5;
}

//2 

i = 100;
while (i >= -100) {
    console.log(i);
    i--;
}

//3

i = 0;
while (i < 5000) {
    i += 3;
    console.log(i);
    i -= 1;
    console.log(i);
}

function getRandomNumber(){
    return Math.floor((Math.random() * 100) + 1);
}


// * 2. Using the random number generator above, write a while loop that generates
// *    random numbers until it has generated one that is divisible by 11. Do you
// *    remember what operator to use?

bool = true;

while (bool) {
    i = getRandomNumber();
    console.log(i);
    if ((i % 11) === 0) {
        bool = false;
    }
}
