app.controller('AboutCtrl', function($scope){
	$scope.myself= [
	{
		title:"I Live and Breathe - Design and Code",
		desc:[
		"My name is Senthil Sivaramakrishnan and I design and build beautiful experiences for the web, mobile and beyond. I have over 9 years of experience in both website development and application development environments and have worked on a variety of projects ranging from e-commerce, management security system to dashboard interfaces to full-fledged marketing campaigns.",
		"I am passionately creative, quality driven and motivated to create the best design solution. Combined with an in-depth approach to research and analysis, I am able to focus on the target audience and engage the design in a way that meets the brief. Hard work and determination are key qualities that make my designs successful and I believe my eye for detail and high standards ensures a thorough design process and solution. I enjoy life and am passionate about providing excellence in everything I do.",
"I'm exploring the modern work flow of the front end tool 'Yeoman, Grunt and Bower. I design in the browser, and I use Sketch. I'm comfortable with HTML/CSS/SCSS, Bootstrap, JS, AngularJS,jQuery, php, SQL, JSON, D3, git, yeoman."],
		
	}
	];
});
app.controller('ProfileCtrl', function($scope){
	$scope.profilelinks = [
	{
		title:'Online Profile',
		link:'http://in.linkedin.com/in/ssthil'
	},
	{
		title:'UI Design Portfolio',
		link:'http://www.behance.net/ssthil'
	},
	{
		title:'Github reference',
		link:'https://github.com/ssthil/'
	},
	{
		title:'Online course completion',
		link:'http://www.codecademy.com/ssthil'
	},
	{
		title:'Blog for code reference',
		link:'http://ssthil.blogspot.in/'
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
app.controller('QualificationCtrl', function($scope){
	$scope.qualificationlist = [
	{
		title:'Master Degree',
		desc:'Pursuing MCA through IGNOU'
	},
	{
		title:'Bachelor Degree',
		desc:'B.Com Computer Application through Annamalai University (63%) - 1999'
	},
	{
		title:'Higher Secondary',
		desc:'Bio-Maths, AV Hr Sec School, Paramakudi, Tamilnadu - India (83%) - 2001'
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
app.controller('PersonalCtrl', function($scope){
	$scope.personaldetails = [
	{
		name:'Name',
		details:'Senthil Sivaramakrishnan'
	},
	{
		name:'Gender',
		details:'Male'
	},
	{
		name:'Date of birth',
		details:'15-06-1983'
	},
	{
		name:'Marital Status',
		details:'Married'
	},
	{
		name:'Nationality',
		details:'Indian'
	},
	{
		name:'Passport Number',
		details:'F4639382'
	}
	];
});
app.controller('ProfileListCtrl', function($scope){
	$scope.lists = [
	{
		title:'About Me',
		desc:'I’m a UX Engineer and Front End Developer living in Singapore. With a background in graphic design and technology, I create digital experiences that are exciting, innovative, elegant and most important — effective. I’m passionate about cutting edge technologies like, responsive design, HTML/HTML5, CSS/CSS3, AngularJS, Bootstrap, JavaScript/jQuery and web typography and both tweet and write about these subjects.',
		id: 'about'
	},
	{
		title:'Online Profile',
		desc:"I'm a full stack designer. I love creating clean UI. I approach each project with empathy and follow a lean ux process. ",
		id: 'profile'
	},
	{
		title:'Technical Skills',
		desc:'While not always necessary, sometimes you need to put your DOM in a box. For those situations, try the panel component. While not always necessary,While not always necessary,While not always necessary,While not always necessary,While not always necessary,While not always necessary,While not always necessary,While not always necessary,While not always necessary,While not always necessary,',
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