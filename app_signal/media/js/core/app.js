jQuery(document).ready(function($) {
	
	bits = $(".bits_entree");

	


	$(".modular").bind("click",function(){

		bits_entree = $(bits).val();
 
		EntradaBinaria.validar(bits_entree);


	})



// borrar datos

	$(".borrar").bind("click",function(){


		$(bits).val("");


	})

});

