(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	function HomeFactory($http, $q) {
		var o = {};

		o.getCounter = function() {
			var q = $q.defer();
			$http.get('/counter').then(function(res) {
				q.resolve(res.data.counter);
			});
			return q.promise;
		};

		return o;
	}
})();
