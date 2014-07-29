window.app.factory('servScroll', [function () {
	var services = [
		{
			link: '#bottling',
			img:'http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/SERVICES/bottling_icon_zps1b750c44.png~original',
			title:'Bottling',
		},
		{
			link: '#brand',
			img:'http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/SERVICES/branddev_icon_zpsdfae4af1.png~original',
			title:'Brand Dev',
		},
		{
			link: '#distribution',
			img:'http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/SERVICES/distribution_icon_zps849a9b5d.png~original',
			title:'Distribution',
		},
		{
			link: '#logistics',
			img:'http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/SERVICES/logistics_icon_zps6b4169fe.png~original',
			title:'Logistics',
		},
		{
			link:'#marketing',
			img:'http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/SERVICES/marketing_icon_zps5e17022c.png~original',
			title:'Marketing',
		},
		{
			link: '#media',
			img:'http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/SERVICES/media_icon_zpse51385ff.png~original',
			title:'Media',
		},
		{
			link: '#vending',
			img:'http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/SERVICES/vending_icon_zps519ac93a.png~original',
			title:'Vending',
		}
	];
	return function() {
		return services;
	};
}]);
window.app.controller('serviceCtrl', function($scope, servScroll, Partners) {

  $scope.partners = Partners.partners;

  $scope.quickScroll = servScroll();
  
  $scope.link = function (goTo) {
  	console.log(window.outerWidth());
  	return goTo;
  }
});
