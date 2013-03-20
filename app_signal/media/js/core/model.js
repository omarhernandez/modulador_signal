jQuery(document).ready(function($) {
  

Person = Backbone.Model.extend({
// If you return a string from the validate function,
// Backbone will throw an error
invalid: function( attributes ){

if(  attributes.name == "Dr Manhatten" ){

   console.log(true);

return "You can't be negative years old";
}
},
initialize: function(){

 
this.on("error", function(model, error){
// We have received an error, log it, alert it or forget it\
 
 
alert( error );

});

}

});

 
var person = new Person;
person.set({ name: "Dr Manhatten"  , age: -1  },{validate : true});

person.save();


/*jQuery(document).ready(function($) {
	
  
  Person = Backbone.Model.extend({



  	defaults: {

  		name : 'ramon',

  		age : '2'


  	},


  	initialize : function(){


  		this.on("change:name" ,function(model){


  			var name = model.get("name");

  			console.info("changed my name to " + name );


  		});

  	}


  	,
  	set_name : function( new_set_name ){


  		this.set({ name : new_set_name } );


  	}


  });



  Person_ =  new Person({ name : "omar" , age : 98 });

  Person_.set_name('John Resig');


  console.log(Person_.get("name"));

});
*/

 /*
jQuery(document).ready(function($) {


var UserModel = Backbone.Model.extend({
 
initialize:  function(){
 

  this.on("error" ,function(model,error){

    alert(error)
  })
}
,
validate:  function(attributes){

   if( attributes.age < 0 ){
 
    return "You can't be negative years old";

   }

}
});

 console.log();

var user = new UserModel();
user.set({  age: -1 });


 

  
var user = new Usermodel({
id : 4 ,
name: 'Thomas',
email: 'thomasalwyndavis@gmail.com',
age : -38

});
 
// Because there is `id` present, Backbone.js will fire
// DELETE /user/1
user.save( );
*/

});