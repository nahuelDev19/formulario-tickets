const boton = document.getElementById('resultado');
boton.addEventListener("click", mostrar);
  function mostrar(){
    const cantidad = document.getElementById("num").value;
    const pantalla = document.getElementById("pantalla");
    let camposValidos = nombreValido() && correoValido() && apellidoValido();

    if(cantidad < 6 && cantidad > 0 && camposValidos){
      let texto = pagar(cantidad) + "";    
      let element = document.createElement('input');
      let hijo = document.createTextNode(texto);
      pantalla.innerText = texto;    
    }
  }

  function nombreValido(){
    let nombre = document.getElementById("nombre").value;
    if(nombre.length<3){
      return alert("el nombre debe tener un minimo de 3 letras")
    }
    return nombre.length >= 3;
  }
  function apellidoValido(){
    let apellido = document.getElementById("apellido").value;
    if(apellido.length<4){
      return alert("el apellido debe tener un minimo de 4 letras")
    }
    return apellido.length >= 4;
  }
  function correoValido(){
    let email = document.getElementById("correo").value;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let test = regexEmail.test(email);
    if(!test){
      return alert("el campo email deba estar completo")
    }
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
    let categoria = document.getElementById("categoria").value;
    return "Junior" == categoria;
  }
  function esEstudiante(){
    let categoria = document.getElementById("categoria").value;
    return "Estudiante" == categoria;
  }
  
  function esTrainee(){
    let categoria = document.getElementById("categoria").value;
    return "Trainee" == categoria;
  }
  
