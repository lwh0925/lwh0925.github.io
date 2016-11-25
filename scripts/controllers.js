// 控制器模块
angular.module('Controllers', [])

// 处理导航
    .controller('NavsController', ['$scope', function($scope) {
        $scope.navs = [
            {link: '#/today', text: '个人信息', icon: 'icon-home'},
            {link: '#/older', text: '自我评价', icon: 'icon-file-empty'},
            {link: '#/author', text: '毕业学院', icon: 'icon-pencil'},
            {link: '#/category', text: '专业技能', icon: 'icon-menu'},
            {link: '#/favourite', text: '工作经历', icon: 'icon-heart'},
            {link: '#/works', text: '项目经验', icon: 'icon-cog'}

        ];
    }])

// 个人信息
    .controller('TodayController', ['$scope', '$rootScope', function($scope, $rootScope) {

        $rootScope.title = '个人信息';
        $rootScope.index = 0;

    }])

// 自我评价
    .controller('OlderController', ['$scope', '$rootScope', function($scope, $rootScope) {

        $rootScope.title = '自我评价';
        $rootScope.index = 1;

    }])

// 毕业学院
    .controller('AuthorController', ['$scope', '$rootScope', function($scope, $rootScope) {

        $rootScope.title = '毕业学院';
        $rootScope.index = 2;

    }])


// 专业技能
    .controller('CategoryController', ['$scope', '$rootScope', function($scope, $rootScope) {

        $rootScope.title = '专业技能';
        $rootScope.index = 3;

    }])

// 工作经历
    .controller('FavouriteController', ['$scope', '$rootScope', function($scope, $rootScope) {

        $rootScope.title = '工作经历';
        $rootScope.index = 4;

    }])

//项目经验
    .controller('WorksController', ['$scope', '$rootScope', function($scope, $rootScope) {

        $rootScope.title = '项目经验';
        $rootScope.index = 5
    }])


