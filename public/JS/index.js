if (window.location.pathname == '/feed') {
document.addEventListener("DOMContentLoaded",function(){

window.onload = setInterval(date, time, username);
var username = "#username";
var date = new Date();
var time = new Date();
var day = date.getDate();
var month = date.getMonth()+1;
var year = date.getFullYear();
var hours = time.getHours();
var minutes = time.getMinutes();
var seconds = time.getSeconds();
var AM_PM = "";

if (hours < 12) {
	AM_PM = "AM";
}else{
	AM_PM = "PM";
}

if (hours == 0){
	hours = "12";
}

if (hours > 12){
	hours = hours - 12;
}

if (seconds < 10){
	seconds = "0" + seconds
}

if (minutes < 10){
	minutes = "0" + minutes
}

if (hours < 10){
	hours = "0" + hours
}


date = month + "/" + day + "/" + year; 
time = hours+':'+minutes+ " " + AM_PM;

var space = document.getElementById("comment_space");
var submit = document.getElementById("usrSub");

document.getElementById("comments").addEventListener("submit",
	function(event){
		event.preventDefault();
		console.log("submit");
		// var newComment_1 = document.getElementById("users_textbox").value + date;
	
	 	// ajax call
	 	$.ajax({
	 		url: document.querySelector("#comments").action,
	 		method: document.querySelector("#comments").method,
	 		data: {
	 			usr_comment: document.getElementById("users_textbox").value
	 		},
	 		dataType: "json",
	 		complete: function(response){
	 			// to do: update or whatever here...
	 			// var newComment = document.getElementById("users_textbox").value;

	 			var elTime = document.createElement("span");
	 			elTime.innerText = time;
	 			elTime.className = "right";

	 			var elDate = document.createElement("span");
	 			elDate.innerText = date;
	 			elDate.className = "above";

	 			var elUsername = document.createElement("span");
	 			elUsername.innerText = document.getElementById("uname").value;
	 			elUsername.className = "username";

	 			var elContent = document.createElement("p");
	 			elContent.innerText = document.getElementById("users_textbox").value;
	 			elContent.className = "com";			
	 			// get value of hidden input
	 			// set innerText of new element
	 			// give class to element

	 			// clears textbox
			 	document.getElementById("users_textbox").value =  "";

			 	// builds new comment
			 	var elNewComment = document.createElement("div");
			 	elNewComment.className = "comment";
			 	elNewComment.id = "msg_" + (space.querySelectorAll(".comment").length+1)

			 	// sets content, time and username of new comment
			 	// elNewComment = newComment;

			 	elNewComment.appendChild(elUsername);
			 	elNewComment.appendChild(elTime);
			 	elNewComment.appendChild(elContent);
			 	// appends new comment to comment area
			 	space.appendChild(elNewComment);
	 		}
	 	});

	});
});
}

if (window.location.pathname == '/profile') {
document.addEventListener("DOMContentLoaded",function(){
	up.onclick=function(){
		document.getElementById('up').style.display="none"
		document.getElementById('fieldsetProfile').style.display="block"
	}
	editSubmit.onclick = function(){
		document.getElementById('fieldsetProfile').style.display="none"
		document.getElementById('up').style.display="block"
	}
});
}