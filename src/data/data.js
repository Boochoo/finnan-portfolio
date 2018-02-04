const portofolioDetails = [
  {
    id: 1,
    title: "home",
    description: [
      {
        greeting: "Hi there!",
        greeter: "Ermi here",
        occupation: "Frontend developer",
        main_profession: "JavaScript Enthusiast",
        origin: "Ethiopia",
        resides_in: "Helsinki, Finland"
      }
    ],
    classNames: "header_clickable icon__home fa fa-home",
    imgPath: "./../assets/ermiCV.png",
    pathname: "home"
  },
  {
    id: 2,
    title: "education",
    description: [
      {
        diploma: "bachelor degree",
        field_of_study: "Media engineering",
        academy: "Metropolia University of applied sciences"
      },
      {
        diploma: "bachelor degree of art",
        field_of_study: "Music composition and performance.",
        academy: "Yared School of Music, AAU."
      }
    ],
    classNames: "header_clickable icon__education fa fa-graduation-cap",
    imgPath: "./../assets/workplace.jpg",
    pathname: "education"
  },
  {
    id: 3,
    title: "experience",
    description: [
      {
        status: "currently working",
        where: "Apprix Oy",
        what: "Frontend Developer",
        year: "Dec 2016 - present"
      },
      {
        status: "thesis project",
        where: "Game Refinery",
        what: "data visualisation based project with AngularJS",
        year: "Aug 2016 - Dec 2016"
      },
      {
        status: "Internship",
        where: "Metropolia UAS",
        what: "Finnish floorball Association cross platform mobile app",
        year: "Aug 2015 - Jan 2016"
      }
    ],
    classNames: "header_clickable icon__experience fa fa-briefcase",
    imgPath: "./../assets/coffee.jpg",
    pathname: "experience"
  },
  {
    id: 4,
    title: "skills",
    description: [
      {
        set_of_skills: "JavaScript, CSS/SASS, HTML, jQuery",
        "libs & frameworks": "ReactJS,Angular/AngulaJS, SailsJS, Cordova",
        "Build tools": "Browserify, Gulp, Webpack",
        additional: "Music Composition and arrangements",
        projects: {
          thesis_project: "Säbämestari mobile app",
          school_project: "ShutApp, a chat app made with sailJS"
        },
        currently_learning: "Functional programming",
        links: {
          github: "https://github.com/boochoo",
          linkedin: "https://www.linkedin.com/in/ermias-asmelash-54b640aa/"
        }
      }
    ],
    classNames: "header_clickable icon__skills fa fa-laptop",
    imgPath: "./../assets/piano.jpg",
    pathname: "skills"
  }
];

export default portofolioDetails;
