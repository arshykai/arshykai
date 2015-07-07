var mbutton = document.querySelector('button');
var mhead = document.querySelector('h3');

setname();

function setname() {
	var mname = prompt('Please enter your name');
	localStorage.setItem('name', mname);
	mhead.innerHTML = 'Longboarding is cool, ' + mname; 
}

if (!localStorage.getItem('name')) {
	setname();
}
else {
	var pname = localStorage.getItem('name');
	mhead.innerHTML = 'Longboarding is cool, ' + pname;
}

mbutton.onclick = function() {
	setname();
}