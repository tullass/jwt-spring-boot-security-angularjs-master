angular.module("JWTDemoApp").controller(
		'fillpcontroller',
		function($scope, $http) {
			var urlb = 'http://localhost:8080/prestacao';
			var filter = 0;
			$scope.d = new Date();
			$scope.de = '2017-01-05';
			$scope.ate = '2028-08-05';

			$scope.posiccaolista = function() {
				$http({
					method : 'GET',
					url : urlb + '/listar',
				}).then(function successCallback(response) {
					$scope.record = response.data;
				}, function errorCallback(response) {
				});
			};
			$scope.posiccaolista();
			$scope.limpar = function(search) {
				$scope.search = {}
			}
			$scope.prov = function() {
				$http({
					method : 'GET',
					url : urlb + '/userrr/pronviciaa',
				}).then(function successCallback(response) {
					$scope.pronviciass = response.data;
				}, function errorCallback(response) {
				});
			};
			$scope.prov();

			$scope.exportToPdf = function() {
				html2canvas(document.getElementById('customers'), {
					onrendered : function(canvas) {
						var data = canvas.toDataURL();
						var docDefinition = {
							content : [ {
								image : data,
								width : 500,
							} ]
						};
						pdfMake.createPdf(docDefinition)
								.download("example.pdf");
					}
				});
			}

		}).filter('dateRange', function() {

	return function(record, de, ate) {
		if (de && ate) {
			var filtered = [];
			angular.forEach(record, function(items) {
				if (items.datafimstring >= de && items.datafimstring <= ate)
					filtered.push(items);
			});
			return filtered;
		} else
			return record;

	}
});
