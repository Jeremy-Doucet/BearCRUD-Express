(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	function HomeFactory($http, $q) {
		var o = {};

		o.getAllBears = function() {
			var q = $q.defer();
			$http.get('/bears').then(function(res) {
				q.resolve(res.data);
			});
			return q.promise;
		};

		o.createBear = function(bear) {
			var q = $q.defer();
			$http.post('/bears', bear).then(function(res) {
				q.resolve(res.data);
			});
			return q.promise;
		};

		return o;
	}
})();
