if(typeof define !== 'function') {
    var define = require('amdefine')(module);
}
define(['jquery'], function($) {
    return {
        async: function(value) {
            var defer = $.Deferred();
            setTimeout(function() {
                defer.resolve(value);
            }, 1);
            return defer.promise();
        },
        manipulateRemoteData: function(url) {
            var defer = $.Deferred();
//             Very similar to Angulars promise functionality. I assume it is a wrapper for the same code.
            $.ajax(url || '')
            .done(function(res){
                var ret = [];
                for(var i in res.people){
                    ret.unshift(res.people[i].name)
                }
                // Was stumped for a minute. Didn't realize they were out of order lol
                ret = ret.sort();
                defer.resolve(ret);
            })
            return defer.promise();
        }
    };
});