if(typeof define !== 'function') {
    var define = require('amdefine')(module);
}
define(function() {
    return {
        alterContext: function(fn, obj) {
            return fn.call(obj);
        },
        alterObjects: function(constructor, greeting) {
            constructor.prototype.greeting = greeting;
        },
        iterate: function(obj) {
            //         Got really tripped up on this one, because I didn't realize you 
            //         wanted an array of strings.
            var res = [];
            Object.keys(obj).map(function(prop) {
                if(obj.hasOwnProperty(prop)) {
                    res.push(prop + ': ' + obj[prop])
                }
            })
            
            return res;
        }
    };
});