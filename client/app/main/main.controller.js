'use strict';

(function() {

class MainController {

  constructor($http, league, $scope, $location) {
    this.$http = $http;
    this.awesomeThings = [];
    this.league = league;
    $scope.selectedTeam = 'Pick a Team';
    $scope.selectedTeamId = -1;
    $scope.league = league;
    $scope.teamImage = 'nbangular.png';
    $scope.primaryColor = '#797979';
    $scope.secondaryColor = '#ffffff';
    $scope.teamID = 0;
    $scope.roster = undefined;
    $scope.coaches = undefined;
    $scope.teamStats = undefined;
    $scope.teamInfo = undefined;
    $scope.teamDashboard = undefined;
    $scope.tabs = [
      {
        id: 'roster',
        active: false,
        link: 'tab-menu-option-left'
      },
      {
        id: 'main',
        active: true,
        link: 'tab-menu-option-middle'
      },
      {
        id: 'charts',
        active: false,
        link: 'tab-menu-option-right'
      }
    ];

    //watches select of teams and updates info
    $scope.$watch('selectedTeam', function(newVal, oldVal){
      if(newVal !== oldVal){

        for(var i = 0; i < $scope.league.length; i++){
          if($scope.league[i].teamName === newVal){
            $scope.selectedTeamId = i;
          }
        }
        $scope.teamImage = $scope.league[$scope.selectedTeamId].img;
        $scope.primaryColor = $scope.league[$scope.selectedTeamId].primaryColor;
        $scope.secondaryColor = $scope.league[$scope.selectedTeamId].secondaryColor;
        $scope.teamID = $scope.league[$scope.selectedTeamId].teamId;
        $scope.getRoster($scope.teamID);
        $scope.getTeamStats($scope.teamID);
        $scope.getTeamDashboard($scope.teamID);

      }
    });

    $scope.getTeamDashboard = function(teamID){
      $http.get('/api/teamSplits/' + teamID).then(response =>{
        $scope.teamDashboard = response.data;
      });
    };

    $scope.getRoster = function(teamID) {
      $http.get('/api/rosters/' + teamID).then(response =>{
        $scope.coaches = response.data.commonTeamRoster;
        $scope.roster = response.data.commonTeamRoster;
      });
    };

    $scope.getTeamStats = function(teamID){
      $http.get('/api/teamStats/' + teamID).then(response =>{
        $scope.teamStats = response.data.teamSeasonRanks[0];
        $scope.teamInfo = response.data.teamInfoCommon[0];
      });
    };

    $scope.tabIt = function(that){
      var notEl;
      for(var i = 0; i < $scope.tabs.length; i++){
        if($scope.tabs[i].id === that){
          $scope.tabs[i].active = true;
          var el = angular.element(document.querySelector('.' + $scope.tabs[i].link));
          el.addClass('tab-menu-option-selected');
        } else{
          $scope.tabs[i].active = false;
          notEl = angular.element(document.querySelector('.' + $scope.tabs[i].link));
          notEl.removeClass('tab-menu-option-selected');
        }
      }
    };

    $scope.goToPlayer = function(playerID){
      $location.path('/' + playerID);
    };
  }

  }

angular.module('nbaPlaygroundApp')
  .controller('MainController', MainController);

})();
