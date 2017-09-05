console.log('app.js');

const app = angular.module('noticeboard', []);

app.controller('mainController', ['$http', function($http) {

	this.message = "hi, I am from the controller";
	this.notices = [];
	this.formdata = {};

	$http({
		method: 'GET',
		url: 'http://localhost:3000/notices'
	}).then(response => {
		console.log(response.data);
		this.notices = response.data;
	})
	  .catch(err => console.log(err));

	this.processForm = () => {
		// do something with this.formdata
		console.log('process form is running');
		console.log('here is the formdata: ', this.formdata);
		$http({
			method: 'POST',
			url: 'http://localhost:3000/notices',
			data: this.formdata
		}).then(response => {
			console.log(response);
			this.notices.unshift(response.data);
		})
		  .catch(err => console.log(err));
	}

}]);
