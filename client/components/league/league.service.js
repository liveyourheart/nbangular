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
    // 'img': 'hawks.png',
    'img': 'hawks.2a620f44.png',
    'primaryColor': '#CA1134',
    'secondaryColor':'#FFFFFF'
  },
  {
    'teamId': 1610612738,
    'abbreviation': 'BOS',
    'teamName': 'Boston Celtics',
    'simpleName': 'Celtics',
    'location': 'Boston',
    // 'img': 'celtics.png',
    'img': 'celtics.7210c805.png',
    'primaryColor': '#0E7934',
    'secondaryColor':'#FFFFFF'
  },
  {
    'teamId': 1610612751,
    'abbreviation': 'BKN',
    'teamName': 'Brooklyn Nets',
    'simpleName': 'Nets',
    'location': 'Brooklyn',
    // 'img': 'nets.png',
    'img': 'nets.b2b2ec91.png',
    'primaryColor': '#2D2926',
    'secondaryColor':'#FFFFFF'
  },
  {
    'teamId': 1610612766,
    'abbreviation': 'CHA',
    'teamName': 'Charlotte Hornets',
    'simpleName': 'Hornets',
    'location': 'Charlotte',
    // 'img': 'hornets.png',
    'img': 'hornets.42f9fae4.png',
    'primaryColor': '#1F1845',
    'secondaryColor':'#0F778B'
  },
  {
    'teamId': 1610612741,
    'abbreviation': 'CHI',
    'teamName': 'Chicago Bulls',
    'simpleName': 'Bulls',
    'location': 'Chicago',
    // 'img': 'bulls.png',
    'img': 'bulls.76341a5b.png',
    'primaryColor': '#BA0B2F',
    'secondaryColor':'#FFFFFF'
  },
  {
    'teamId': 1610612739,
    'abbreviation': 'CLE',
    'teamName': 'Cleveland Cavaliers',
    'simpleName': 'Cavaliers',
    'location': 'Cleveland',
    // 'img': 'cavs.png',
    'img': 'cavs.14d09b79.png',
    'primaryColor': '#70263D',
    'secondaryColor':'#FDB82C'
  },
  {
    'teamId': 1610612742,
    'abbreviation': 'DAL',
    'teamName': 'Dallas Mavericks',
    'simpleName': 'Mavericks',
    'location': 'Dallas',
    // 'img': 'mavs.png',
    'img': 'mavs.338b8cf0.png',
    'primaryColor': '#0C58B7',
    'secondaryColor':'#FFFFFF'
  },
  {
    'teamId': 1610612743,
    'abbreviation': 'DEN',
    'teamName': 'Denver Nuggets',
    'simpleName': 'Nuggets',
    'location': 'Denver',
    // 'img': 'nuggets.png',
    'img': 'nuggets.a6c6f1fb.png',
    'primaryColor': '#4E91CB',
    'secondaryColor':'#FBB73A'
  },
  {
    'teamId': 1610612765,
    'abbreviation': 'DET',
    'teamName': 'Detroit Pistons',
    'simpleName': 'Pistons',
    'location': 'Detroit',
    // 'img': 'pistons.png',
    'img': 'pistons.9cfb5a31.png',
    'primaryColor': '#0F6DB5',
    'secondaryColor':'#EA1D4F'
  },
  {
    'teamId': 1610612744,
    'abbreviation': 'GSW',
    'teamName': 'Golden State Warriors',
    'simpleName': 'Warriors',
    'location': 'Golden State',
    // 'img': 'warriors.png',
    'img': 'warriors.7725fffd.png',
    'primaryColor': '#0F6AB1',
    'secondaryColor':'#FEC33A'
  },
  {
    'teamId': 1610612745,
    'abbreviation': 'HOU',
    'teamName': 'Houston Rockets',
    'simpleName': 'Rockets',
    'location': 'Houston',
    // 'img': 'rockets.png',
    'img': 'rockets.e5fa556a.png',
    'primaryColor': '#D11848',
    'secondaryColor':'#FFFFFF'
  },
  {
    'teamId': 1610612754,
    'abbreviation': 'IND',
    'teamName': 'Indiana Pacers',
    'simpleName': 'Pacers',
    'location': 'Indiana',
    // 'img': 'pacers.png',
    'img': 'pacers.e123a03d.png',
    'primaryColor': '#03285B',
    'secondaryColor':'#FEC33A'
  },
  {
    'teamId': 1610612746,
    'abbreviation': 'LAC',
    'teamName': 'Los Angeles Clippers',
    'simpleName': 'Clippers',
    'location': 'Los Angeles',
    // 'img': 'clippers.png',
    'img': 'clippers.00b36656.png',
    'primaryColor': '#0949AB',
    'secondaryColor':'#D5123F'
  },
  {
    'teamId': 1610612747,
    'abbreviation': 'LAL',
    'teamName': 'Los Angeles Lakers',
    'simpleName': 'Lakers',
    'location': 'Los Angeles',
    // 'img': 'lakers.png',
    'img': 'lakers.888e12a0.png',
    'primaryColor': '#643184',
    'secondaryColor':'#FCC742'
  },
  {
    'teamId': 1610612763,
    'abbreviation': 'MEM',
    'teamName': 'Memphis Grizzlies',
    'simpleName': 'Grizzlies',
    'location': 'Memphis',
    // 'img': 'grizzlies.png',
    'img': 'grizzlies.6fde17f9.png',
    'primaryColor': '#24385A',
    'secondaryColor':'#638AB7'
  },
  {
    'teamId': 1610612748,
    'abbreviation': 'MIA',
    'teamName': 'Miami Heat',
    'simpleName': 'Heat',
    'location': 'Miami',
    // 'img': 'heat.png',
    'img': 'heat.075b796b.png',
    'primaryColor': '#000000',
    'secondaryColor':'#960730'
  },
  {
    'teamId': 1610612749,
    'abbreviation': 'MIL',
    'teamName': 'Milwaukee Bucks',
    'simpleName': 'Bucks',
    'location': 'Milwaukee',
    // 'img': 'bucks.png',
    'img': 'bucks.63906b07.png',
    'primaryColor': '#284E38',
    'secondaryColor':'#DFD2B2'
  },
  {
    'teamId': 1610612750,
    'abbreviation': 'MIN',
    'teamName': 'Minnesota Timberwolves',
    'simpleName': 'Timberwolves',
    'location': 'Minnesota',
    // 'img': 'timberwolves.png',
    'img': 'timberwolves.b1457726.png',
    'primaryColor': '#085182',
    'secondaryColor':'#FFFFFF'
  },
  {
    'teamId': 1610612740,
    'abbreviation': 'NOP',
    'teamName': 'New Orleans Pelicans',
    'simpleName': 'Pelicans',
    'location': 'New Orleans',
    // 'img': 'pelicans.png',
    'img': 'pelicans.c64988de.png',
    'primaryColor': '#071F3D',
    'secondaryColor':'#B9975E'
  },
  {
    'teamId': 1610612752,
    'abbreviation': 'NYK',
    'teamName': 'New York Knicks',
    'simpleName': 'Knicks',
    'location': 'New York',
    // 'img': 'knicks.png',
    'img': 'knicks.40bcc286.png',
    'primaryColor': '#126BB1',
    'secondaryColor':'#F28235'
  },
  {
    'teamId': 1610612760,
    'abbreviation': 'OKC',
    'teamName': 'Oklahoma City Thunder',
    'simpleName': 'Thunder',
    'location': 'Oklahoma City',
    // 'img': 'thunder.png',
    'img': 'thunder.63394bba.png',
    'primaryColor': '#137EC1',
    'secondaryColor':'#EE513B'
  },
  {
    'teamId': 1610612753,
    'abbreviation': 'ORL',
    'teamName': 'Orlando Magic',
    'simpleName': 'Magic',
    'location': 'Orlando',
    // 'img': 'magic.png',
    'img': 'magic.6e14f947.png',
    'primaryColor': '#0B1F25',
    'secondaryColor':'#1374BA'
  },
  {
    'teamId': 1610612755,
    'abbreviation': 'PHI',
    'teamName': 'Philadelphia 76ers',
    'simpleName': '76ers',
    'location': 'Philadelphia',
    // 'img': '76ers.png',
    'img': '76ers.1e1a3a03.png',
    'primaryColor': '#0841A2',
    'secondaryColor':'#D30B37'
  },
  {
    'teamId': 1610612756,
    'abbreviation': 'PHX',
    'teamName': 'Phoenix Suns',
    'simpleName': 'Suns',
    'location': 'Phoenix',
    // 'img': 'suns.png',
    'img': 'suns.f430db59.png',
    'primaryColor': '#010101',
    'secondaryColor':'#E46231'
  },
  {
    'teamId': 1610612757,
    'abbreviation': 'POR',
    'teamName': 'Portland Trail Blazers',
    'simpleName': 'Trail Blazers',
    'location': 'Portland',
    // 'img': 'trailblazers.png',
    'img': 'trailblazers.a9d73afe.png',
    'primaryColor': '#231F20',
    'secondaryColor':'#E03A44'
  },
  {
    'teamId': 1610612758,
    'abbreviation': 'SAC',
    'teamName': 'Sacramento Kings',
    'simpleName': 'Kings',
    'location': 'Sacramento',
    // 'img': 'kings.png',
    'img': 'kings.2c4e47ec.png',
    'primaryColor': '#29251E',
    'secondaryColor':'#6849A6'
  },
  {
    'teamId': 1610612759,
    'abbreviation': 'SAS',
    'teamName': 'San Antonio Spurs',
    'simpleName': 'Spurs',
    'location': 'San Antonio',
    // 'img': 'spurs.png',
    'img': 'spurs.098efe08.png',
    'primaryColor': '#040204',
    'secondaryColor':'#C3CED3'
  },
  {
    'teamId': 1610612761,
    'abbreviation': 'TOR',
    'teamName': 'Toronto Raptors',
    'simpleName': 'Raptors',
    'location': 'Toronto',
    // 'img': 'raptors.png',
    'img': 'raptors.b5dd90bd.png',
    'primaryColor': '#2A2723',
    'secondaryColor':'#BC1537'
  },
  {
    'teamId': 1610612762,
    'abbreviation': 'UTA',
    'teamName': 'Utah Jazz',
    'simpleName': 'Jazz',
    'location': 'Utah',
    // 'img': 'jazz.png',
    'img': 'jazz.320590ac.png',
    'primaryColor': '#062343',
    'secondaryColor':'#FA9F28'
  },
  {
    'teamId': 1610612764,
    'abbreviation': 'WAS',
    'teamName': 'Washington Wizards',
    'simpleName': 'Wizards',
    'location': 'Washington',
    // 'img': 'wizards.png',
    'img': 'wizards.11008e85.png',
    'primaryColor': '#032B5B',
    'secondaryColor':'#E21E3C'
  }
];

return league;
  });
