require.config({

  paths: {

    jquery: '../lib/jquery/jquery',

    underscore: '../lib/underscore',

    backbone: '../lib/backbone'

 }

});

require(["jquery" , "EntradaBinaria" , "backbone"], function($ , EntradaBinaria , backbone ) {

 
		

		
		bits = $(".bits_entree");
		
		
		$(".modular").bind("click",function(){
		
		bits_entree = $(bits).val();
		
		EntradaBinaria.procesar( $(".bits_entree").val());
		
		
		})
 
		// borrar datos
		
		$(".borrar").bind("click",function(){
		
		
		$(bits).val("");
		$(".bits_data").hide();
		$("#graph").html("").hide();
		$(".alert , .text_new").fadeIn("slow");
		
		
		})


 
});