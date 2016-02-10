'use strict';

angular.module('nbaPlaygroundApp')
  .service('league', function () {
    // AngularJS will instantiate a singleton by calling 'new' on this function
    var league = [
  {
    'teamId': 1610612737,
    'abbreviation': 'ATL',
    'teamName': 'Atlanta Hawks',
    'simpleName': 'Hawks',
    'location': 'Atlanta',
    'img': 'hawks.png',
    'primaryColor': '#CA1134',
    'secondaryColor':'#FFFFFF'
  },
  {
    'teamId': 1610612738,
    'abbreviation': 'BOS',
    'teamName': 'Boston Celtics',
    'simpleName': 'Celtics',
    'location': 'Boston',
    'img': 'celtics.png',
    'primaryColor': '#0E7934',
    'secondaryColor':'#FFFFFF'
  },
  {
    'teamId': 1610612751,
    'abbreviation': 'BKN',
    'teamName': 'Brooklyn Nets',
    'simpleName': 'Nets',
    'location': 'Brooklyn',
    'img': 'nets.png',
    'primaryColor': '#2D2926',
    'secondaryColor':'#FFFFFF'
  },
  {
    'teamId': 1610612766,
    'abbreviation': 'CHA',
    'teamName': 'Charlotte Hornets',
    'simpleName': 'Hornets',
    'location': 'Charlotte',
    'img': 'hornets.png',
    'primaryColor': '#1F1845',
    'secondaryColor':'#0F778B'
  },
  {
    'teamId': 1610612741,
    'abbreviation': 'CHI',
    'teamName': 'Chicago Bulls',
    'simpleName': 'Bulls',
    'location': 'Chicago',
    'img': 'bulls.png',
    'primaryColor': '#BA0B2F',
    'secondaryColor':'#FFFFFF'
  },
  {
    'teamId': 1610612739,
    'abbreviation': 'CLE',
    'teamName': 'Cleveland Cavaliers',
    'simpleName': 'Cavaliers',
    'location': 'Cleveland',
    'img': 'cavs.png',
    'primaryColor': '#70263D',
    'secondaryColor':'#FDB82C'
  },
  {
    'teamId': 1610612742,
    'abbreviation': 'DAL',
    'teamName': 'Dallas Mavericks',
    'simpleName': 'Mavericks',
    'location': 'Dallas',
    'img': 'mavs.png',
    'primaryColor': '#0C58B7',
    'secondaryColor':'#FFFFFF'
  },
  {
    'teamId': 1610612743,
    'abbreviation': 'DEN',
    'teamName': 'Denver Nuggets',
    'simpleName': 'Nuggets',
    'location': 'Denver',
    'img': 'nuggets.png',
    'primaryColor': '#4E91CB',
    'secondaryColor':'#FBB73A'
  },
  {
    'teamId': 1610612765,
    'abbreviation': 'DET',
    'teamName': 'Detroit Pistons',
    'simpleName': 'Pistons',
    'location': 'Detroit',
    'img': 'pistons.png',
    'primaryColor': '#0F6DB5',
    'secondaryColor':'#EA1D4F'
  },
  {
    'teamId': 1610612744,
    'abbreviation': 'GSW',
    'teamName': 'Golden State Warriors',
    'simpleName': 'Warriors',
    'location': 'Golden State',
    'img': 'warriors.png',
    'primaryColor': '#0F6AB1',
    'secondaryColor':'#FEC33A'
  },
  {
    'teamId': 1610612745,
    'abbreviation': 'HOU',
    'teamName': 'Houston Rockets',
    'simpleName': 'Rockets',
    'location': 'Houston',
    'img': 'rockets.png',
    'primaryColor': '#D11848',
    'secondaryColor':'#FFFFFF'
  },
  {
    'teamId': 1610612754,
    'abbreviation': 'IND',
    'teamName': 'Indiana Pacers',
    'simpleName': 'Pacers',
    'location': 'Indiana',
    'img': 'pacers.png',
    'primaryColor': '#03285B',
    'secondaryColor':'#FEC33A'
  },
  {
    'teamId': 1610612746,
    'abbreviation': 'LAC',
    'teamName': 'Los Angeles Clippers',
    'simpleName': 'Clippers',
    'location': 'Los Angeles',
    'img': 'clippers.png',
    'primaryColor': '#0949AB',
    'secondaryColor':'#D5123F'
  },
  {
    'teamId': 1610612747,
    'abbreviation': 'LAL',
    'teamName': 'Los Angeles Lakers',
    'simpleName': 'Lakers',
    'location': 'Los Angeles',
    'img': 'lakers.png',
    'primaryColor': '#643184',
    'secondaryColor':'#FCC742'
  },
  {
    'teamId': 1610612763,
    'abbreviation': 'MEM',
    'teamName': 'Memphis Grizzlies',
    'simpleName': 'Grizzlies',
    'location': 'Memphis',
    'img': 'grizzlies.png',
    'primaryColor': '#24385A',
    'secondaryColor':'#638AB7'
  },
  {
    'teamId': 1610612748,
    'abbreviation': 'MIA',
    'teamName': 'Miami Heat',
    'simpleName': 'Heat',
    'location': 'Miami',
    'img': 'heat.png',
    'primaryColor': '#000000',
    'secondaryColor':'#960730'
  },
  {
    'teamId': 1610612749,
    'abbreviation': 'MIL',
    'teamName': 'Milwaukee Bucks',
    'simpleName': 'Bucks',
    'location': 'Milwaukee',
    'img': 'bucks.png',
    'primaryColor': '#284E38',
    'secondaryColor':'#DFD2B2'
  },
  {
    'teamId': 1610612750,
    'abbreviation': 'MIN',
    'teamName': 'Minnesota Timberwolves',
    'simpleName': 'Timberwolves',
    'location': 'Minnesota',
    'img': 'timberwolves.png',
    'primaryColor': '#085182',
    'secondaryColor':'#FFFFFF'
  },
  {
    'teamId': 1610612740,
    'abbreviation': 'NOP',
    'teamName': 'New Orleans Pelicans',
    'simpleName': 'Pelicans',
    'location': 'New Orleans',
    'img': 'pelicans.png',
    'primaryColor': '#071F3D',
    'secondaryColor':'#B9975E'
  },
  {
    'teamId': 1610612752,
    'abbreviation': 'NYK',
    'teamName': 'New York Knicks',
    'simpleName': 'Knicks',
    'location': 'New York',
    'img': 'knicks.png',
    'primaryColor': '#126BB1',
    'secondaryColor':'#F28235'
  },
  {
    'teamId': 1610612760,
    'abbreviation': 'OKC',
    'teamName': 'Oklahoma City Thunder',
    'simpleName': 'Thunder',
    'location': 'Oklahoma City',
    'img': 'thunder.png',
    'primaryColor': '#137EC1',
    'secondaryColor':'#EE513B'
  },
  {
    'teamId': 1610612753,
    'abbreviation': 'ORL',
    'teamName': 'Orlando Magic',
    'simpleName': 'Magic',
    'location': 'Orlando',
    'img': 'magic.png',
    'primaryColor': '#1374BA',
    'secondaryColor':'#0B1F25'
  },
  {
    'teamId': 1610612755,
    'abbreviation': 'PHI',
    'teamName': 'Philadelphia 76ers',
    'simpleName': '76ers',
    'location': 'Philadelphia',
    'img': '76ers.png',
    'primaryColor': '#0841A2',
    'secondaryColor':'#D30B37'
  },
  {
    'teamId': 1610612756,
    'abbreviation': 'PHX',
    'teamName': 'Phoenix Suns',
    'simpleName': 'Suns',
    'location': 'Phoenix',
    'img': 'suns.png',
    'primaryColor': '#010101',
    'secondaryColor':'#E46231'
  },
  {
    'teamId': 1610612757,
    'abbreviation': 'POR',
    'teamName': 'Portland Trail Blazers',
    'simpleName': 'Trail Blazers',
    'location': 'Portland',
    'img': 'trailblazers.png',
    'primaryColor': '#231F20',
    'secondaryColor':'#E03A44'
  },
  {
    'teamId': 1610612758,
    'abbreviation': 'SAC',
    'teamName': 'Sacramento Kings',
    'simpleName': 'Kings',
    'location': 'Sacramento',
    'img': 'kings.png',
    'primaryColor': '#29251E',
    'secondaryColor':'#6849A6'
  },
  {
    'teamId': 1610612759,
    'abbreviation': 'SAS',
    'teamName': 'San Antonio Spurs',
    'simpleName': 'Spurs',
    'location': 'San Antonio',
    'img': 'spurs.png',
    'primaryColor': '#040204',
    'secondaryColor':'#C3CED3'
  },
  {
    'teamId': 1610612761,
    'abbreviation': 'TOR',
    'teamName': 'Toronto Raptors',
    'simpleName': 'Raptors',
    'location': 'Toronto',
    'img': 'raptors.png',
    'primaryColor': '#2A2723',
    'secondaryColor':'#BC1537'
  },
  {
    'teamId': 1610612762,
    'abbreviation': 'UTA',
    'teamName': 'Utah Jazz',
    'simpleName': 'Jazz',
    'location': 'Utah',
    'img': 'jazz.png',
    'primaryColor': '#062343',
    'secondaryColor':'#FA9F28'
  },
  {
    'teamId': 1610612764,
    'abbreviation': 'WAS',
    'teamName': 'Washington Wizards',
    'simpleName': 'Wizards',
    'location': 'Washington',
    'img': 'wizards.png',
    'primaryColor': '#032B5B',
    'secondaryColor':'#E21E3C'
  }
];

return league;
  });
