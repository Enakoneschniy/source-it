	window.onload = function(){

	

	var slide = document.getElementsByClassName("slider");
	console.log(slide);
	function hideall(){                    // hides all sublinks
	for(var  i=0; i<slide.length; i++){
	slide[i].style.display = "none";
	}
	}


	var box = document.getElementsByClassName("block");   // // hides all text  in open/close
	for(var  j=0; j<box.length; j++){
	box[j].style.display = "none";
	}
	



	var lynks = document.getElementsByTagName("a");
	
		
	for(var  i=0; i<lynks.length; i++){
	

	this.addEventListener("click", click, false)}
	





	 function click(ev)  {
	
	 ev.stopPropagation();
	 ev.preventDefault(); 
	
	 var useful = ev.target.textContent
	 switch(useful) {
	   case "link1":
	 hideall();
	   slide[0].style.display = "block";
	   
	break;
	 	  
	   case "link2":
	    hideall();
	   slide[1].style.display = "block";
	   
	   
	break;

	   case "link3":
	    hideall();
	   slide[2].style.display = "block";
	   
	break;
	   case "link4":
	   hideall();
	   slide[3].style.display = "block";
	break;
	   case "open/close":
	 if(ev.target.parentNode.parentNode.className =="open"){
	 ev.target.parentNode.parentNode.childNodes[3].style.display = "none";	
	 ev.target.parentNode.parentNode.className ="box"
	 }  
	 else{
	ev.target.parentNode.parentNode.childNodes[3].style.display = "block";
	ev.target.parentNode.parentNode.className="open";}
	break;
		   case "tab1":
		   document.getElementById("tab2").style.display = "none";
		   document.getElementById("tab3").style.display = "none";
		   document.getElementById("tab1").style.display = "block";



		   break;
		   case "tab2":
		   document.getElementById("tab2").style.display = "block";
		   document.getElementById("tab3").style.display = "none";
		   document.getElementById("tab1").style.display = "none";



		   break;
		   case "tab3":
		   document.getElementById("tab2").style.display = "none";
		   document.getElementById("tab3").style.display = "block";
		   document.getElementById("tab1").style.display = "none";

	   
	   
	break;


	default: console.log("please click on link!!!");
	} //end of switch 












	}//end of click































	}//eof
