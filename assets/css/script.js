
const boton = document.getElementById('resultado');
boton.addEventListener("click", mostrar);

  function mostrar(){
    const cantidad = document.getElementById("num").value;
    const pantalla = document.getElementById("pantalla");
    if(cantidad < 6 && cantidad > 0){
      texto = "Monto a pagar: "+pagar(cantidad) + "!"; //texto con lo que hay que pagar
      /*
      let element = document.createElement('p');
      let hijo = document.createTextNode(texto);
      //pantalla.appendChild(hijo);   
      */              
      pantalla.innerText = texto;
    }
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