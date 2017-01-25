/* Try Append Quiz */
// $("#main").append("Gulamabbas Mawji");

/* Variables */
//var awesomeThoughts = "I am Gulamabbas and I am AWESOME!";

// var funThoughts =
//	awesomeThoughts.replace("AWESOME", "FUN");

// [string].replace([old],[new])

// var email = "edu@gmail.com";

// var newEmail =
// 	email.replace("gmail", "gmawji");

// $("#main").append(funThoughts);

 var formattedName = HTMLheaderName.replace("%data%", "Gulamabbas Mawji");

var formattedRole = HTMLheaderRole.replace("%data%", "Front-End Web Developer");

// var mobile = HTMLmobile.replace("%data%", "407-416-6842");
// var email = HTMLemail.replace("%data%", "me@gmawji.com");

var avatar = HTMLbioPic.replace("%data%", "images/bioPic.png");

// var skills = HTMLskillsStart;
// var skillone = HTMLskills.replace("%data%", "HTML");
// var skilltwo = HTMLskills.replace("%data%", "CSS");

// var welcomeMessage = HTMLwelcomeMsg.replace("%data%", "Welcome Msg");

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

// var skills =
// ["HTML", "CSS","Python", "GitHub", "Management"];

// $("#main").append(skills);

var bio = {
	"name" : formattedName,
	"role" : formattedRole,
	"contacts" : {
		"mobile" : "407-416-6482",
		"email" : "dev@gmawji.com",
		"twitter" : "@jokerg7",
		"location" : "Lake Mary, Florida",
		"github" : "gmawji"
	},
	"picture" : avatar,
	"welcome" : "Welcome Msg ..... ...... ...",
	"skills" : ["HTML", "CSS","Python", "GitHub", "Management"]
};

bio.work = {
	"position" : "NAS Product Specialist",
	"employer" : "SimplyNAS",
	"years" : 8 + "years",
	"city" : "Sanford, FL"
};

bio["edu"] = {
	"name" : "Lake Mary High School",
	"years": 4 + "years",
	"city" : "Lake Mary, FL"
};



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
$("#header").append(bio.work.position);

