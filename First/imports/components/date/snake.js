import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { mydb } from '../../api/dbs.js';

import template from './snake.html';

class Ctrl{
	constructor($scope){
		$scope.viewModel(this);
		this.helpers({
			dates(){
				return mydb.find({});
			}
		});	
	}
	
	submits(date){
		mydb.update({_id:date._id},{$set:{value:date.value,data:Date()}});
		mydb.update({_id:date._id},{$set:{inhere:"2"}});
	}
	
	talk(date){
		mydb.update({_id:date._id},{$set:{inhere:"1"}});
		date.inhere='1';
	}
	
	upda(date){
		mydb.update({_id:date._id},{$set:{value:date.value}});
	}
}

export default angular.module('snake',[
	angularMeteor
])
	.component('snake',{
		templateUrl:'imports/components/date/snake.html',
		controller:['$scope',Ctrl]
	});