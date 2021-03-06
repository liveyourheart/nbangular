'use strict';

angular.module('nbaPlaygroundApp')
  .service('stats', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var stats =[
    {
      name: 'Games Played',
      id: 'gp'
    },
    {
      name: 'Wins',
      id: 'w'
    },
    {
      name: 'Losses',
      id: 'l'
    },
    {
      name: 'Win Percentage',
      id: 'wPct'
    },
    {
      name: 'Minutes',
      id: 'min'
    },
    {
      name: 'Field Goals Made',
      id: 'fgm'
    },
    {
      name: 'Field Goals Attempted',
      id: 'fga'
    },
    {
      name: 'Field Goal Percentage',
      id: 'fgPct'
    },
    {
      name: '3pt FG Made',
      id: 'fG3M'
    },
    {
      name: '3pt FG Attempted',
      id: 'fG3A'
    },
    {
      name: '3pt FG Percentage',
      id: 'fg3Pct'
    },
    {
      name: 'Free Throws Made',
      id: 'ftm'
    },
    {
      name: 'Free Throws Attempted',
      id: 'fta'
    },
    {
      name: 'Free Throw Percentage',
      id: 'ftPct'
    },
    {
      name: 'Offensive Rebounds',
      id: 'oreb'
    },
    {
      name: 'Defensive Rebounds',
      id: 'dreb'
    },
    {
      name: 'Rebounds',
      id: 'reb'
    },
    {
      name: 'Assists',
      id: 'ast'
    },
    {
      name: 'Turnovers',
      id: 'tov'
    },
    {
      name: 'Steals',
      id: 'stl'
    },
    {
      name: 'Blocks',
      id: 'blk'
    },
    {
      name: 'Blocks Against',
      id: 'blka'
    },
    {
      name: 'Personal Fouls',
      id: 'pf'
    },
    {
      name: 'Fouls Drawn',
      id: 'pfd'
    },
    {
      name: 'Points',
      id: 'pts'
    }
  ];

  return stats;
  });
