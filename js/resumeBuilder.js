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

var projects = {
	"projects": [
		{
			"title": "Build A Portfolio",
			"dates": "Oct 2016 - Dec 2016",
			"description": "Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework. The page is fully responsive and works on mobile, tablet, and desktop browsers."
		},
		{
			"title": "Tournament Results",
			"dates": "Jan 2016 - Feb 2016",
			"description": "Built a PostgreSQL relational database scheme to store the results of a game tournament. Also provided a number of queries to efficiently report the results of the tournament and determine the winner."
		},
		{
			"title": "Multi User Blog",
			"dates": "Jan 2016",
			"description": "Built a multi-user blog, hosted on Google App Engine, with comments and login functionality."
		},
		{
			"title": "Movie Trailer Website",
			"dates": "Nov 2016",
			"description": "Server-side code written in Python to store a list of my favorite movies, including box art imagery and a movie trailer URL. This data is then served to a web page using HTML and CSS allowing visitors to review these movies and watch the trailers."
		}
	]
}
