
jQuery(document).ready(function($) {
	

EntradaBinaria = {}

EntradaBinaria  = {

	conf : {

	 MAX_SIZE : 16 , 
	 
	 VALID :  false ,

	 intRegex  : /[0-1 -()+]+$/ ,


	} ,



	validar : function(bits_length , conf ,data_valid ){

 	var is_valid =  false;
 
	is_valid =  ( data_valid != null && bits_length == conf.MAX_SIZE  && data_valid[0].length == conf.MAX_SIZE ) ? true  : false ;

 	
 	if(is_valid){

 			bits_to_graph = [0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1];
 		this.graficar(bits_to_graph)

 	}else{


 		var valid_data_alternative = (( data_valid != null ) ? " Los datos validos son :" + data_valid[0] : "Pero no son validos") ;

 		var help; 

 		if(bits_length > 0 ){


 		help = " Hay <strong>" + bits_length + "</strong> Bits , " +valid_data_alternative ;

 			
 	}else{


 		 		help = "Ingresa al menos 2 Bytes";


 	}

		message.alert(help);

 	}

 

	} ,


	procesar : function(bits){


	var bits_length = bits.length;

	var conf = this.conf; 

	var data_valid =  bits.match(conf.intRegex);


	this.validar(bits_length , conf ,data_valid );

	},

	graficar : function(bits_to_graph){

// begin graph

$(".bits_data").show();
	$(".bits_data").html($(".bits_entree").val())
					.delay(1200)
					.animate( { letterSpacing : "68px" , opacity : 1},800);


	$(".alert , .text_new").fadeOut("slow"); // octulamos  los elementos anteriores

	$("#graph").show();

	var d1 = [];

	// vT = vp * sen ( 2 * PI * f1 * t )

	var vT ; // forma de la onda FSK binaria 

 	var A = 12 //amplitud

	var f = 1 / A ; //desplazamientos de igual magnitud pero sentidos opuestos de la 
		         //frecuencia de la señal 

		    	 // t = tiempo

     for (var t = 0; t < 46; t += 0.1)

    // vT  =	(( bits_to_graph[i] == 0 ) ?  Math.sin(2*Math.PI*i) : Math.sin(2*Math.PI*i) );
 
     d1.push([ t , A* Math.sin(2* Math.PI*t *0.5) ]);
 
 

    //[x , y ] direccion ----> x 

    //var d2 = [[0, 3], [1, 8], [2, 5], [3, 13]];
 
     // a null signifies separate line segments
     //var d3 = [[1, 12], [7, 12], null, [7, 2.5], [12, 2.5]];
     
     var somePlot = $.plot($("#graph"), [ d1  ]);
    
   // somePlot.getData()[1].lines.lineWidth = 10;
    somePlot.draw();



// end graph











	}

}


});