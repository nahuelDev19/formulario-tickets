function validarFormulario() {
    var cantidad = document.getElementById("cantidad").value;
    
    if (cantidad <=0 && cantidad > 5) {
      alert("solo se puede comprar hasta un maximo de 5 entradas.");
      return false; // Evita que se envíe el formulario.
    }
    
    // Otras validaciones aquí.
    return true; // Envía el formulario si todo está bien.
  }
  