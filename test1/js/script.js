"user strict";


document.getElementById('prof').classList.toggle('d-none');
document.getElementById('about').classList.toggle('d-none');
document.getElementById('exp').classList.toggle('d-none');


showProf.addEventListener("click", function() {
	document.getElementById('prof').classList.toggle('d-none');
    document.getElementById('prof').classList.toggle('d-block');
});

showAbout.addEventListener("click", function() {
	document.getElementById('about').classList.toggle('d-none');
    document.getElementById('about').classList.toggle('d-block');
});

showExp.addEventListener("click", function() {
	document.getElementById('exp').classList.toggle('d-none');
    document.getElementById('exp').classList.toggle('d-block');
});
