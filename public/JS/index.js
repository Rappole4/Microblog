// document.addEventListener("DOMContentLoaded",function(){


// document.getElementById("topic" && "r1" && "a1").addEventListener("submit_0" || "submit_1" || "submit_2")
// 	function(event){

// var newTopic = document.getElementById("daily_top").value;
// var newRob_post = document.getElementById("a1").value;
// var newJames_post = document.getElementById("a2").value

// document.getElementById("daily_top").value = "";
// document.getElementById("a1").value = "";
// document.getElementById("a2").value = "";


// }
// });

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

