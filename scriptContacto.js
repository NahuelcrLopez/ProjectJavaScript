



$(function () {

    $("#datosPersonales").submit(function () {
      let nombre = $("#nombre").val();
      let Gmail = $("#Gmail").val();
      $("#DtPersonales").text(`Nombre: ${nombre} - Correo: ${Gmail}`);
      alert(`Hola ${nombre}`);
    });
    $("p").css("background-color", "grey");
  });
  
  window.addEventListener("load", function () {
    console.log("Todos los elementos de la ventana están cargados");
  });
  


$(document).ready(function(){
    $("#btn1").click(function(){
      alert("Text: " + $("#test").text());
    });
    $("#btn2").click(function(){
      alert("HTML: " + $("#test").html());
    });
  });

  // Formulario nuevo
  const $form = document.querySelector('#form')
    const $buttonMailto = document.querySelector('#gmailEvent')

    $form.addEventListener('submit', handleSubmit)

    function handleSubmit(event) {
      event.preventDefault()
      const form = new FormData(this)
      $buttonMailto.setAttribute('href', `mailto:Nahuellopez073@gmail.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
      $buttonMailto.click()
    }