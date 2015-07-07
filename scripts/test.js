var myimage = document.querySelector('img');

myimage.onclick = function() {
	var mysrc = myimage.getAttribute('src');
	if (mysrc === 'images/testimage.jpg') {
		myimage.setAttribute ('src', 'images/testimage1.jpg');
	}
	else {
		myimage.setAttribute ('src', 'images/testimage.jpg');
	}
	
	
	
	
var mbutton = document.querySelector('button');
var mhead = document.querySelector('h3');

function setname() {
	var mname = prompt('Please enter your name');
	localStorage.setItem('name', mname);
	mhead.innerHTML = 'Longboarding is cool, ' + mname; 
}
		
if (!(localStorage.getItem('name'))) {
	setname();
}
else {
	var storedname = localStorage.getItem('name');
	myhead.innerHTML = 'Longboarding is cool, ' + storedname;
}

mbutton.onclick = function() {
	setname;
}