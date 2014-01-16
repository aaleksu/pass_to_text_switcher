document.addEventListener('DOMContentLoaded', function(){
var forms = document.forms;
    console.log(chrome.tabs);
for(var i = 0; i < forms.length; i++){
	formInputs = forms[i].getElementsByTagName('input');
	for(var j = 0; j < formInputs.length; j++){
		if(formInputs[j].getAttribute('type') == 'password'){
			formInputs[j].setAttribute('type', 'text');
		}
	}
}
});