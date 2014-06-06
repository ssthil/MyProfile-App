app.controller('AboutCtrl', function($scope){
	$scope.myself= [
	{
		fname:"Senthil",
		lname:"Sivaramakrishnan",
		gender:'Male',
		dob:'15-06-1983',
		marital_status:'Married',
		nationality:'Indian'
	}
	];
});
app.controller('ExpCtrl', function($scope){
	$scope.experience= [
	{
		fname:"Emerio",
		lname:"Globesoft",
		gender:'Male',
		dob:'15-06-1983',
		marital_status:'Married',
		nationality:'Indian'
	}
	];
});
app.controller('TechCtrl', function($scope){
	$scope.technicalskills = [
	{
		design:'UI UX',
		development:'HTML/HTML5, CSS/CSS3'
	}
	];
});
app.controller('ProfileListCtrl', function($scope){
	$scope.lists = [
	{
		title:'About Me',
		desc:'While not always necessary, sometimes you need to put your DOM in a box. For those situations, try the panel component.',
		id: 'about'
	},
	{
		title:'Online Profile',
		desc:'While not always necessary, sometimes you need to put your DOM in a box. For those situations, try the panel component.',
		id: 'profile'
	},
	{
		title:'Technical Skills',
		desc:'While not always necessary, sometimes you need to put your DOM in a box. For those situations, try the panel component.',
		id: 'technical'
	},
	{
		title:'Academic Qualification',
		desc:'While not always necessary, sometimes you need to put your DOM in a box. For those situations, try the panel component.',
		id: 'academic'
	},
	{
		title:'Additional Qualification',
		desc:'While not always necessary, sometimes you need to put your DOM in a box. For those situations, try the panel component.',
		id: 'additional'
	},
	{
		title:'Career Experience',
		desc:'While not always necessary, sometimes you need to put your DOM in a box. For those situations, try the panel component.',
		id: 'career'	
	},
	{
		title:'Personal Details',
		desc:'While not always necessary, sometimes you need to put your DOM in a box. For those situations, try the panel component.',
		id: 'profile'
	}
	];
});