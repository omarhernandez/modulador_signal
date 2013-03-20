
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

this.graficar()

	is_valid =  ( data_valid != null && bits_length == conf.MAX_SIZE  && data_valid[0].length == conf.MAX_SIZE ) ? true  : false ;

 	
 	if(is_valid){

 		this.graficar()

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

	graficar : function(){


	$(".alert , .text_new").fadeOut("slow"); // octulamos  los elementos anteriores

	$("#graph").show();

	var d1 = [];
     for (var i = 0; i < 100; i += 0.5)
         d1.push([i, Math.sin(i)]);
 
 

    //[x , y ] direccion ----> x 

    //var d2 = [[0, 3], [1, 8], [2, 5], [3, 13]];
 
     // a null signifies separate line segments
     //var d3 = [[1, 12], [7, 12], null, [7, 2.5], [12, 2.5]];
     
     var somePlot = $.plot($("#graph"), [ d1  ]);
    
    somePlot.getData()[1].lines.lineWidth = 20;
    somePlot.draw();

	}

}


});