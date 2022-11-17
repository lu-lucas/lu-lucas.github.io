  let perfil = document.getElementById("profileInfo");
  perfil.addEventListener("submit", function (event) {
      if (!perfil.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
      } else {
          guardarDatos();
          event.preventDefault();
          event.stopPropagation();
      }
      perfil.classList.add('was-validated')
  }, false)

function guardarDatos() {
    let primerNombre = document.getElementById('primerNombre');
    localStorage.setItem('primerNombre', primerNombre.value);
    primerNombre.value = localStorage.getItem('primerNombre');

    let segundoNombre = document.getElementById('segundoNombre');
    localStorage.setItem('segundoNombre', segundoNombre.value);
    segundoNombre.value = localStorage.getItem('segundoNombre');

    let primerApellido = document.getElementById('primerApellido');
    localStorage.setItem('primerApellido', primerApellido.value);
    primerApellido.value = localStorage.getItem('primerApellido');

    let segundoApellido = document.getElementById('segundoApellido');
    localStorage.setItem('segundoApellido', segundoApellido.value);
    segundoApellido.value = localStorage.getItem('segundoApellido');

    let telContacto = document.getElementById('telContacto');
    localStorage.setItem('telContacto', telContacto.value);
    telContacto.value = localStorage.getItem('telContacto');
}

document.addEventListener("DOMContentLoaded", (e) => {

    let correo = localStorage.getItem('email');
    contactEmail.value = correo;

    document.getElementById('telContacto').value = localStorage.getItem('telContacto');
    document.getElementById('segundoApellido').value = localStorage.getItem('segundoApellido');
    document.getElementById('primerApellido').value = localStorage.getItem('primerApellido');
    document.getElementById('segundoNombre').value = localStorage.getItem('segundoNombre');
    document.getElementById('primerNombre').value = localStorage.getItem('prim erNombre');

})
