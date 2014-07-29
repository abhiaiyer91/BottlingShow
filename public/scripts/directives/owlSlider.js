window.app.directive('owl',function(){

	var linker = function(scope,element,attr){

		var loadCarousel = function(){
			element.owlCarousel({
				navigation: true,
				navigationText: [
					'<i class="fa fa-3x fa-chevron-left"></i>',
					'<i class="fa fa-3x fa-chevron-right"></i>'
				],
				items : 6, //10 items above 1000px browser width
				itemsDesktop : [1000,6], //5 items between 1000px and 901px
				itemsDesktopSmall : [900,2], // 3 items betweem 900px and 601px
				itemsTablet: [600,1], //2 items between 600 and 0;
			});
		}
		scope.$watch("partners", function(value) {
			loadCarousel(element);
		})
	}

	return{
		restrict : "A",
		link: linker
	}

});
