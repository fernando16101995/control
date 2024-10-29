document.addEventListener('DOMContentLoaded', function () {
    // Manejador para el formulario de inicio de sesión
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Aquí puedes agregar lógica para validar el usuario y contraseña
            window.location.href = 'reservas.html';
        });
    }

    // Manejador para el formulario de registro
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Aquí puedes agregar lógica para registrar al usuario
            window.location.href = 'reservas.html';
        });
    }

    // Manejador para la selección de horarios
    const timeSlots = document.querySelectorAll('.time-slot');
    if (timeSlots.length > 0) {
        timeSlots.forEach(slot => {
            slot.addEventListener('click', function () {
                if (this.classList.contains('unavailable')) {
                    alert('Este horario no está disponible.');
                } else {
                    this.classList.toggle('selected');
                }
            });
        });
    
        document.getElementById('saveReservation').addEventListener('click', function () {
            const selectedSlots = document.querySelectorAll('.time-slot.selected');
            if (selectedSlots.length === 0) {
                alert('Por favor, selecciona al menos un horario.');
                return;
            }
    
            selectedSlots.forEach(slot => {
                slot.classList.remove('selected');
                slot.classList.add('unavailable');
            });
    
            alert('Reserva guardada.');
        });
    }

    // Manejador para el botón de "Regresar"
    const goBackButton = document.getElementById('goBack');
    if (goBackButton) {
        goBackButton.addEventListener('click', function () {
            window.location.href = 'index.html';
        });
    }
});
