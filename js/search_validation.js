$(function() {

    $.validator.setDefaults({
        errorClass: 'invalid-feedback',
    highlight: function(element) {
      $(element).addClass('is-invalid');
    },
    unhighlight: function(element) {
      $(element).removeClass('is-invalid');
    },
    errorPlacement: function (error, element) {
      if (element.prop('type') === 'checkbox') {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    }
  });

  $.validator.addMethod("lettersonly", function(value, element) {
  return this.optional(element) || /^[a-z]+$/i.test(value);
  }, "Solo puede escribir letras"); 
    
    
    $("#search-validation").validate({
    rules: {
      search: {
        required: true,
        minlength: 3,
      },
    },
    messages: {
      "search": {
			required: "Busca algo canelo!",
            minlength: "Por favor, no escribas menos de {0} caracteres.",
		},	
    }
  });

	$("#search-validation").on('submit', function() {
		if ($('#search-validation').valid()) {
			alert("formulario válido");
		} else {
			alert("formulario no válido");
		}
	});

});