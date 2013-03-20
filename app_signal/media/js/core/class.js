
jQuery(document).ready(function($) {
	

EntradaBinaria = {}

EntradaBinaria  = {

	conf : {

	 MAX_SIZE : 16 , 
	 
	 VALID :  false ,

	 intRegex  : /[0-1 -()+]+$/ ,


	} ,



	validar : function(bits){


	var bits_length = bits.length;

	var conf = this.conf; 

	var data_valid =  bits.match(conf.intRegex);


 
	return ( data_valid != null && bits_length == conf.MAX_SIZE  && data_valid[0].length == conf.MAX_SIZE ) ? true  : false ;

	 

 
	 

 
	}

}


});