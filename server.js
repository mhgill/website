var express = require('express');
var path = require('path');
var mail = require('./mail')

var app = express();

app.use(express.static(__dirname + "/public"));

const VIEW = __dirname + '/public/views/'

// Routes

// views
app.get('/introduction', function(req, res) {
  res.sendFile(VIEW + 'introduction.html');
});

app.get('/education', function(req, res) {
  res.sendFile(VIEW + 'education.html');
});

app.get('/experience', function(req, res) {
  res.sendFile(VIEW + 'experience.html');
});

app.get('/contact', function(req, res) {
  res.sendFile(VIEW + 'contact.html');
});

// Listen
const port = process.env.PORT || 8080;
app.listen(port);
console.log('Listening on localhost:'+ port);

/* public static string WEB_COLOR = "w3-blue";
public static string WEB_TEXT_ICONS_COLOR = "w3-text-blue";

// github source pulling 
private static string GITHUB_BASE_URL = "https://raw.githubusercontent.com/mhgill/Resume/master/";
public static string EXPERIENCE_URL = GITHUB_BASE_URL + "experience.txt";
public static string PERSONAL_PICTURE_URL = GITHUB_BASE_URL + "me.png";
public static string INTRODUCTION_URL = GITHUB_BASE_URL + "intro.txt";
public static string RESUME_URL = "https://github.com/mhgill/Resume/blob/master/mgill_resume.pdf"; // since the raw leads to a download... */