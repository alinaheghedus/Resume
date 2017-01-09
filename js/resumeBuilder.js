var bio = {
    "name": "Alina Heghedus",
    "role": "Web Developer",
    "contacts": {
        "mobile": "647-551-1678",
        "email": "heghedusalina@gmail.com",
        "github": "alinaheghedus",
        "location": "Toronto"
    },
    "welcomeMessage": "Welcome to my online resume!",
    "skills": ["HTML/CSS", "JavaScript", "jQuery", "Web development"],
    "picture": "images/me.jpg"
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedName, formattedRole);

    var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedPic, formattedWelcomeMsg);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedMobile + formattedEmail, formattedGithub + formattedLocation);

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);

        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
            $('#skills').append(formattedSkill);
        }
    }
};

bio.display();

var work = {
    "jobs": [{
            "employer": "Optimalgorythms",
            "title": "Web developer",
            "location": "Toronto",
            "dates": "Jan 2015 - today",
            "description": "working on entry level web development"
        },
        {
            "employer": "Trend Financial",
            "title": "Auditor",
            "location": "Toronto",
            "dates": "Dec 2012 - Sep 2014",
            "description": "auditing client files, bank statements, reviewing every aspect of their file before lending a vehicle"
        }
    ]
};

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;

        $(".work-entry:last").append(formattedEmployerTitle);
    });
};

work.display();

var education = {
    "schools": [{
        "name": "Babes Bolyai University",
        "majors": ["Sociology"],
        "location": "Cluj-Napoca",
        "dates": "2004-2008",
        "degree": "BA",
        "url": "http://www.ubbcluj.ro/en/"
    }],
    "onlineCourses": [{
        "school": "Udacity",
        "title": "Front-End Web Development",
        "dates": "Aug 2016-today",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?v=fe1"
    }]
};

education.display = function() {

    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", school.majors);
        var formattedSchoolInfo = formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajors;

        $(".education-entry:last").append(formattedSchoolInfo);
    });


    education.onlineCourses.forEach(function(onlineCourse) {
        $(".education-entry:last").append(HTMLonlineClasses);

        var formattedClassSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        var formattedClassTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        var formattedClassDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
        var formattedClassUrl = HTMLonlineURL.replace("%data%", onlineCourse.url);
        var formattedClassInfo = formattedClassSchool + formattedClassTitle + formattedClassDates + formattedClassUrl;

        $(".education-entry:last").append(formattedClassInfo);
    });
};

education.display();


var projects = {
    "projects": [{
        "title": "First Web Page",
        "dates": "Aug 2016",
        "description": "creating my first web page after learning HTML and CSS",
        "images": ["images/portfolio.png", "images/portfolio2.png"]
    }]
};

projects.display = function() {
    projects.projects.forEach(function(project) {

        $('#projects').append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.title);
        var formattedProjectDates = HTMLprojectDates.replace('%data%', project.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace('%data%', project.description);
        var formattedProjectInfo = formattedProjectTitle + formattedProjectDates + formattedProjectDescription;
        $('.project-entry:last').append(formattedProjectInfo);

        //if(projects.project[i].image.length > 0)
        //for ( var i = 0; i < projects.project[i].image.length; i++ )
        project.images.forEach(function(img) {
            var formattedProjectImage = HTMLprojectImage.replace('%data%', img);
            $('.project-entry:last').append(formattedProjectImage);
        });
    });
};
projects.display();


// $('#main').append(internationalizeButton);

/* function inName (name) {
  name= name.trim ().split ('');
  console.log('name');
  name[1]=name[1].toUpperCase();
  name[0]=name[0].slice(0, 1).toUpperCase()+ name[0].slice[1].toLowerCase();
  return name[0] + ' ' + name[1];
}  */

$('#mapDiv').append(googleMap);
