//Verifica si el usuario esta logeado
if (sessionStorage.getItem('usuario') !== 'administrador') {
  // en caso de no estarlo, oculta los elementos unicos del administrador.
  document.getElementById('adminLabel').style.display = 'none';
  document.getElementById('adminUserManagementBtn').style.display = 'none';
}
