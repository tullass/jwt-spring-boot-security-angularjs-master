var app = angular.module('JWTDemoApp');
		app.controller('listacController', function($scope, $http, $timeout) {
			var urlb = 'http://localhost:8080/consull';
			$scope.loading = true;
$scope.d=new Date();
			$scope.posiccaolista = function() {
				$http({
					method : 'GET',
					url : urlb + '/listar',
				}).then(function successCallback(response) {
					$scope.items = response.data;

				}, function errorCallback(response) {
				});
			};
			$scope.posiccaolista();
			$scope.deplista = function() {
				$http({
					method : 'GET',
					url : urlb + '/depar',
				}).then(function successCallback(response) {$timeout(function() {
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
			$scope.exportData = function() {
				$('#customers').tableExport({
					type : 'json',
					escape : 'false'
				});
			};

			$scope.exportToExcel = function(tableId) { // ex: '#my-table'
				var exportHref = Excel.tableToExcel(tableId,
						'WireWorkbenchDataExport');
				$timeout(function() {
					location.href = exportHref;
				}, 100); // trigger download
			}

			$scope.exportToPdf = function() {
				html2canvas(document.getElementById('customers'), {
					onrendered : function(canvas) {
						var data = canvas.toDataURL();
						var docDefinition = {
							content : [ {
								image : data,
								width : 550,
							} ]
						};
						pdfMake.createPdf(docDefinition)
								.download("example.pdf");
					}
				});
			}

		});

	     