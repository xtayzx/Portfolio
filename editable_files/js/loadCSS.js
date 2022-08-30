// import styles from "js/about.css";
// import styles from "js/home.css";
// import styles from "js/projects.css";
// import styles from "js/single-project.css";

// $('head').append('<link rel="stylesheet" type="text/css" href="../css/home.css">');

//code taken from https://stackoverflow.com/questions/574944/how-to-load-up-css-files-using-javascript

// var cssId = 'myCss'; // you could encode the css path itself to generate id..
if (document.getElementById('home')) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.id = 'home';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/home.css';
    link.media = 'all';
    head.appendChild(link);
} else if (document.getElementById('projects')) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.id = 'projects';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/projects.css';
    link.media = 'all';
    head.appendChild(link);
} else if (document.getElementById('about')) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.id = 'projects';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/about.css';
    link.media = 'all';
    head.appendChild(link);
} else if (document.getElementsByClassName('single-project')) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.id = 'projects';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/single-project.css';
    link.media = 'all';
    head.appendChild(link);
}