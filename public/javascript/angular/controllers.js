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
    	}
    ];

    $scope.work = [
        {name: 'Etiqa',
         id: 0,
         state: true,
         img: 'etiqa'
        },
        {name: 'EXIM Bank',
         id: 1,
         state: true,
         img: 'eximbank'
        },
        {name: 'IJM',
         id: 2,
         state: true,
         img: 'ijm'
        },
        {name: 'Maybank Asset Management',
         id: 3,
         state: true,
         img: 'maybank asset management'
        },
        {name: 'Maybank',
         id: 4,
         state: true,
         img: 'maybank'
        },
        {name: 'MDEC',
         id: 5,
         state: true,
         img: 'mdec'
        },
        {name: 'MYREN',
         id: 6,
         state: true,
         img: 'MYREN'
        },
        {name: 'Pasarnita',
         id: 7,
         state: true,
         img: 'pasarnita'
        },
        {name: 'Takaful Ikhlas',
         id: 8,
         state: true,
         img: 'takaful ikhlas'
        }
    ];

    $scope.panels = [
	    {id: 0,
	     name: 'about',
	     status: true
	    },
	    {id: 1,
	     name: 'work',
	     status: false
	    },
	    {id: 2,
	     name: 'people',
	     status: false
	    },
	    {id: 3,
	     name: 'blog',
	     status: false
	    },
	    {id: 5,
	     name: 'contact',
	     status: false
	    }
    ];

    $scope.currentPanel = 0;

    $scope.nav = function (id) {
    	$scope.panels[$scope.currentPanel].status = false;
    	$scope.panels[id].status = true;
    	$scope.currentPanel = id;
    }
 
    $scope.colorSwitcher = null;

    $scope.makeColor = function (id) {
        if ($scope.colorSwitcher != null)
            $scope.work[$scope.colorSwitcher].state = true;
        $scope.work[id].state = false;
        $scope.colorSwitcher = id;
    }

    $scope.makeGreen = function (id) {
        $scope.work[id].state = true;
    }
});

