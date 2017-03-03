var avatar = HTMLbioPic.replace("%data%", "images/bioPic.png");

var bio = {
	"name" : formattedName,
	"role" : formattedRole,
	"contacts" : {
		"mobile" : "407-416-6482",
		"email" : "dev@gmawji.com",
		"twitter" : "@gmawji7",
		"location" : "Lake Mary, Florida",
		"github" : "gmawji"
	},
	"picture" : avatar,
	"welcome" : "Welcome Msg ..... ...... ...",
	"skills" : ["HTML", "CSS","Python", "GitHub", "Management"]
};

var work = {
	"jobs": [
		{
			"position" : "Web & Designer",
			"employer" : "Freelance",
			"years" : "4 Years",
			"city" : "Sanford, FL"
		},
		{
			"position" : "Co-Founder",
			"employer" : "SimplyGroup Inc",
			"years" : "8 Years",
			"city" : "Sanford, FL"
		},
		{
			"position" : "Systems Integrator",
			"employer" : "eAegis LLC",
			"years" : "2 Years",
			"city" : "Longwood, FL"
		}
	]
}

var education = {
	"schools": [
		{
			"name": "Lake Mary High School",
			"years": "4 Years",
			"city": "Lake Mary, FL",
			"majors": ["High School Diploma"],
			"graduation": "May 2007"
		}
	],
	"onlineCourses": [
		{
			"name": "Udacity",
			"years": "1 Year",
			"city": "Worldwide",
			"majors": ["Front-End Web Developer Nanodegree"],
			"graduation": "Ongoing"
		},
		{
			"name": "Udacity",
			"years": "1 Year",
			"city": "Worldwide",
			"majors": ["Full Stack Web Developer Nanodegree"],
			"graduation": "Ongoing"
		}
	]
}


$("#header").prepend(bio.role);
$("#header").prepend(bio.name);
$("#header").append(bio.contacts.mobile);
$("#header").append(bio.contacts.email);
$("#header").append(bio.contacts.twitter);
$("#header").append(bio.contacts.location);
$("#header").append(bio.contacts.github);
$("#header").append(bio.picture);
$("#header").append(bio.welcome);
$("#header").append(bio.skills);
$("#header").append(work.position);
$("#header").append(edu.name);

