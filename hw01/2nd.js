var arr = [true, 1, 2, 'Evgeniy', 3, 4, true, 5, 6, 'Hello, World!', 7, 8, false, 9, 10, Object, 11, false, true];

function arrCount(arr, step) {
	var newArr = [];

	if (step === 0) {
    		return 'Wrong step';
	}

	for (i=0; i<arr.length; i++) {
    		if ((i+1) % step == 0) {
        			newArr.push(arr[i]);
    		}
	}

return newArr;

}

arrCount(arr, 1);