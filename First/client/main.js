import angular from 'angular';
import angularMeteor from 'angular-meteor';

import snake from '../imports/components/date/snake';
import insert from '../imports/components/insertUse/insert';
import needs from '../imports/components/need/needs'; 

angular.module('alldata',[
	angularMeteor,
	snake.name,
	insert.name
]
);
/*
angular.module('needsa',[
	angularMeteor,
	needs.name
]);
*/