define(["backbone",  "EntradaBinaria"],function(Backbone){ 

	 var app = Backbone.Model.extend({ 

	 	 defaults : { 

	 	 	 version  : "0.0.1" 

	 	 	} , 

	 	 	 initialize : function(){ 

	 	 	 console.log("inizialize model app")

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

    //---------------------------------------------------------

      $(".bits_entree").bind("keyup",function(){

        var _length_bits =  $(".bits_entree").val().length;

        if(_length_bits <= 16){

        $(".counter_bits").html("Van "+ _length_bits +" Bits")
      

        }



      })






       } // init 
      

       });// model 


	 new app(); 

	 });//define 