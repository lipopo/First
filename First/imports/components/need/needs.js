import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { mydb2 } from '../../api/dbs.js';

import template from './needs.html';

class Ctrlneed{
	constructor($scope){
		$scope.viewModel(this);
		this.helpers({
			needdates(){
				return mydb2.find({});
			}
		});
	}
	
	send(){
		mydb2.insert({people:this.people,thing:this.thing,time:Date()});
	}
	
}

export default angular.module('needs',[
	angularMeteor
])
	.component('needs',{
		templateUrl:'imports/components/need/needs.html',
		controller:['$scope',Ctrlneed]
	})