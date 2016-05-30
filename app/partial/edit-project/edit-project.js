angular.module('app').controller('EditProjectCtrl',function(
    $scope,
    projectService,
    $state,
    Upload
){

    $scope.authors = [
        {
            name:'Gorazd'
        },
        {
            name:'Matija'
        },
        {
            name:'Andrej'
        }
    ];



    $scope.project = projectService.model.item;

    $scope.saveClick = function(){

        projectService.update($scope.project._id, $scope.project)
            .then(function(res){

                // do something
                $state.go('projects');

            });

    };

});
