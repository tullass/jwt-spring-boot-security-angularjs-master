angular.module("JWTDemoApp").controller(
		"periodopController",
		function($scope, $http, $filter) {
			$scope.listap =[];
			var urlb = 'http://localhost:8080/prestaa';
			$scope.d=new Date();
			$scope.delet = function() {
				$scope.listap = $scope.listap.filter(function(contrato) {
					let
					futureTime = new Date(Date.now() + 1000 * 60 * 60 * 24 * 33);
					let
					PassTime = new Date();

					if (contrato.datafim > PassTime
							&& contrato.datafim < futureTime) {

						return contrato;
					}
				});

			};
			
			$scope.contratolista = function() {
				$http({
					method : 'GET',
					url : urlb + '/listarr',
				}).then(function successCallback(response) {
					$scope.listap = response.data;				
					$scope.delet();
				}, function errorCallback(response) {
				});
			};
			$scope.contratolista();

			$scope.CalDate = function(date1, date2) {

				var diff = Math.floor(date1.getTime() - date2.getTime());
				var secs = Math.floor(diff / 1000);
				var mins = Math.floor(secs / 60);
				var hours = Math.floor(mins / 60);
				var days = Math.floor(hours / 24);

				var months = Math.floor(days / 31);
				var years = Math.floor(months / 12);
				months = Math.floor(months % 12);
				days = Math.floor(days % 31);
				hours = Math.floor(hours % 24);
				mins = Math.floor(mins % 60);
				secs = Math.floor(secs % 60);
				var message = "";

				//MEU FOREACH
				angular.forEach($scope.listap, function(x, index) {

					if (years === 0 && months <= 2) {
						message = +months + ' meses ' + days + ' dias ';
					} else if (years < 0 && months < 0) {
						message = "passado";
					} else {
						message = "futuro";

					}
				});//FIM DO FOREACH

				return message;

			};


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
										.download("Periodo_Prestacao_Servico_Report.pdf");
							}
						});
					}

			

			$scope.getExp = function(date) {
				date = new Date($filter('date')(date, "yyyy/MM/dd"));
				var currdate = new Date($filter('date')(new Date(), "yyyy/MM/dd"));
				new Date().getFullYear()
				var exp = $scope.CalDate(date, currdate);

				return exp;
			}
		});