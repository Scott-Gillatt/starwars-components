(function () {
	'use strict';

	angular.module('myStarWars')

	.component('starWarsPerson', {
		bindings: {
			person: '<'
		},
		require: {
        	people: '^starWarsPeople'
    	},
		templateUrl: 'templates/person.html',
		controller: starWarsPersonController,
		controllerAs: 'vm'
	});

	starWarsPersonController.$inject = [];
	
	function starWarsPersonController() {

		var vm = this;

		vm.$onInit = function () {
			console.log('Person: ', vm.person);
		}
	}
})();