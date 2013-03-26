

module.exports = function (grunt) {
 
    grunt.loadNpmTasks('grunt-contrib-coffee');

    grunt.initConfig({
     
  
coffee: {
            compile: {
                
                files: {
                    
                //'path/to/result.js': 'path/to/source.coffee', // 1:1 compile
                    
                'assets/js/project.js': ['assets/coffee/model.coffee'] // compile and concat into single file
                        
                        }
                    },
        }


    });
 


grunt.registerTask('default', 'coffee');


 
};



// run this taks   -> grunt coffee