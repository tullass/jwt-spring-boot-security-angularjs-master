angular.module("JWTDemoApp").controller("apagarInativoController",
		function($scope, apagaInativorService) {

			function novo() {
				$scope.contrato = {};
			}
			listar();
			function listar() {
				apagaInativorService.listar().then(function(resp) {
					$scope.listaa = resp.data;
				});
			}
			;
			$scope.create = function(contrato) {
				apagaInativorService.salvar(contrato).then(listar);
				novo();
			};

			$scope.alterar = function(contrato) {
				alert("Funcionalidade nao Implementada");
			};

		});
