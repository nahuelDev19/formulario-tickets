const boton = document.getElementById('resultado');
boton.addEventListener("click", mostrar);
  function mostrar(){
    const cantidad = document.getElementById("num").value;
    const pantalla = document.getElementById("pantalla");
    let camposValidos = nombreValido() && correoValido() && apellidoValido();

    if(cantidad < 6 && cantidad > 0 && camposValidos){
      texto = pagar(cantidad) + "";    
      let element = document.createElement('input');
      let hijo = document.createTextNode(texto);
      pantalla.innerText = texto;    
    }
  }

  function nombreValido(){
    let nombre = document.getElementById("nombre").value;
    return nombre.length > 3;
  }
  function apellidoValido(){
    let apellido = document.getElementById("apellido").value;
    return apellido.length > 4;
  }
  function correoValido(){
    let email = document.getElementById("correo").value;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let test = regexEmail.test(email);
    return test; 
  }

  function pagar(cant){
    let valor = 200;
    if(esJunior())
      valor = valor * 0.85;
    if(esTrainee())
      valor = valor * 0.5;
    if(esEstudiante())
      valor = valor * 0.2;
    return valor * cant;
  }
  
  function esJunior(){
    var categoria = document.getElementById("categoria").value;
    return "Junior" == categoria;
  }
  function esEstudiante(){
    var categoria = document.getElementById("categoria").value;
    return "Estudiante" == categoria;
  }
  
  function esTrainee(){
    var categoria = document.getElementById("categoria").value;
    return "Trainee" == categoria;
  }
  
