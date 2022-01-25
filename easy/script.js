/*
EASY: Write a function that would allow you to do this:

var run = exercise('running');

console.log(run()); // prints "Today's exercise: running"

var run = exercise('running');

console.log(swim()); // prints "Today's exercise: swimming"
*/

let run = exercise('running');
let swim = exercise('swimming');
let jump = exercise('jumping');
let walk = exercise('walking');

function exercise(exercise) {
    return `Today's exercise: ${exercise}`
}

console.log(run)
console.log(swim)
console.log(jump)
console.log(walk)