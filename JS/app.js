var workDetails=[
    {
        poster: '1/1.jpg',
        title: 'PORTFOLIO PAGE',
        desc: 'Web Design',
        detailDesc: 'This was my previous portfolio page.',
        images:['1/1.jpg','1/2.jpg','1/3.jpg','1/4.jpg']
    },
    {
        poster: '2/1.jpg',
        title: 'EVENT MNGMNT. APP',
        desc: 'Mobile App',
        detailDesc: "I've had the pleasure of developing and designing this event management app. Features were google maps navigation to the venue, day wise detailed agenda with the option of Add as Favourite, overall and session based feedback form.",
        images:['2/1.jpg','2/2.jpg','2/3.jpg','2/4.jpg','2/5.jpg','2/6.jpg','2/7.jpg','2/8.jpg']
    },
    {
        poster: '3/1.jpg',
        title: 'SALES TRACKING APP',
        desc: 'IPad App',
        detailDesc: 'This sales tracking ipad app was made for sales representatives to see their sales information my month and year. It also enabled users to see customers based on specific US states.',
        images:['3/1.jpg','3/2.jpg','3/3.jpg']
    },
    {
        poster: '4/2.jpg',
        title: 'FRIENDS APP',
        desc: 'Mobile App',
        detailDesc: 'All the users friends from facebook was shown on google maps. Facebook and google maps api was used.',
        images:['4/1.jpg','4/2.jpg','4/3.jpg']
    },
    {
        poster: '5/2.jpg',
        title: 'CHAT APP',
        desc: 'Mobile App',
        detailDesc: 'All posts from a specifc group of facebook were fetched and shown. Users could comment, delete, like, unlike posts.',
        images:['5/1.jpg','5/2.jpg','5/3.jpg']
    },
    {
        poster: '6/1.png',
        title: 'WEATHER APP',
        desc: 'Mobile App',
        detailDesc: 'Weather app with option to add more cities and see current location weather.',
        images:['6/1.png']
    },
    {
        poster: '7/1.jpg',
        title: 'Restaurant APP',
        desc: 'Tablet App',
        detailDesc: 'This app made the restaurant process easy. Waiters could place orders from the UI, cooks could see pending orders and update them once cooked. Admin has the option to add/edit menu.',
        images:['7/1.jpg','7/2.jpg','7/3.jpg']
    },
    {
        poster: '8/1.jpg',
        title: 'Contacts APP',
        desc: 'Mobile App',
        detailDesc: '',
        images:['8/1.jpg','8/2.jpg']
    }
];
var currentOne = 0;

var app = angular.module("portfolio", ['ngSanitize', 'ngRoute']);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
                when('/', {
                    templateUrl: 'pages/homeWork.html',
                    controller: 'mainCont'
                }).
                when('/showProjectDetails', {
                    templateUrl: 'pages/workDetails.html',
                    controller: 'workDetails'
                }).
                otherwise({
                    redirectTo: '/'
                });
    }]);

app.controller("mainCont", ["$scope","$location",
    function ($scope,$location) {
        $scope.workDetails= workDetails;
        $scope.showProjectDetails= function(index){
            currentOne =index;
            $location.path( "/showProjectDetails" );
        };

    }
]);
app.controller("workDetails", ["$scope","$location",
    function ($scope,$location) {
        $scope.curretItem = workDetails[currentOne];

    }
]);


