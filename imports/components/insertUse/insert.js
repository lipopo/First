import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { mydb } from '../../api/dbs.js';

import template from './insert.html';

class Ctrl{
	constructor($scope){
		$scope.viewModel(this);
		this.helpers({
			dates(){
				return mydb.find({});
			}
		});
	}
	insert(){
		mydb.insert({title:this.title,value:this.value,inhere:'2',data:Date()});
	}
}

export default angular.module('insert',[
	angularMeteor
])
	.component('insert',{
		templateUrl:'imports/components/insertUse/insert.html',
		controller:['$scope',Ctrl] 
	});