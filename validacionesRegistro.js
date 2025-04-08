document.getElementById('registroForm').addEventListener('submit', function (event) {

  // Obtener los valores de los campos
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const primerApellido = document.getElementById('primerApellido').value;
  const contrasena = document.getElementById('contrasena').value;
  const segundoApellido = document.getElementById('segundoApellido').value;
  const confirmarContrasena = document.getElementById('confirmarContrasena').value;

  // Validar que las contraseñas coincidan
  if (contrasena !== confirmarContrasena) {
    alert('Las contraseñas no coinciden');
  }else{
    alert('Registro exitoso');
    return;
  }
  
});