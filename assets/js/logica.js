function validarFormulario() {
    var cantidad = document.getElementById("cantidad").value;
    
    if (cantidad <= 0 || cantidad > 5) {
      alert("Solo se puede comprar desde 1 hasta un máximo de 5 entradas.");
      return false; // Evita que se envíe el formulario.
    }
    
    // Otras validaciones aquí.
    return true; // Envía el formulario si todo está bien.
  }
  