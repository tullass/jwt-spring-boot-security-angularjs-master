angular.module('JWTDemoApp').service('apagarService',function($http){
	var urlb = 'http://localhost:8080/apagar';

	this.listar = function() {
		return $http.get(urlb + '/listar');
	};
	
	this.salvar = function(contrato) {
		if (contrato.id) {
			return $http.put(urlb, contrato);
		} else {
			return $http.post(urlb + '/', contrato);
		}
	};
});