		define([ 'jquery' , 'underscore', "../../lib/backbone"], function($ , _ , Backbone) {

			return init = Backbone.Model.extend({

				default : {




				} ,

				initialize : function(){

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


				}

			});// model
 
		
		});//define