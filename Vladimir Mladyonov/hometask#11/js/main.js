(function(){
	function recursiveList (data) {
		var list = "";
		if (Array.isArray(data)) {
			list = extractBranch(data);
		}
        // Function which extract each branch from array of arrays
        function extractBranch(entry) {
        	var fullStr = "";
        	fullStr += "<ul>";
        	for (var i = 0; i < entry.length; i++){
        		if (Array.isArray(entry[i])) {
        			fullStr += extractBranch(entry[i]);
        		}else{
        			fullStr += ("<li>" + entry[i] + "</li>");
        		}
        	}
        	fullStr += "</ul>";
        	return fullStr;
        }
        return list;
      }

      function recursiveHeadings (data, weight) {
      	var fragment = document.createDocumentFragment();
      	var size = weight - 1;
      	if (Array.isArray(data)){
      		createHeading(data);
      	}

      	function createHeading(entry){
      		if (size < 6) { size++};
      		var element;
      		for (var i = 0; i < entry.length; i++) {
      			if (Array.isArray(entry[i])) {
      				(createHeading(entry[i]));
      			}else{
      				element = document.createElement("h" + size);
      				element.appendChild(document.createTextNode(entry[i] + " "));
      				fragment.appendChild(element);
      			}
      		}
      		size--;
      		return true;
      	}
      	return fragment;
      }

      function simpleValidation(form) {
      	var btn = document.getElementsByTagName('button')[0];
      	btn.addEventListener("click", confirm);

      	function confirm() {
      		var entryStr = "";
      		entryStr = document.getElementById("first-name").value;
      		entryStr = entryStr.trim();
      		if (!entryStr) {
      			document.getElementById("first-name").style.backgroundColor = "#ffaaaa";
      			alert("Please enter Your first name\nand try again.");
      		}else{
      			document.getElementById("first-name").style.backgroundColor = "#ffffff";
      			entryStr = document.getElementById("last-name").value;
      			entryStr = entryStr.trim();
      			if (!entryStr) {
      				document.getElementById("last-name").style.backgroundColor = "#ffaaaa";
      				alert("Please enter Your last name\nand try again.");
      			}else{
      				document.getElementById("last-name").style.backgroundColor = "#ffffff";

      				alert("Your data is sent to server.");
      			}
      		}
      	}
      	return true;
      }


    // Task 1
    var testArr = [1,2,[3,4,[6,7,8],9],10,11];
    var listDiv = document.getElementById('list');
    listDiv.innerHTML = recursiveList(testArr);
    
    // Task 2
    var headDiv = document.getElementById('headings');
    headDiv.appendChild(recursiveHeadings(testArr, 1));

    // Task 3
    var myForm = document.getElementById(form);
    simpleValidation(myForm);


  })();