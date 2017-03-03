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
			"title": "Web & Designer",
			"employer": "Freelance",
			"dates": "January 2012 - Present",
			"location": "Sanford, FL",
			"description": "Designing and selling iOS themes for iPhones, iPads. Designing mail shots for clients. Providing web services for clients, such as updating content, providing graphics, home page refreshes, minor SEO assistance, product entry, and other website maintenance."
		},
		{
			"title": "Co-Founder",
			"employer": "SimplyGroup Inc",
			"dates": "March 2088 - October 2016",
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
