define(["chart", "message" ], function($ , message  ) {
 
 

    EntradaBinaria = {}
    var data = [];

    var recta = [[0, 0] , [19 , 0]];
 
 	data.push(recta);

   return EntradaBinaria  = {

	conf : {
 
	 MAX_SIZE : 16 , 
	 
	 VALID :  false ,

	 intRegex  : /[0-1 -()+]+$/ ,

	 compare : false


	} ,

	borrar : function(){

		data = [];
		data.push(recta);

	},

	validar : function(bits_data , conf ,data_valid ){

 	var is_valid =  false;
 
	is_valid =  ( data_valid != null && bits_data.length == conf.MAX_SIZE  && data_valid[0].length == conf.MAX_SIZE ) ? true  : false ;

 	
 	if(is_valid){


 	if (this.conf.compare){

	var amplitud = (! isNaN(  $(".amplitud_compare").val()) ) ?  $(".amplitud_compare").val() : 20; //amplitud

 	var bit_0 = (! isNaN(  $(".bit_0_compare").val()) ) ?  $(".bit_0_compare").val() : 1;   // para 0

 	var bit_1 = (! isNaN(  $(".bit_1_compare").val()) ) ?  $(".bit_1_compare").val() : 3;   // para 1 

 		

 	}else{


 	var amplitud = (! isNaN(  $("#value_amplitud").val()) ) ?  $("#value_amplitud").val() : 20; //amplitud

 	var bit_0 = (! isNaN(  $("#value_bit_0").val()) ) ?  $("#value_bit_0").val() : 1;   // para 0

 	var bit_1 = (! isNaN(  $("#value_bit_1").val()) ) ?  $("#value_bit_1").val() : 3;   // para 1 
 		
 	}

 		console.log(this.conf.compare)

 		this.graficar(bits_data , amplitud, bit_0 ,bit_1)



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
	comparar : function(bits){

	this.procesar(bits);


	},

	graficar : function(bits_to_graph , amplitud , bit_0 , bit_1 ){
	
	var	graph_exist = [] ;

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



	var d2 = [];

 

// ********************************************************************************************

	// vT = vp * sen ( 2 * PI * f1 * t )

	var vT ; // forma de la onda FSK binaria 


	var f = 1 / amplitud ; //desplazamientos de igual magnitud pero sentidos opuestos de la 
		         //frecuencia de la señal 

		    	 // t = tiempo
	 
//********************************************************************************************
//*******************************************************************************************
 
     for (var current_bit = 0; current_bit < 16; current_bit++) {
     	

     	var offset =  current_bit + 1 ;
 

     	if ( bits_to_graph[current_bit] == 1){ // cuando el BIT es 1

 
			for (var t = current_bit ; t <  offset; t += 0.001)
 			
								
				d2.push([ t , (amplitud)* Math.sin(2* Math.PI * t *bit_1) ]); // un 1     
 						
			  // end for bit == 0

            data = [ d2 ];


     	}else{ // cuando el bit es 0
 
						
			for (var t = current_bit ; t <  offset; t += 0.001)
 			
 			    d2.push([ t , amplitud* Math.sin(2* Math.PI * t *bit_0) ]);  // un 0
			 
            data = [ d2 ];
	    
 						
			 // end for bit == 1




     	} // end else  bit == 1


     }// end 16 bits 
 
//********************************************************************************************
//*******************************************************************************************
//********************************************************************************************
$graph_data =  $("#graph");

data.push({ label: "Bits["+bits_to_graph+"]",  data: d2} )
 
console.dir(data)

  	if (this.conf.compare){

  	       var options = {
        series: { lines: { show: true },  points: { show: false } , shadowSize: 0 },
       //xaxis: { zoomRange: [0.1, 10], panRange: [-10, 10] },
        //yaxis: { zoomRange: [0.1, 10], panRange: [-10, 10] },
        zoom: {
            interactive: true
        },
        pan: {
            interactive: true
        },
         grid: {
            backgroundColor: { colors: ["#fff", "#eee"] }
         }
    };

 
var plot = $.plot( $graph_data ,data , options );

}else{
    
        var options = {
        series: { lines: { show: true },  points: { show: false } , shadowSize: 0 },
       //xaxis: { zoomRange: [0.1, 10], panRange: [-10, 10] },
        //yaxis: { zoomRange: [0.1, 10], panRange: [-10, 10] },
        zoom: {
            interactive: true
        },
        pan: {
            interactive: true
        },
         grid: {
            backgroundColor: { colors: ["#fff", "#eee"] }
         }
    };

 
var plot = $.plot( $graph_data ,data , options );

 
 // ------------------------------------------------------------------------------------------------------

 
 
    var options = {
        series: { lines: { show: true },  points: { show: false } , shadowSize: 0 },
       //xaxis: { zoomRange: [0.1, 10], panRange: [-10, 10] },
        //yaxis: { zoomRange: [0.1, 10], panRange: [-10, 10] },
        zoom: {
            interactive: true
        },
        pan: {
            interactive: true
        }
    };

 
var plot = $.plot( $graph_data ,data , options );
 
//------------------------------------------------------------------------------------------------------ zoom


  // show pan/zoom messages to illustrate events 
    $graph_data.bind('plotpan', function (event, plot) {
        var axes = plot.getAxes();
        $(".message").html("Panning to x: "  + axes.xaxis.min.toFixed(2)
                           + " &ndash; " + axes.xaxis.max.toFixed(2)
                           + " and y: " + axes.yaxis.min.toFixed(2)
                           + " &ndash; " + axes.yaxis.max.toFixed(2));
    });

    $graph_data.bind('plotzoom', function (event, plot) {
        var axes = plot.getAxes();
        $(".message").html("Zooming to x: "  + axes.xaxis.min.toFixed(2)
                           + " &ndash; " + axes.xaxis.max.toFixed(2)
                           + " and y: " + axes.yaxis.min.toFixed(2)
                           + " &ndash; " + axes.yaxis.max.toFixed(2));
    });

    // add zoom out button 
    $('<div class="button" style="right:20px;top:20px">zoom out</div>').appendTo($graph_data).click(function (e) {
        e.preventDefault();
         $.plot.zoomOut();
    });

    /*
    // and add panning buttons
    
    // little helper for taking the repetitive work out of placing
    // panning arrows
    function addArrow(dir, right, top, offset) {
        $('<img class="button" src="arrow-' + dir + '.gif" style="right:' + right + 'px;top:' + top + 'px">').appendTo(placeholder).click(function (e) {
            e.preventDefault();
            $.plot.pan(offset);
        });
    }

    addArrow('left', 55, 60, { left: -100 });
    addArrow('right', 25, 60, { left: 100 });
    addArrow('up', 40, 45, { top: -100 });
    addArrow('down', 40, 75, { top: 100 });
*/
 }


}//end graph

} // end object
 

 


    }// end funciton
);// end define
 





