// 'use strict';
var questionsController = angular.module('questionsController', []);

questionsController.controller('questionsController', function($scope){ 
	$scope.foo = "this works";
	$scope.questions = [
	{
	 "name": "A1P1",
	 "label":"De obicei, cat de des/ mult… ? Va uitati la televizor",
	  "questions" :[
	 	{"id":"1", "value" : "O data/ de doua ori pe an sau niciodata"},
		{"id":"2", "value" : "O data/ de doua ori pe luna"},
		{"id":"3", "value" : "O data/ de doua ori pe saptamana"},
		{"id":"4", "value" : "Sub o ora pe zi"},
		{"id":"5", "value" : "1-3 ore zilnic"},
		{"id":"6", "value" : "Peste 3 ore zilnic"},
		// {"id":"98", "value" : "NS"},
		// {"id":"99", "value" : "NR"}
	 ]
	},
	{
	 "name": "A1P2",
	 "label":"Ascultati radio",
	  "questions" :[
	 	{"id":"1", "value" : "O data/ de doua ori pe an sau niciodata"},
		{"id":"2", "value" : "O data/ de doua ori pe luna"},
		{"id":"3", "value" : "O data/ de doua ori pe saptamana"},
		{"id":"4", "value" : "Sub o ora pe zi"},
		{"id":"5", "value" : "1-3 ore zilnic"},
		{"id":"6", "value" : "Peste 3 ore zilnic"},
		// {"id":"98", "value" : "NS"},
		// {"id":"99", "value" : "NR"}
	 ]
	},
	{
	 "name": "A1P3",
	 "label":"Ascultati muzica",
	  "questions" :[
	 	{"id":"1", "value" : "O data/ de doua ori pe an sau niciodata"},
		{"id":"2", "value" : "O data/ de doua ori pe luna"},
		{"id":"3", "value" : "O data/ de doua ori pe saptamana"},
		{"id":"4", "value" : "Sub o ora pe zi"},
		{"id":"5", "value" : "1-3 ore zilnic"},
		{"id":"6", "value" : "Peste 3 ore zilnic"},
		// {"id":"98", "value" : "NS"},
		// {"id":"99", "value" : "NR"}
	 ]
	},
	{
	 "name": "A1P4",
	 "label":"Vizionati filme",
	  "questions" :[
	 	{"id":"1", "value" : "O data/ de doua ori pe an sau niciodata"},
		{"id":"2", "value" : "O data/ de doua ori pe luna"},
		{"id":"3", "value" : "O data/ de doua ori pe saptamana"},
		{"id":"4", "value" : "Sub o ora pe zi"},
		{"id":"5", "value" : "1-3 ore zilnic"},
		{"id":"6", "value" : "Peste 3 ore zilnic"},
		// {"id":"98", "value" : "NS"},
		// {"id":"99", "value" : "NR"}
	 ]
	},
	{
	 "name": "A1P5",
	 "label":"Cititi carti",
	  "questions" :[
	 	{"id":"1", "value" : "O data/ de doua ori pe an sau niciodata"},
		{"id":"2", "value" : "O data/ de doua ori pe luna"},
		{"id":"3", "value" : "O data/ de doua ori pe saptamana"},
		{"id":"4", "value" : "Sub o ora pe zi"},
		{"id":"5", "value" : "1-3 ore zilnic"},
		{"id":"6", "value" : "Peste 3 ore zilnic"},
		// {"id":"98", "value" : "NS"},
		// {"id":"99", "value" : "NR"}
	 ]
	},
	{
	 "name": "A1P6",
	 "label":"Cititi ziare, reviste",
	 "questions" : [
	 	{"id":"1", "value" : "O data/ de doua ori pe an sau niciodata"},
		{"id":"2", "value" : "O data/ de doua ori pe luna"},
		{"id":"3", "value" : "O data/ de doua ori pe saptamana"},
		{"id":"4", "value" : "Sub o ora pe zi"},
		{"id":"5", "value" : "1-3 ore zilnic"},
		{"id":"6", "value" : "Peste 3 ore zilnic"},
		// {"id":"98", "value" : "NS"},
		// {"id":"99", "value" : "NR"}
	 ]
	}
];




});