var element1 = document.getElementById('user-phone-1');
var element2 = document.getElementById('user-phone-2');
var element3 = document.getElementById('user-phone-3');
var maskOptions = {
	mask: '+7(000)000-00-00',
	lazy: false
}

var mask1 = new IMask(element1, maskOptions);
var mask2 = new IMask(element2, maskOptions);
var mask3 = new IMask(element3, maskOptions);


//// inputMask
//let inputs = document.querySelectorAll('input[type="tel"]');
//let im = new Inputmask('+7 (999) 999-99-99');
//im.mask(inputs);

//// validate

//function validateForms(selector, rules) {
//	new window.JustValidate(selector, {
//		rules: rules,
//		submitHandler: function (form, values, ajax) {
//			console.log(form);

//			let formData = new FormData(form);

//			fetch("telegram.php", {
//				method: "POST",
//				body: formData
//			})
//				.then(function (data) {
//					console.log(data);
//					console.log('Отправлено');
//					form.reset();
//				});
//		}
//	});
//}

//validateForms('.form', { email: { required: true, email: true }, fio: { required: true }, tel: { required: true } });