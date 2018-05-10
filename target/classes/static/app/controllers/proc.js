var app = angular.module('JWTDemoApp');
		app.controller('listapcController', function($scope, $http, $timeout, Excel) {
			var urlb = 'http://localhost:8080/consull';
			$scope.posiccaolista = function() {
				$http({
					method : 'GET',
					url : urlb + '/listar',
				}).then(function successCallback(response) {
					$scope.itemss = response.data;
				}, function errorCallback(response) {
				});
			};
			$scope.posiccaolista();
			
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
								width : 500,
							} ]
						};
						pdfMake.createPdf(docDefinition)
								.download("example.pdf");
					}
				});
			}

		});

	      app.factory('Excel',function($window){
	          var uri='data:application/vnd.ms-excel;base64,',
	              template='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
	              base64=function(s){return $window.btoa(unescape(encodeURIComponent(s)));},
	              format=function(s,c){return s.replace(/{(\w+)}/g,function(m,p){return c[p];})};
	          return {
	              tableToExcel:function(tableId,worksheetName){
	                  var table=$(tableId),
	                      ctx={worksheet:worksheetName,table:table.html()},
	                      href=uri+base64(format(template,ctx));
	                  return href;
	              }
	          };
						})