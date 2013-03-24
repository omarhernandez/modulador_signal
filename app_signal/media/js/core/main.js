


requirejs.config({

	paths : {

		'EntradaBinaria' : "../core/EntradaBinaria" ,

		'message' : "../core/message"

	},


	baseUrl : "../media/js/lib/" , 

    shim: {

        'backbone': {
            
            //backbone.js
            deps: ['underscore', 'jq'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            //need be in upper case B
            exports: 'Backbone'

        },
        'underscore': {

            exports: '_'

        }

    	}
})


 
require(["../core/init"]);