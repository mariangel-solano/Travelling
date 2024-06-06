const $submit = document.getElementById("submit"),
    $password = document.getElementById("password"),
    $username = document.getElementById("username"),
    $visible = document.getElementById("visible");

document.addEventListener("change", (e) => {

    if (e.target === $visible) {
        if ($visible.checked === false) $password.type = "password";
        else $password.type = "text";
    }

})
document.addEventListener("click", (e) => {

    if (e.target === $submit) {
        if ($password.value !== "" && $username.value !== "") {
            e.preventDefault();
            window.location.href = "index.html";
        }
    }

})


function Loginbtn() {
    document.getElementById('login-card').style.display = 'block';
    document.getElementById('signup-card').style.display = 'none';
}

function Signupbtn() {
    document.getElementById('signup-card').style.display = 'block';
    document.getElementById('login-card').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', Loginbtn);





var registeredUsername = '';
var registeredPassword = '';

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    
    // Captura los valores de los campos
    registeredUsername = document.getElementById('signup-username').value;
    registeredPassword = document.getElementById('signup-password').value;
    
    // Mostrar mensaje de cuenta creada
    var signupMessage = document.getElementById('signup-message');
    signupMessage.textContent = 'Cuenta creada correctamente';
    
    // Cambiar a la tarjeta de inicio de sesión después de 2 segundos
    setTimeout(function() {
        signupMessage.textContent = '';
        document.getElementById('signup-card').style.display = 'none';
        document.getElementById('login-card').style.display = 'block';
    }, 500);
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    
    // Captura los valores de los campos
    var loginUsername = document.getElementById('login-username').value;
    var loginPassword = document.getElementById('login-password').value;
    var loginMessage = document.getElementById('login-message');
    
    // Verifica si los datos coinciden
    if (loginUsername === registeredUsername && loginPassword === registeredPassword) {
        loginMessage.style.color = 'green';
        loginMessage.textContent = 'Inicio de sesion correcto';
        setTimeout(function() {
            window.location.href = '../index.html'; // Redirigir a la dirección deseada
        }, 1000);
    } else {
        loginMessage.style.color = 'red';
        loginMessage.textContent = 'Usuario o Contraseña Incorrecto';
    }
});

document.getElementById('visible').addEventListener('change', function() {
    var passwordField = document.getElementById('login-password');
    if (this.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});

function Signupbtn() {
    document.getElementById('login-card').style.display = 'none';
    document.getElementById('signup-card').style.display = 'block';
}

function Loginbtn() {
    document.getElementById('signup-card').style.display = 'none';
    document.getElementById('login-card').style.display = 'block';
}