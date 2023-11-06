/* A callback is a function passed into another function as an argument, which is then
invoked inside the outer function to complete some kind of routine or action. */

// A simple example:
/* 'fetchdata' simulates an asynchronous operation using 'setTimeout'. It waits for 2 seconds
(simulating a data fetch delay) and then calls the 'displayData' function, passing the
string 'Data retrieved' as an argument. */
function fetchData(callback) {
    setTimeout(() => {
        // Simulate a delay like fetching data from a server
        callback(document.getElementById('textDelay1').innerHTML = 'Data retrieved!');
    }, 2000); // 2000 milliseconds = 2 seconds
}

function displayData(data) {
    console.log(data);
}

fetchData(displayData);

// setTimeout() with a Callback
setTimeout(myFunction, 3000);

function myFunction() {
    document.getElementById('textDelay2').innerHTML = 'Hey, gorgeous!';
}

// Calculator Callback
function myDisplayer(something) {
    // This line accesses the DOM (Document Object Model) to find an HTML element with the ID sum. Once it finds this
    // element, it sets its innerHTML property to the value of something. This effectively changes the content of the sum element to display whatever value something holds.
    document.getElementById('sum').innerHTML = something;
}
// This line declares another function called myCalculator that takes three parameters: num1, num2, and myCallback.
// The first two are expected to be numbers, and the third is expected to be a function.
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}
// The 'myCalculator' function is called with 44 and 25 as the numbers to add and 'myDisplayer' as the callback function.
// The function will calculate the sum of 44 and 25, which is 69, and then call 'myDisplayer(69)'.
myCalculator(44, 25, myDisplayer);