function message(){
	var Name = document.getElementById('firstname');
	var Name2 = document.getElementById('secondname');
	var email = document.getElementById('email');
	var cp = document.getElementById('cp')
		var servicetype = document.getElementById('servicetype')
	var msg = document.getElementById('msg');
	const success = document.getElementById('success');
	const danger = document.getElementById('danger');

	if(Name.value === '' || Name2.value === '' || email.value === '' || cp.value === '' || msg.value === '')
	 {danger.style.display = 'block';

	 }
	 else{
	 	setTimeout (() => {
	 		Name.value = '';
	 		Name2.value = '';
	 		email.value = '';
	 		cp.value = '';
	 		msg.value = '';
	 		servicetype.value = '';
	 			 	}, 2000);
	 	success.style.display = 'block'; 
	 }


	 	setTimeout(() => {
	 		danger.style.display = 'none';
	 		success.style.display = 'none';
	 	}, 4000);

}