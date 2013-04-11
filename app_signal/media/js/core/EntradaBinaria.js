define(["chart", "message"], function($ , message ) {
 
    EntradaBinaria = {}


   return EntradaBinaria  = {

	conf : {
 
	 MAX_SIZE : 16 , 
	 
	 VALID :  false ,

	 intRegex  : /[0-1 -()+]+$/ ,


	} ,



	validar : function(bits_data , conf ,data_valid ){

 	var is_valid =  false;
 
	is_valid =  ( data_valid != null && bits_data.length == conf.MAX_SIZE  && data_valid[0].length == conf.MAX_SIZE ) ? true  : false ;

 	
 	if(is_valid){

 			 
 		this.graficar(bits_data)

 	}else{


 		var valid_data_alternative = (( data_valid != null ) ? " Los datos validos son :" + data_valid[0] : "Pero no son validos") ;

 		var help; 

 		if(bits_data.length > 0 ){


 		help = " Hay <strong>" + bits_data.length + "</strong> Bits , " +valid_data_alternative ;

 			
 	}else{


 		 		help = "Ingresa al menos 2 Bytes";


 	}

		message.alert(help);

 	}

 

	} ,


	procesar : function(bits){


	var bits_data = bits;

	var conf = this.conf; 

	var data_valid =  bits.match(conf.intRegex);


	this.validar(bits_data , conf ,data_valid );

	},

	graficar : function(bits_to_graph){

// begin graph
//********************************************************************************************
//*******************************************************************************************
// quitamos todo lo que haya en la pantalla para mostrar la grafica


	// desencadenamos el evento ...
	$(".bits_data")
					.show()
  					.html($(".bits_entree").val())
					.delay(1200)
					.animate( { letterSpacing : "51px" , opacity : 1},800);


	$(".alert , .text_new").fadeOut("slow"); // octulamos  los elementos anteriores

	$("#graph").show();
//********************************************************************************************
//*******************************************************************************************



	var d1 = [];

	var d2 = [];

// ********************************************************************************************

	// vT = vp * sen ( 2 * PI * f1 * t )

	var vT ; // forma de la onda FSK binaria 

 	var A = (! isNaN(  $("#value_amplitud").val()) ) ?  $("#value_amplitud").val() : 20; //amplitud

 	f1 = (! isNaN(  $("#value_bit_0").val()) ) ?  $("#value_bit_0").val() : 1;   // para 0

 	f2 = (! isNaN(  $("#value_bit_1").val()) ) ?  $("#value_bit_1").val() : 3;   // para 1 

	var f = 1 / A ; //desplazamientos de igual magnitud pero sentidos opuestos de la 
		         //frecuencia de la señal 

		    	 // t = tiempo
	 
//********************************************************************************************
//*******************************************************************************************

     for (var current_bit = 0; current_bit < 16; current_bit++) {
     	

     	var offset =  current_bit + 1 ;
 

     	if ( bits_to_graph[current_bit] == 1){ // cuando el BIT es 1

 
			for (var t = current_bit ; t <  offset; t += 0.001){
 			
								
				d1.push([ t , (A)* Math.sin(2* Math.PI * t *f2) ]); // un 1     
 						
			}  // end for bit == 0



     	}else{ // cuando el bit es 0
 
						
			for (var t = current_bit ; t <  offset; t += .0001){
 			
 			   d1.push([ t , A* Math.sin(2* Math.PI * t *f1) ]);  // un 0
					    
 						
			}  // end for bit == 1




     	} // end else  bit == 1


     }// end 16 bits 
 
//********************************************************************************************
//*******************************************************************************************
//********************************************************************************************

 
 
    //[x , y ] direccion ----> x 

    var recta = [[0, 0] , [19 , 0]];
 
     // a null signifies separate line segments
     //var d3 = [[1, 12], [7, 12], null, [7, 2.5], [12, 2.5]];
     
     var somePlot = $.plot($("#graph"), [ d1 , recta ]);
    
   // somePlot.getData()[1].lines.lineWidth = 10;
    somePlot.draw();

}//end graph

} // end object
 

 


    }// end funciton
);// end define
 





