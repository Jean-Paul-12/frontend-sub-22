document.getElementById('form-login').addEventListener('submit', (e) => {
  e.preventDefault();

  const user = e.target.usuario.value.trim().toLowerCase();

  // Con efectos de realizar esta demo, se revisa si el usuario es una de las dos opciones posibles.
  // En caso de no ser ni administrador, ni usuario, se mostrara un mensaje de error en la pagina.
  if (!['administrador', 'usuario'].includes(user)) {
    document.getElementById('err-msg').textContent =
      'El usuario es incorrecto.';
    return;
  }

  document.getElementById('err-msg').textContent = '';
  console.log('user', user);
  sessionStorage.setItem('usuario', user);
  window.location.replace('dashboard.html');
});
