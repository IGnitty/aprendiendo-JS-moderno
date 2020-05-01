//variables globales
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const btnEnviar = document.querySelector('#enviar');
const reset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');

// Event listeners
eventListeners();

function eventListeners() {
	//inicio de la aplicacion y dehabilitar gifs
	document.addEventListener('DOMContentLoaded', inicioApp);

	// Canpos del formulario

	email.addEventListener('blur', validarCampo);
	asunto.addEventListener('blur', validarCampo);
	mensaje.addEventListener('blur', validarCampo);

	//boton de enviar

	btnEnviar.addEventListener('click', enviarEmail);

	//boton de reset

	reset.addEventListener('click', LimpiarCampos);
}

//Funciones

function inicioApp() {
	//deshabilitar el boton envio
	btnEnviar.disabled = true;
}

//Valida que el campo tenga algo escrito

function validarCampo() {
	//funcion para validar la longitud del texto y que no este vacio
	validarLongitud(this);

	//validar unicamente el email en formato email
	if (this.type === 'email') {
		validarEmail(this);
	}

	let errores = document.querySelectorAll('.error');

	if (email.value !== '' && asunto.value !== '' && mensaje !== '') {
		if (errores.length === 0) {
			btnEnviar.disabled = false;
		}
	} else {
		btnEnviar.disabled = true;
	}
}

function validarLongitud(campo) {
	if (campo.value.length > 0) {
		campo.style.borderBottomColor = '#03fc30';
		campo.classList.remove('error');
	} else {
		campo.style.borderBottomColor = 'red';
		campo.classList.add('error');
	}
}

//validar el email con el @

function validarEmail(campo) {
	const mensaje = campo.value;
	if (mensaje.indexOf('@') !== -1) {
		campo.style.borderBottomColor = '#03fc30';
		campo.classList.remove('error');
	} else {
		campo.style.borderBottomColor = 'red';
		campo.classList.add('error');
	}
}

//cuando se presiona el boton enviar email
function enviarEmail(event) {
	event.preventDefault();
	//spinner al presionar enviar
	const spinnerGIF = document.querySelector('#spinner');
	spinnerGIF.style.display = 'block';

	// gif que envia el email

	const enviado = document.createElement('img');
	enviado.src = 'img/mail.gif';
	enviado.style.display = 'block';

	//quitar spinner y mostrar el correo eniado luego de 2 seg
	//#loaders.row
	setTimeout(function () {
		spinnerGIF.style.display = 'none';
		document.querySelector('#loaders.row').appendChild(enviado);
		setTimeout(function () {
			enviado.remove();
			formulario.reset();
		}, 4000);
	}, 2000);
}

//limpiar todos los campos del formulario

function LimpiarCampos(event) {
	event.preventDefault();
	formulario.reset();
}
