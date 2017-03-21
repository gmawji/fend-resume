var bio = {
	"name": "Gulamabbas Mawji",
	"role": "Front-End Web Developer",
	"contacts": {
		"mobile": "407-416-6482",
		"email": "dev@gmawji.com",
		"twitter": "@gmawji7",
		"location": "Lake Mary, Florida",
		"github": "gmawji"
	},
	"biopic": "images/gmawjilogo.png",
	"welcomeMessage": "Welcome Msg ..... ...... ...",
	"skills": ["HTML", "CSS", "Python", "GitHub", "JavaScript", "NAS",
		"Photoshop"
	]
};

var work = {
	"jobs": [{
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
};

var education = {
	"schools": [{
			"name": "Ryde College",
			"dates": "2000-2001",
			"location": "Watford, England",
			"degree": "GCSE - ICT",
			"majors": "IT",
		},
		{
			"name": "Lake Mary High School",
			"dates": "2003 - 2007",
			"location": "Lake Mary, FL",
			"degree": "High School Diploma",
			"majors": "General Education",
		}
	],
	"onlineCourses": [{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": "2017",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"title": "Full Stack Web Developer Nanodegree",
			"school": "Udacity",
			"dates": "2016-2017",
			"url": "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
		}
	]
};

var projects = {
	"projects": [{
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
};

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
};

bio.display();

work.display = function() {
	if (work.jobs.length > 0) {
		$("#workExperience").append(HTMLworkStart);

		for (var i = 0; i < work.jobs.length; i++) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[
				i].description);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;

			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

work.display();

education.display = function() {
	if (education.schools.length > 0) {
		for (var i = 0; i < education.schools.length; i++) {
			$("#education").append(HTMLschoolStart);

			var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);

			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[
				i].degree);

			var formattedDegreeName = formattedName + formattedDegree;
			$(".education-entry:last").append(formattedDegreeName);

			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i]
				.dates);
			$(".education-entry:last").append(formattedDates);

			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[
				i].location);
			$(".education-entry:last").append(formattedLocation);

			var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[i]
				.majors);
			$(".education-entry:last").append(formattedMajors);
		}
	}

	if (education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);

		for (var i = 0; i < education.onlineCourses.length; i++) {
			$("#education").append(HTMLschoolStart);

			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[
				i].title);

			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[
				i].school);

			var formattedOnlineDegreeName = formattedTitle + formattedSchool;
			$(".education-entry:last").append(formattedOnlineDegreeName);

			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[
				i].dates);
			$(".education-entry:last").append(formattedOnlineDates);

			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[
				i].url);
			$(".education-entry:last").append(formattedURL);
		}
	}
};

education.display();

function displaySkills() {
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		bio.skills.forEach(function(skill) {
			$("#skills").append(HTMLskills.replace("%data%", [skill]));
		});
	}
}

displaySkills();

projects.display = function() {
	if (projects.projects.length > 0) {
		for (var i = 0; i < projects.projects.length; i++) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i]
				.title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i]
				.dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%",
				projects.projects[i].description);
			$(".project-entry:last").append(formattedDescription);

			for (image in projects.projects[i].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[
					i].images[image]);

				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

function inName(name) {
	name = name.trim().split(" ");

	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();

	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x, y);
});
