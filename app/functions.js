if(typeof define !== 'function') {
    var define = require('amdefine')(module);
}
define(function() {
    return {
        argsAsArray: function(fn, arr) {
            return fn.apply(this, arr);
        },
        speak: function(fn, obj) {
            return fn.call(obj);
        },
        functionFunction: function(str) {
            return this[str] = function(arg) {
                return str + ', ' + arg
            };
        },
        makeClosures: function(arr, fn) {
            var list = [];
            // I feel like I should optimize this. Not sure how I would though.
            var square = function(val) {
                return function() {
                    return fn(val);
                }
            }
            for(var i = 0, lg = arr.length; i < lg; i++) {
                list.push(square(arr[i]))
            }
            return list;
        },
        partial: function(fn, str1, str2) {
            return function(punc) {
                return fn.call(null, str1, str2, punc);
            }
        },
        useArguments: function() {
            var arr = Array.prototype.slice.call(arguments);
            var ret = 0;
            for(var i in arr) {
                if(typeof arr[i] == 'number') {
                    ret += arr[i];
                }
            }
            return ret;
        },
        callIt: function(fn) {
            // create an array of the non func arguments
            // Assumes that the first arg is a function. Maybe more complicated without that assumption
            // Just for fun, I am going to do a check to make sure. Definitely not necessary to fix the problem.
            var args = Array.prototype.slice.call(arguments, Number(typeof arguments[0] == 'function'), arguments.length)
            return fn.apply(null, args);
        },
        partialUsingArguments: function(fn) {
            var arr = Array.prototype.slice.call(arguments, 1, arguments.length);
            return function() {
                var eArgs = arr.concat(Array.prototype.slice.call(arguments));
                return fn.apply(null, eArgs);
            };
        },
        curryIt: function(fn) {
            
        }
    };
});