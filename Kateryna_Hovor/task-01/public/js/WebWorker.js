/**
 * Created by kate on 13/07/16.
 */
var WebWorker = (function () {

    //Worker's instance
    var worker = null;
    var defaultOptions = {
        button: null,
        resultDiv: null,
        form: null,
        inputValues: null
    };

    var options = {
        iteration: null,
        every: null
    };

    var init = function (src, options) {
        console.log(options);
        if (options && Object.prototype.toString.call(options) === "[object Object]") {
            Object.assign(defaultOptions, options);
            if (window.Worker && !worker) {
                worker = new Worker(src);
                worker.addEventListener("message", messageHandler, true);
                worker.addEventListener("error", errorHandler, true);
                options.button.onclick = startWorker;
                return worker;
            }
        }
        return false;
    };


    //checks if it's numeric/not empty value
    function isNumericVals(arr) {
        for (var i = 0; i < arr.length; i++) {
            //checks if it's numeric/not empty value
            if (isNaN(parseInt(arr[i].value)) && !isFinite(arr[i].value)) {
                return false;
            }
        }
        return true;
    }

    function messageHandler(e) {
        var messageType = e.data.type;
        switch (messageType) {
            case ("status"):
                setRunningState.call(WebWorker,e.data.message === "Start");
                break;
            case ("progress"):
                defaultOptions.resultDiv.innerHTML +=
                    "<tr><td>" + e.data.iteration + "</td>" +
                    "<td>" + e.data.result + "</td>" +
                    "<td>" + e.data.delta + "</td></tr>";
                break;
            default:
                break;
        }
    }


    function errorHandler(e) {
        console.warn("error: " + e.message);
    }


    function setRunningState(p) {
        debugger;
        // while running, the stop button is enabled and the start button is not
        defaultOptions.button.disabled = p;
    }

    function startWorker() {
        //clear the table
        defaultOptions.resultDiv.innerHTML='';
        if (!isNumericVals(defaultOptions.inputValues)) {
            errorHandler({message:'Not a number. Please input proper values'});
            return false;
        }
        //Setting options from input values
        options.iteration = defaultOptions.inputValues[0].value;
        options.every = defaultOptions.inputValues[1].value;
        worker.postMessage(options);
    }

    function stopWorker() {
        worker.terminate();
        setRunningState(false);
    }
    /*function addToTable() {
    }*/

    return {
        init: init
    }

}());



