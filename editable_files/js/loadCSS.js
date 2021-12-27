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

// var head2 = document.getElementsByTagName('head')[0];
// var link2 = document.createElement('link');
// link2.id = cssId;
// link2.rel = 'stylesheet';
// link2.type = 'text/css';
// link2.href = 'css/about.css';
// link2.media = 'all';
// head2.appendChild(link2);

// var head3 = document.getElementsByTagName('head')[0];
// var link3 = document.createElement('link');
// link3.id = cssId;
// link3.rel = 'stylesheet';
// link3.type = 'text/css';
// link3.href = 'css/projects.css';
// link3.media = 'all';
// head3.appendChild(link3);

// var head4 = document.getElementsByTagName('head')[0];
// var link4 = document.createElement('link');
// link4.id = cssId;
// link4.rel = 'stylesheet';
// link4.type = 'text/css';
// link4.href = 'css/single-project.css';
// link4.media = 'all';
// head4.appendChild(link4);
// }