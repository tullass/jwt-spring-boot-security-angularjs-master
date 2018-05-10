angular.module("JWTDemoApp").controller('fillpcontroller',
		function($scope, $http) {
			var urlb = 'http://localhost:8080/prestaa';

			  var formatStr = 'DD/MM/YYYY';
			    $scope.from_date = moment("2017-04-05").format(formatStr);
			  $scope.to_date = moment("2019-04-29").format(formatStr);  
				$scope.contratolista = function() {
					$http({
						method : 'GET',
						url : urlb + '/listarr',
					}).then(function successCallback(response) {
						$scope.record = response.data;
					}, function errorCallback(response) {
					});
				};
				$scope.contratolista();

			 }).filter('dateRange', function() {
			    var formatStr = 'DD/MM/YYYY';
			    return function(produceList, fromDate, toDate) {    
			      if(fromDate && toDate){
			        var filtered = [];
		  angular.forEach(produceList, function(items) {
			  console.log('a',items.produceDate)
			    console.log(Date.parse(moment(fromDate, formatStr)))
		  if (items.datainicio > Date.parse(moment(fromDate, formatStr)) && items.datainicio < Date.parse(moment(toDate, formatStr)))
			     filtered.push(items);
			        });
			        return filtered;
			      }
			      else
			        return produceList;
			}});