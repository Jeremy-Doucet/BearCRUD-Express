(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	function HomeController(HomeFactory) {
		var vm = this;
		vm.title = 'Welcome to our App!';

		HomeFactory.getCounter().then(function(res) {
			vm.counter = res;
		});
	}
})();
