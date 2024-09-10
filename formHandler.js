// formHandler.js

function handleSubmit() {
    // Obtener los valores de los campos del formulario
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeatPassword').value;

    // Validar que todos los campos están llenos
    if (!username || !email || !password || !repeatPassword) {
        alert('Please fill in all fields.');
        return;
    }

    // Validar que las contraseñas coincidan
    if (password !== repeatPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Mostrar el mensaje de éxito
    document.getElementById('successModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('successModal').style.display = 'none';
}

// Cerrar el modal si el usuario hace clic fuera del contenido del modal
window.onclick = function(event) {
    const modal = document.getElementById('successModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
