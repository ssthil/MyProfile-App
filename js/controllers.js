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
app.controller('ProfileCtrl', function($scope, $http){
	//$scope.profilelinks = [];
	$http.get("js/json/profile.json")
		.success(function(data){ 
		console.log("Success: I'm ", JSON.stringify(data[0]));
		$scope.profilelinks = data;
		})
});
/* app.controller('ProfileCtrl', function($scope){
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
}); */

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
		cname:"Emerio Globesoft, Singapore",
		experience:"from Jan 2013 to till",
		role:'UI/UX Engineer - Front End Developer',
		skills:'HTML, CSS, Javascript, Jquery, HTML5, CSS3, Photoshop, Bootstrap, PHP, AngularJS, Jquery-Mobile',
		responsibility:'UI Design and integration'
	},
	{
		cname:"Connex Info System, Bangalore, India",
		experience:"from Oct 2011 to Jan 2013",
		role:'Senior UI Engineer - Front End Developer',
		skills:'Asp.net Visual Studio 2008 - 2010, JavaScript, CSS,HTML, MVC Framework, Photoshop, Jquery, HTML5, CSS3',
		responsibility:'UI Design and integration'
	},
	{
		cname:"Adodis Technologies, Bangalore, India",
		experience:"from Jun 2010 to Oct 2011",
		role:'Team Lead - Senior Web GUI Designer',
		skills:'Adobe Photoshop CS3, HTML, CSS, Basic Jquery',
		responsibility:'Magento ecommerce Themes Creation, Drupal Business Themes Creation, Quality Analyze, UI Design for Joomla Module, Android Apps Design'
	},
	{
		cname:"Maxval-IP Ventures India (P) Ltd, Coimbatore, India",
		experience:"from June 2010 to Oct 2010",
		role:'Sr.Web and GUI Designer',
		skills:'Adobe Photoshop CS3, Visual Studio 2008, HTML, CSS, Javascript, Silverlight',
		responsibility:'UI Design for Web Application and Windows Application'
	},
	{
		cname:"Banyan InfoTech, Coimbatore, India",
		experience:"from Dec 2008 to June 2010",
		role:'Team Lead / Senior Web Designer',
		skills:'Adobe Photoshop CS3, Dreamweaver CS3, Flash CS3, HTML, CSS, Basic Php, Basic SEO, Basic Javascript',
		responsibility:'Website Design, PSD to HTML conversion, Tabless Website, Flash Website, Flash Animation, Flash Presentation'
	},
	{
		cname:"Global Vision, Coimbatore, India",
		experience:"from March 2008 to Dec 2008",
		role:'Web Designer',
		skills:'Adobe Photoshop CS2, Dreamweaver 8, Flash 8, HTML, CSS',
		responsibility:'Website Design, Logo Design, Brochure Design, Brand promotion'
	},
	{
		cname:"Shalomtech Web Designing & Multimedia Institution, Coimbatore, India",
		experience:"from Jan 2007 to Feb 2008",
		role:'Web Designer and Multimedia Faculty',
		skills:'Adobe Photoshop CS2, Dreamweaver 8, Flash 8, HTML, Corel Draw',
		responsibility:'Website Design, Indoor Outdoor Advertisement Designs, Logo Design, Brochure Design, Brand promotion, Teach multimedia courses'
	},
	{
		cname:"The Sign lab innovative sign maker, Coimbatore, India",
		experience:"from Feb 2005 to Dec 2006",
		role:'Graphic Designer',
		skills:'Adobe Photoshop CS2, Corel Draw',
		responsibility:'Indoor Outdoor Advertisement Designs, Logo Design, Brochure Design, Brand promotion'
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
		id: 'experience'	
	},
	{
		title:'Personal Details',
		desc:'While not always necessary, sometimes you need to put your DOM in a box. For those situations, try the panel component.',
		id: 'personal'
	}
	];
});