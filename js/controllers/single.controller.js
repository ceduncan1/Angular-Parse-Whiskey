let SingleController = function($scope, $stateParams, $http, PARSE) {
  
  let url = PARSE.URL + 'classes/whiskey/' + $stateParams.whiskeyId;
  // console.log(url);

  // console.log($stateParams);

  // $scope.title = "Single Controller";

  $http.get(url, PARSE.CONFIG).then( (res) => {
    // console.log(res);

    $scope.singleWhiskey = res.data;

  });

};

SingleController.$inject = ['$scope', '$stateParams', '$http', 'PARSE'];

export default SingleController;