var bio = {
	"name" : "Gulamabbas Mawji",
	"role" : "Front-End Web Developer",
	"contacts" : {
		"mobile" : "407-416-6482",
		"email" : "dev@gmawji.com",
		"twitter" : "@gmawji7",
		"location" : "Lake Mary, Florida",
		"github" : "gmawji"
	},
	"biopic" : "images/gmawjilogo.png",
	"welcomeMessage" : "Welcome Msg ..... ...... ...",
	"skills" : ["HTML", "CSS","Python", "GitHub", "JavaScript", "NAS", "Photoshop"]
};

var work = {
	"jobs": [
		{
			"title": "Web & Designer",
			"employer": "Freelance",
			"dates": "January 2012 - Present",
			"location": "Sanford, FL",
			"description": "Designing and selling iOS themes for iPhones, iPads. Designing mail shots for clients. Providing web services for clients, such as updating content, providing graphics, home page refreshes, minor SEO assistance, product entry, and other website maintenance."
		},
		{
			"title": "Co-Founder",
			"employer": "SimplyGroup Inc",
			"dates": "March 2008 - October 2016",
			"location": "Sanford, FL",
			"description": "Making low-level storage accessible and easy for everyone. Network Attached Storage has grown into a consumer to enterprise level business. We make storage accessible for various vertical markets whilst also being one of the only few that provides its own support options (free & paid) to provide a truly value added service. We are The NAS Experts."
		},
		{
			"title": "Systems Integrator",
			"employer": "eAegis LLC",
			"dates": "May 2005 - March 2007",
			"location": "Longwood, FL",
			"description": "We provide pre-sales and post-sales support in assiting customers choose low-level NAS storage for their storage needs. As a VAR System Integrator, eAegis was one of the first pioneering companies in the NAS market. We helped introduce the lnfrant range of NAS units in the US, they were later purchased by Netgear, Inc."
		}
	]
}

var education = {
	"schools": [
		{
			"name": "Lake Mary High School",
			"dates": "2003 - 2007",
			"location": "Lake Mary, FL",
			"degree": "High School Diploma",
			"majors": ["N/A"],
			"graduation": "May 2007"
		}
	],
	"onlineCourses": [
		{
			"school": "Udacity",
			"dates": "2017",
			"location": "Worldwide",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"school": "Udacity",
			"years": "2016-2017",
			"location": "Worldwide",
			"url": "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Build A Portfolio",
			"dates": "Oct 2016 - Dec 2016",
			"description": "Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework. The page is fully responsive and works on mobile, tablet, and desktop browsers.",
			"images": ["images/portfolio.png"]
		},
		{
			"title": "Tournament Results",
			"dates": "Jan 2016 - Feb 2016",
			"description": "Built a PostgreSQL relational database scheme to store the results of a game tournament. Also provided a number of queries to efficiently report the results of the tournament and determine the winner.",
			"images": ["images/tournament.png"]
		},
		{
			"title": "Multi User Blog",
			"dates": "Jan 2016",
			"description": "Built a multi-user blog, hosted on Google App Engine, with comments and login functionality.",
			"images": ["images/mub.png"]
		},
		{
			"title": "Movie Trailer Website",
			"dates": "Nov 2016",
			"description": "Server-side code written in Python to store a list of my favorite movies, including box art imagery and a movie trailer URL. This data is then served to a web page using HTML and CSS allowing visitors to review these movies and watch the trailers.",
			"images": ["images/movietrailer.png"]
		}
	]
}

bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
}

bio.display();

function inName(name) {

	name = name.trim().split(" ");
	console.log(name);
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();

	return name[0] +" "+ name[1];

}

$("#main").append(internationalizeButton);

function displayWork() {

	if(work.jobs.length > 0) {
	
		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerTitle = formattedEmployer + formattedTitle;

			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedDescription);
		}

	}

}

displayWork();

function displaySkills() {

	if (bio.skills.length > 0) {

		$("#header").append(HTMLskillsStart);

		bio.skills.forEach(function(skill) {
			$("#skills").append(HTMLskills.replace("%data%", [skill]));
})

	}

}

displaySkills();

projects.display = function() {

	if (projects.projects.length > 0) {

		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			$(".project-entry:last").append(formattedDescription);

			for (image in projects.projects[i].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
				$(".project-entry:last").append(formattedImage);

//				var imageTag = document.getElementsByTagName("img")[1];
//				var att = document.createAttribute("style");
//				att.value = "width:300px;"
//				imageTag.setAttributeNode(att);
			}
		}

	}

}

projects.display()

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});
