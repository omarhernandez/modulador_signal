 
requirejs.config({

	paths : {

		'EntradaBinaria' : "../core/EntradaBinaria" ,

		'message' : "../core/message" ,

   

        'jquery' : "../lib/jq" ,

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

        } ,

        'jquery.ui' : {

             deps: ['jq'],

             exports : '$'

        },
            'chart' : {

             deps: ['jq'],

             exports : '$'

        }

    	}
})
 
require(["../core/init"]);