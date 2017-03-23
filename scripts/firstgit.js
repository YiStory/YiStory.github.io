// var myHeading = document.querySelector('h1');
// myHeading.innerHTML = 'Hello world!';

// function multiply(num1,num2) {
//   var result = num1 * num2;
//   return result;
// }
// document.querySelector('html').onclick=function(){
// 	alert("hi, you click me.;")
// }

var myImage = document.querySelector('img');
myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === "images/firefox-icon.png"){
		myImage.setAttribute('src','images/firefox-icon1.png');
	}else{
		myImage.setAttribute('src','images/firefox-icon.png');
	}

}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName = prompt('please enter your name:');
	localStorage.setItem('name',myName);
	myHeading.innerHTML='welcome ' + myName;
}
if (!localStorage.getItem('name')) {
	setUserName();
}else{
	var storeName = localStorage.getItem('name');
	myHeading.innerHTML='welcome ' + storeName;
}
myButton.onclick = function(){
	setUserName();
}