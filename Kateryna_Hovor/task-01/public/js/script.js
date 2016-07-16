(function () {
    'use strict';

    var ITERATIONS = 100000000;
    var EVERY = 100;
    var running = false;

    //Function that generates random coordinates for point(x:[-r,r), y:[-r,r))
    //and checks if it is in a circle with radius r
    var generatePoint = function () {
        var r = 16;
        var x = Math.random() * r * 2 - r;
        var y = Math.random() * r * 2 - r;
        return (Math.pow(x, 2) + Math.pow(y, 2) < Math.pow(r, 2))
    };

    //Return estimated value of Pi after all iterations
    var computePi = function () {
        var inCircle = 0;
        var i;
        for (i = 0; i <= ITERATIONS; i++) {
            if (generatePoint()) {
                inCircle++;
            }
        }
         return inCircle / ITERATIONS * 4;
    };

    var computePiWorker = function () {
        var inCircle = 0;
        var i;
        for (i = 0; i <= ITERATIONS; i++) {
            if (generatePoint()) {
                inCircle++;
            }
            if (i % EVERY == 0 && i != 0) {
                postMessage({type: 'progress', iteration: i, result: inCircle / i * 4});
            }
        }
        // return inCircle / ITERATIONS * 4;
        running = false;
        postMessage({type: 'status', message: 'Done'});

    };


    addEventListener('message', function (event) {

        if (running === false) {
            running = true;
            ITERATIONS = event.data.iteration;
            EVERY = event.data.every;
            postMessage({type: 'status', message: 'Start'});
            computePiWorker();
        }
    });

     //Performs synchronous calculations of Pi after click on button
     document.querySelector('#syncstart').addEventListener('click', function () {
     document.querySelector('#syncresult').innerHTML = computePi();
     });

    //consistent cycle run (Using SetTimeout and Recursion)
    /*var computePiWorkerRecursion = function (n) {
     n = n || 0;
     running = true;
     var inCircle = 0;
     if (n <= ITERATIONS) {
     if (generatePoint()) {
     inCircle++;
     }
     if (n % EVERY == 0 && n != 0) {
     postMessage({type: 'progress', iteration: n, result: inCircle / n * 4});
     }
     setTimeout(computePiWorker, 1, n+1);
     } else {
     running = false;
     postMessage({type: 'status', message: 'Done'});
     }
     };*/



})();
