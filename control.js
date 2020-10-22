function validarFormulario(){
    
    var formulario = document.getElementById('formulario');
    var email = document.getElementById('inputName').value;
    var password = document.getElementById('inputPass').value;
    var expresion= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if(!email){
        alert('El campo email no debe estar vacio');
        return false
    }else if(!expresion.test(email)){
        alert('Debe incluir una direccion de correo Valida');
        formulario.reset();
        return false
    }else if(!password){
        alert('Debe ingresar su contraseña');
        return false
    } 
    formulario.submit();
}
