(function(window, document) {
    "use strict";
    (angular.module('ng.serialize', [ 'ng' ])).factory('$serialize', [ function() {
	var $serialize = {
	    set : function(name, data, compress) {
		if(compress) {
		    localStorage.setItem(name, LZString.compress(data));
		} else {
		    localStorage.setItem(name, JSON.stringify(data));
		}
	    },
	    get : function(name, callback, compress) {
		if (localStorage.getItem(name) != null) {
		    if(compress) {
			callback(JSON.parse(LZString.decompress(localStorage.getItem(name))));
		    } else {
			callback(JSON.parse(localStorage.getItem(name)));
		    }
		}
	    }
	};
	return $serialize;
    } ]);
})(window, document);