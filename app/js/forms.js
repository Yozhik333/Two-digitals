var element = document.getElementById('user-phone');
var maskOptions = {
	mask: '+7(000)000-00-00',
	lazy: false
}

var mask = new IMask(element, maskOptions);


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