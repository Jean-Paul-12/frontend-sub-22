//Verifica si el usuario esta logeado
const user = sessionStorage.getItem('usuario');

if (!user) {
  // en caso de no estar logeado, redirige a la landing page
  if (['/views/dashboard.html'].includes(window.location.pathname)) {
    window.location.replace('../index.html');
  }
} else {
  // en caso de estar logeado, redirige al dashboard si el usuario intenta navegar a registro o login
  if (
    ['/views/registro.html', '/views/login.html'].includes(
      window.location.pathname,
    )
  ) {
    window.location.replace('dashboard.html');
  }
}

// Cierra la sesion, en el caso de esta demo solo remueve el usuario de la session storage; y luego, redirige
// a la landing page.
const cerrarSesion = () => {
  sessionStorage.removeItem('usuario');
  window.location.href = '../index.html';
};
