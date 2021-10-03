import jQuery from "jquery";
window.$ = window.jQuery = jQuery;


jQuery(function ($) {

	$("#form__call-do").submit(function (e) {

		e.preventDefault();
		registr();
	});

})

function registr() {
	var data = $("#form__call-do").serialize()

	$.ajax({
		type: "POST",
		url: "../telegram.php", //"register_user.php",
		data: data,
		dataType: 'html', //на всякий добавил тип ожидаемых данных
		success: callback
	});
}

function callback(response) {
	$(".request__form").addClass("response");
}

//

jQuery(function ($) {

	$("#form__call-do0").submit(function (e) {
		e.preventDefault();
		registr0();
	});

})

function registr0() {
	var data2 = $("#form__call-do0").serialize()

	$.ajax({
		type: "POST",
		url: "../telegram2.php", //"register_user.php",
		data: data2,
		dataType: 'html', //на всякий добавил тип ожидаемых данных
		success: callback0
	});
}

function callback0(response) {
	$(".request__form2").addClass("response");
}

//

jQuery(function ($) {

	$("#form__call-do1").submit(function (e) {
		e.preventDefault();
		registr3();
	});

})

function registr3() {
	var data2 = $("#form__call-do1").serialize()

	$.ajax({
		type: "POST",
		url: "../telegram2.php", //"register_user.php",
		data: data2,
		dataType: 'html', //на всякий добавил тип ожидаемых данных
		success: callback3
	});
}

function callback3(response) {
	$(".request__form2").addClass("response");
}

//

jQuery(function ($) {

	$("#form__call-do2").submit(function (e) {
		e.preventDefault();
		registr4();
	});

})

function registr4() {
	var data2 = $("#form__call-do2").serialize()

	$.ajax({
		type: "POST",
		url: "../telegram.php", //"register_user.php",
		data: data2,
		dataType: 'html', //на всякий добавил тип ожидаемых данных
		success: callback4
	});
}

function callback4(response) {
	$(".request__form").addClass("response");
}

