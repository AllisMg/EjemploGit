angular.module("ejemploApp", ['ngRoute'])

.config(function($routeProvider) {
	$routeProvider
	    .when('/pagina-uno', {
	        templateUrl: 'html/ejemplo-uno.html'
	    })
	    .when('/pagina-dos', {
	        templateUrl: 'html/ejemplo-dos.html'
	    })
	    .otherwise({redirectTo: '/pagina-uno'});
	}
)