var app = angular.module('JWTDemoApp');
app.controller('listaController',
		function($scope, $http, $timeout) {
			var urlb = 'http://localhost:8080/contrato';
			$scope.loading = false;
			$scope.d = new Date();
			$scope.posiccaolista = function() {
				$http({
					method : 'GET',
					url : urlb + '/listar',
				}).then(function successCallback(response) {
					$scope.items = response.data;
				}, function errorCallback(response) {
				});
			};

			$scope.rota = function() {

				$http({
					method : 'GET',
					url : urlb + '/a/' + $scope.contrato.id,
				}).then(function successCallback(response) {
					alert("SetADO");
					
				}, function errorCallback(response) {
					alert("Erro");
					console.log(response);
				});
			};
			$scope.posiccaolista();
			$scope.deplista = function() {
				$http({
					method : 'GET',
					url : urlb + '/depar',
				}).then(function successCallback(response) {
					$timeout(function() {
						$scope.loading = false;
					}, 2000);
					$scope.depart = response.data;
				}, function errorCallback(response) {
				});
			};
			$scope.limpar = function(search) {
				$scope.search = {}
			}
			$scope.deplista();
			

			$scope.exportToPdf = function() {
				html2canvas(document.getElementById('customers'), {
					onrendered : function(canvas) {
						var data = canvas.toDataURL();
						var docDefinition = {
							content : [ {
								image : data,
								width : 650,
							} ]
						};
						pdfMake.createPdf(docDefinition)
								.download("Indeterminado_Report_Gerais.pdf");
					}
				});
			}

		});

angular.module('JWTDemoApp').service('StudentService',['$http', function ($http) {
	
	function getStudents() {
		var pageNumber=0;
        return  $http({
          method: 'GET',
          url: 'contrato/listarB?page='+pageNumber
        });
    }
	
    return {
    	getStudents:getStudents
    };
	
}]);
