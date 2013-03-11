//Models are used to represent data from your server and actions you perform on 
//them will be translated to RESTful operations.


 var App = Backbone.Model.extend({

 		defaults:{

         version: "1.0.0",
         root: '' ,
         signal: []

      } ,

 	// triggered whenever you create a new instance of a model
 	initialize : function () {


 		this.on("change:signal",function(model){
 

 			var signal = model.get("signal");

 			 
 			console.log("gooooooo");


 		});
 		

 		 

 	},

       set_signal : function(name_attr){

/*
NOTE: According to the Underscore API, _.clone() copies certain 
nested items by reference. The root/parent object is cloned 
though, so it will work fine for backbone. That is, if your 
array is very simple and does not have nested structures 
e.g. [1, 2, 3].

*/    

	 	 before_data = _.clone(this.get('signal'));

 		 before_data.push(name_attr);

         this.set({ signal : before_data });
 

      }


 }); // end extends Backbone model



 // instance app


 var app = new App;

 
 app.set_signal("0101010220201");

  app.set_signal("01019210101");


 



