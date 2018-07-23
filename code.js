

//var xOScore = new Array(2); 
var repeat = new Array() , index = -1;
var count = "X";
var winWhole = false,win1 ,win2 , win3 , win4 , win5;
jQuery(document).ready(function(){
	$("td").on("click" , function(){
		if (winWhole) {
			alert("game Won");
		} else if (!searchArray(repeat, $(this).attr("id"))){
			 
			 
			 //saves the entery so that it isn't used again
			repeat[++index] = $(this).attr("id") ;
			
			
			
			if (count == "X"){
				$(this).text("X");
				count = "O";
			}else{
				$(this).text("O")
				count = "X";
			}
			//cheacks the game rules
			gameCheak();
		} else {
			alert("this is pressed");
		}
	});
	});

function searchArray (arr , searchElement){
	for(var x = 0 ; x < arr.length ; x++){
		if(arr[x] == searchElement){
			return true;
		}
	}
	return false;
}
//when clear button is pressed
function clearField(){
	for (var x = 0 ; x < 9 ; x++){
		$("#box"+x).text(x);
	}
	repeat = new Array();
	index = -1;
	winWhole = false;
	count = "X"
}

function gameCheak(){
	win1 = win2 = win3 = win4 = win5 = true;
		//cheaking for game score
		//cheak dignol
		var temp = $("#box0").text();
		for (var x = 4 ; x < 9 ; x+= 4){
			if(temp != $("#box"+x).text()){
				win1 = false;
				break;
			}else{
				win1 = true;
			}
		}
		//cheak anti dignol
		temp = $("#box6").text();
		for (var x = 4 ; x >= 2 ; x-= 2){
			if(temp != $("#box"+x).text()){
				win5 = false;
				break;
			}else{
				win5 = true;
			}
		}
		//cheack row
		for (var y = 0 ; y < 9  ; y+= 3){
			
			temp = $("#box"+y).text();
			for (var x = y+1 ; x < y+3 ; x+= 1){
				if(temp != $("#box"+x).text()){
					win2 = false;
					break;
				}else {
					win2 = true;
				}
			}
			if(win2)
				finaly();
		}
		//cheak col
		for (var y = 0 ; y < 3  ; y+= 1){
			
			temp = $("#box"+y).text();
			for (var x = y+3 ; x <= y+6; x+= 3){
				if(temp != $("#box"+x).text()){
					win3 = false;
					break;
				}else {
					win3 = true;
				}
			}
			if(win3)
				finaly();
		}
		finaly();
		
}
function finaly(){
		winWhole = win1 || win5  || win2 || win3;
		if(winWhole)
			alert("win");
}
	
