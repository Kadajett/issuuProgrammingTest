if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  var self = this;
   self.listFiles = function(data, dirName) {
//        I really would like to optimise this. Looks really bad lol
        var self = this;
        var files = [];
        Object.keys(data).map(function(base){
            self.dir = data['dir'];
            if(data[base] instanceof Array){
                data[base].map(function(child){ 
                    if(typeof child === "string"){
                        if(!dirName || self.dir == dirName || self.placed){
                            if(dirName){
                                self.placed = true;
                            }
                            files.push(child)
                        }
                    }else if(typeof child === 'object'){
                        files = files.concat(listFiles(child, dirName))
                    }
                })
            }
        })
        self.placed = false;
        return files;
    }
  return {
    listFiles: self.listFiles,

    permute: function(arr) {

    },

    fibonacci: function(n) {

    },

    validParentheses: function(n) {

    }
  };
});
