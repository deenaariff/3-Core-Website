var Controllers = angular.module('Controllers',[])

Controllers.controller('iconCtrl', function($scope) {

    $scope.images = [
        {name: '3D Animation',
		 img: '3d animation.png'
		},
        {name: 'Product Branding',
         img: 'branding.png'
    	},
        {name: 'Creative Design',
    	 img: 'creative design.png'
    	},
        {name: 'Digital Campaign Solutions',
    	 img: 'digital campaign solution.png'
    	},
    	{name: 'Live Events',
    	 img: 'events.png'
    	},
    	{name: 'Marketing Campaign Solutions',
    	 img: 'marketing campaign solution.png'
    	},
    	{name: 'New Media Advertising',
    	 img: 'new media advertising.png'
    	},
    	{name: 'Projection Mapping',
    	 img: 'projection mapping.png'
    	},
    	{name: 'Stakeholder Managment',
    	 img: 'stakeholder management.png'
    	},
    ];

});

