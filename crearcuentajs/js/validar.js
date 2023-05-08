
function validar() {
	var nombre = document.getElementById("nombre").value;
	var email = document.getElementById("email").value;
	var contrasena = document.getElementById("contrasena").value;
	var confirmar_contrasena = document.getElementById("confirmar_contrasena").value;

// Validación del nombre
	if (nombre == "") {
		alert("Por favor, ingrese su nombre.");
		return false;
	} else if (nombre.length < 4) {
        alert("El nombre debe tener al menos 4 caracteres.");
        return false;
    }

// Validacion del email
	if (email == "") {
		alert("Por favor, ingrese su email.");
		return false;
	}

// Validacion de la contraseña
	if (contrasena == "") {
		alert("Por favor, ingrese su contraseña.");
		return false;
	} else if (contrasena.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return false;
    }

// Validacion de la confirmación de la contraseña
	if (confirmar_contrasena == "") {
		alert("Por favor, confirme su contraseña.");
		return false;
	}


	if (contrasena != confirmar_contrasena) {
		alert("Las contraseñas no coinciden.");
		return false;
	}

// Validacion del formato de email
	var email_regex = /^\S+@\S+\.\S+$/;
	if (!email_regex.test(email)) {
		alert("El formato de email es inválido.");
		return false;
	}

	return true;
}

