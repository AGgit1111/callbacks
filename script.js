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
    document.getElementById('sum').innerHTML = something;
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(44, 25, myDisplayer);