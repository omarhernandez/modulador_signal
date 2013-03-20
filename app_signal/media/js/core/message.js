jQuery(document).ready(function($) {
	


message = { }

message = {

	conf : {

		message_text : $(".message_text") , 


	},

	alert : function(help){


	 
	$(this.conf.message_text).html("<span class='alert'>  ATENCION : " + help   + "</span>"  );
	
	$(".alert").effect("bounce", { times:3 , direction : "up" }, 200);

	} ,

	success : function(){


		$(this.conf.message_text).html("<span class='alert'>  Bits Validos  </span>"  );


	}


}



});
