function iniciar_sesión() {
    let email = document.getElementById('email').value;
    let contraseña = document.getElementById('contraseña').value;

    if (email==="") {
        alert('Por favor, ingrese su email');
    } else if(contraseña===""){
        alert('Por favor, ingrese una contraseña');
    } else {
    localStorage.setItem('email', email);
    location.href='index.html';
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('ingreso').addEventListener('click', ()=>{
        iniciar_sesión();
    }) 
})

