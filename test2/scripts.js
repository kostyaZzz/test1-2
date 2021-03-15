"use strict";

document.forms.createLocal.onsubmit = function() {
	localStorage.setItem('name', this.name.value);
	localStorage.setItem('lastname', this.lastname.value);
	localStorage.setItem('patronymic', this.patronymic.value);
	localStorage.setItem('departureDate', this.departureDate.value);
	localStorage.setItem('arrivalDate', this.arrivalDate.value);
	localStorage.setItem('distance', this.distance.value);
	localStorage.setItem('price', this.price.value);
	if (document.getElementById('check').checked) {
		localStorage.setItem('where', this.where.value);
	} else {
		localStorage.setItem('where', null);
	}
	return true;
};

document.getElementById('check').onclick = function() {
	if(document.getElementById('check').checked){
		document.getElementById('radio1').style.display = "block";
		document.getElementById('radio2').style.display = "block";
} 	else {
		document.getElementById('radio1').style.display = "none";
		document.getElementById('radio2').style.display = "none";
	}
}
