(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	function HomeController(HomeFactory) {
		var vm = this;

		HomeFactory.getAllBears().then(function(res) {
			vm.bears = res;
		});
	}
})();
