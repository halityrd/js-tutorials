// while --> state
// for --> iterate


// var output = [];
// var count = 1;

// function fizzBuzz() {

//     if (count % 3 == 0 && count % 5 == 0) {
//         output.push("FizzBuzz");
//         count++;
//     }
//     else if (count % 3 == 0) {
//         output.push("Fizz");
//         count++;
//     }
//     else if (count % 5 == 0) {
//         output.push("Buzz");
//         count++;
//     }
//     else {
//         output.push(count);
//         count++;
//     }

//     console.log(output);
// }


// While Loop

// var output = [];
// var count = 1;
// function fizzBuzz() {

//     while (count <= 100) {
//         if (count % 3 == 0 && count % 5 == 0) {
//             output.push("FizzBuzz");
//         }
//         else if (count % 3 == 0) {
//             output.push("Fizz");
//         }
//         else if (count % 5 == 0) {
//             output.push("Buzz");
//         }
//         else {
//             output.push(count);
//         }

//         count++
    
//     }

//     console.log(output);
// }



// For Loops
var output = [];
function fizzBuzz() {

    for (var count = 1; count < 101; count++) {
        if (count % 3 == 0 && count % 5 == 0) {
            output.push("FizzBuzz");
        }
        else if (count % 3 == 0) {
            output.push("Fizz");
        }
        else if (count % 5 == 0) {
            output.push("Buzz");
        }
        else {
            output.push(count);
        }
    }

    console.log(output);
}


fizzBuzz();
