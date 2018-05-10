angular.module('JWTDemoApp').config(
		function($stateProvider, $urlRouterProvider) {
				// the ui router will redirect if a invalid state has come.
			$urlRouterProvider.otherwise('/page-not-found');
			// parent view - navigation state
			$stateProvider.state('nav', {
				abstract : true,
				url : '',
				views : {
					'nav@' : {
						templateUrl : 'app/views/nav.html',
						controller : 'NavController'
					}
				}
			}).state('login', {
				url : '/login',
				views : {
					'content@' : {
						templateUrl : 'app/views/login.html',
						controller : 'LoginController'
					}
				}
			}).state('index10', {
				parent : 'nav',

				url : '/contrato/{contratoId}',

				views : {
					'content@' : {
						templateUrl : 'app/pages/index10.html',
						controller : 'contratoController'
					}
				}
			}).state('inativoPresta', {
				parent : 'nav',

				url : '/prestainativee',

				views : {
					'content@' : {
						templateUrl : 'app/pages/inativoPresta.html',
						controller : 'inativePrestaaController'
					}
				}}).state('apagarPresta', {
					parent : 'nav',

					url : '/prestaapagar',

					views : {
						'content@' : {
							templateUrl : 'app/pages/apagarPresta.html',
							controller : 'apagarPrestaController'
						}
					}
			}).state('inativoIndeterminado', {
				parent : 'nav',

				url : '/inativocontrato',

				views : {
					'content@' : {
						templateUrl : 'app/pages/inativoIndeterminado.html',
						controller : 'apagarInativoController'
					}
				}
			}).state('index17', {
				parent : 'nav',

				url : '/prestac/{prestacaoId}',

				views : {
					'content@' : {
						templateUrl : 'app/pages/index17.html',
						controller : 'prestacaoController'
					}
				}
			}).state('index16', {
				parent : 'nav',

				url : '/apagar',
				views : {
					'content@' : {
						templateUrl : 'app/pages/index16.html',
						controller : 'apagarController'
					}
				}
			}).state('periodoContratoIndetermnado', {
				parent : 'nav',

				url : '/periodo',
				views : {
					'content@' : {
						templateUrl : 'app/pages/periodoContratoIndetermnado.html',
						controller : 'periodoController'
					}
				}
			}).state('index18', {
				parent : 'nav',

				url : '/periodop',
				views : {
					'content@' : {
						templateUrl : 'app/pages/index18.html',
						controller : 'periodopController'
					}
				}
			}).state('index19', {
				parent : 'nav',

				url : '/consultor',
				views : {
					'content@' : {
						templateUrl : 'app/pages/index19.html',
						controller : 'consultorController'
					}
				}
			}).state('users', {
				parent : 'nav',

				url : '/users',
				data : {
					role : 'ADMIN'
				},
				views : {
					'content@' : {
						templateUrl : 'app/views/users.html',
						controller : 'UsersController',
					}
				}
			}).state('index5', {
				parent : 'nav',
				url : '/departamento',
				data : {
					role : 'ADMIN'
				},
				views : {
					'content@' : {
						templateUrl : 'app/pages/index5.html',
						controller : 'departamentoController',
					}
				}
			}).state('index6', {
				parent : 'nav',
				url : '/posiccao',
				data : {
					role : 'ADMIN'
				},
				views : {
					'content@' : {
						templateUrl : 'app/pages/index6.html',
						controller : 'posiccaoController',
					}
				}
			}).state('index7', {
				parent : 'nav',
				url : '/programa',
				data : {
					role : 'ADMIN'
				},
				views : {
					'content@' : {
						templateUrl : 'app/pages/index7.html',
						controller : 'programaController',
					}
				}
			}).state('index23', {
				parent : 'nav',
				url : '/prog',
				data : {
					role : 'ADMIN'
				},
				views : {
					'content@' : {
						templateUrl : 'app/pages/index23.html',
						controller : 'prograController',
					}
				}
			}).state('home', {
				parent : 'nav',
				url : '/',
				views : {
					'content@' : {
						templateUrl : 'app/views/home.html',
						controller : 'HomeController'
					}
				}
			}).state('page-not-found', {
				parent : 'nav',
				url : '/page-not-found',
				views : {
					'content@' : {
						templateUrl : 'app/views/page-not-found.html',
						controller : 'PageNotFoundController'
					}
				}
			}).state('datascontratoIndeter', {
				parent : 'nav',

				url : '/data/indeterminado',
				views : {
					'content@' : {
						templateUrl : 'app/pages/datascontratoIndeter.html',
						controller : 'filltcontroller'
					}
				}
			}).state('index22', {
				parent : 'nav',

				url : '/printapc',
				views : {
					'content@' : {
						templateUrl : 'app/pages/index22.html',
						controller : 'fillpccontroller'
					}
				}
			}).state('geraisInder', {
				parent : 'nav',

				url : '/generalReports',
				views : {
					'content@' : {
						templateUrl : 'app/pages/geraisInder.html',
						controller : 'listaController'
					}
				}
			}).state('add', {
				parent : 'nav',

				url : '/cadastrossr',
				views : {
					'content@' : {
						templateUrl : 'app/views/add.html',
						controller : 'listaController'
					}
				}
			}).state('index121', {
				parent : 'nav',

				url : '/listarc',
				views : {
					'content@' : {
						templateUrl : 'app/pages/index121.html',
						controller : 'listacController'
					}
				}
			}).state('index21', {
				parent : 'nav',

				url : '/datas/service',
				views : {
					'content@' : {
						templateUrl : 'app/pages/index21.html',
						controller : 'fillpcontroller'
					}
				}
			}).state('index120', {
				parent : 'nav',

				url : '/listarp',
				views : {
					'content@' : {
						templateUrl : 'app/pages/index120.html',
						controller : 'listapController'
					}
				}
			}).state('index119', {
				parent : 'nav',

				url : '/programas/indeterminado',
				views : {
					'content@' : {
						templateUrl : 'app/pages/index119.html',
						controller : 'listaaController'
					}
				}
			}).state('index122', {
				parent : 'nav',

				url : '/listarcp',
				views : {
					'content@' : {
						templateUrl : 'app/pages/index122.html',
						controller : 'listapcController'
					}
				}
			}).state('access-denied', {
				parent : 'nav',
				url : '/access-denied',
				views : {
					'content@' : {
						templateUrl : 'app/views/access-denied.html',
						controller : 'AccessDeniedController'
					}
				}
			}).state('index4', {
				parent : 'nav',
				url : '/educacao',
				data : {
					role : 'ADMIN'
				},
				views : {
					'content@' : {
						templateUrl : 'app/pages/index4.html',
						controller : 'educacaoController'
					}
				}
			}).state('index8', {
				parent : 'nav',
				url : '/supervisor',
				data : {
					role : 'ADMIN'
				},
				views : {
					'content@' : {
						templateUrl : 'app/pages/index8.html',
						controller : 'supervisorController'
					}
				}
			}).state('index9', {
				parent : 'nav',
				url : '/gestor',
				data : {
					role : 'ADMIN'
				},
				views : {
					'content@' : {
						templateUrl : 'app/pages/index9.html',
						controller : 'gestorController'
					}
				}
			}).state('index2', {
				parent : 'nav',
				url : '/areaa',
				data : {
					role : 'ADMIN'
				},
				views : {
					'content@' : {
						templateUrl : 'app/pages/index2.html',
						controller : 'areaaController'
					}
				}
			}).state('register', {
				parent : 'nav',
				url : '/register',
				views : {
					'content@' : {
						templateUrl : 'app/views/register.html',
						controller : 'RegisterController'
					}
				}
			});
		});
