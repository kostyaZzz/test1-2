"use strict";


function writeInHtml() {
	document.write("Имя - "+ localStorage.getItem('name'));
	document.write('<br>');
	document.write("Фамилия - " + localStorage.getItem('lastname'));
	document.write('<br>');
	document.write("Отчество - " + localStorage.getItem('patronymic'));	
	document.write('<br>');
	document.write("Дата отправления - " + localStorage.getItem('departureDate'));	
	document.write('<br>');
	document.write("Дата прибытия - " + localStorage.getItem('arrivalDate'));
	document.write('<br>');
	document.write("Дистанция - " + localStorage.getItem('distance') + " km");
	document.write('<br>');
	document.write("Цена за км - " + localStorage.getItem('price') + " грн");
	document.write('<br>');
	document.write("Доставка - " + localStorage.getItem('where'));
	document.write('<br>');
	document.write("Стоимость - " + payment(localStorage.getItem('price'), localStorage.getItem('distance'), localStorage.getItem('where')));
}


function payment(price, distance, where=null){
	let result = 0;
	if (where != "null") {
		where = 10;
		result = price * distance + where;
	} else {
		result = price * distance;
	}
	
	return result.toFixed(2);
}

writeInHtml();