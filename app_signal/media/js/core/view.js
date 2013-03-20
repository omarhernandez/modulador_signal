
jQuery(document).ready(function($) {
	
 var Search_view = Backbone.View.extend({

 	 

 	initialize :  function(){

 		console.info(true);
 		this.render();
 	}
 	,

 	render : function(){

 	// run template using underscore
 
    var variables = { 

    		search_label : "Busqueda" ,

    		search_button : "Buscar"


    		 };

 	var template = _.template( $("#search_template").html() , variables);


 	this.$el.html( template );

 	},

 	events : {



 		'click #search_button' : 'search_engine'



 	},

 	search_engine : function(){

 		//button clicked


 		alert("search for " + $("#search_input").val()  )


 	}


 });


 // initialize data 

 var seach =  new Search_view({ el: $("#search_content")  });

});


