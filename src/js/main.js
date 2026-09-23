const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("small");
    } else {
        navbar.classList.remove("small");
    }

    let currentSection = "home";


sections.forEach(function (section) {

    const sectionTop =
        section.offsetTop -
        navbar.offsetHeight -
        10;


    if (window.scrollY >= sectionTop) {
        currentSection = section.id;
    }

});


if (
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 2
) {
    currentSection = sections[sections.length - 1].id;
}


    navLinks.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});

const skillsTrack =
    document.querySelector(".skills-track");

const skillCards =
    document.querySelectorAll(".skills-track .card");

let skillIndex = 0;


function moveSkills() {

    const visibleCards =
        window.innerWidth <= 768 ? 1 : 3;


    skillIndex++;


    if (
        skillIndex >
        skillCards.length - visibleCards
    ) {
        skillIndex = 0;
    }


    const cardWidth =
        skillCards[0].offsetWidth + 25;


    skillsTrack.style.transform =
        "translateX(-" +
        (skillIndex * cardWidth) +
        "px)";
}


setInterval(moveSkills, 1700);

const projectsTrack =
    document.querySelector(".projects-track");

const projectSlides =
    document.querySelectorAll(".project-slide");

const nextButton =
    document.querySelector(".projects-carousel .next");

const previousButton =
    document.querySelector(".projects-carousel .previous");

let projectIndex = 0;


function showProject(index) {

    if (index >= projectSlides.length) {
        projectIndex = 0;
    }

    else if (index < 0) {
        projectIndex = projectSlides.length - 1;
    }

    else {
        projectIndex = index;
    }


    projectsTrack.style.transform =
        "translateX(-" +
        (projectIndex * 100) +
        "%)";
}

nextButton.addEventListener(
    "click",
    function () {

        showProject(projectIndex + 1);

    }
);

previousButton.addEventListener(
    "click",
    function () {

        showProject(projectIndex - 1);

    }
);

setInterval(
    function () {

        showProject(projectIndex + 1);

    },
    1900
);

const modal =
    document.getElementById("modal");

const closeButton =
    document.querySelector(".modal-close");

const detailButtons =
    document.querySelectorAll(
        ".learn-more"
    );


const projectTitles = [
    "EyeVoice",
    "iMouse",
    "CARAVANZ"
];


const projectDescriptions = [

    "AI-powered accessibility application combining OCR, summarization, speech-to-text and text-to-speech.",

    "Hands-free computer control using eye-gaze tracking and facial landmarks with OpenCV and Dlib.",

    "Personalized travel planner using a Random Forest model and an AWS Lex conversational interface."

];


detailButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const index =
                    Number(
                        button.getAttribute(
                            "data-project"
                        )
                    );


                document.getElementById(
                    "modal-title"
                ).textContent =
                    projectTitles[index];


                document.getElementById(
                    "modal-description"
                ).textContent =
                    projectDescriptions[index];


                modal.classList.add("show");

            }
        );

    }
);


closeButton.addEventListener(
    "click",
    function () {

        modal.classList.remove("show");

    }
);


modal.addEventListener(
    "click",
    function (event) {

        if (event.target === modal) {

            modal.classList.remove(
                "show"
            );

        }

    }
);
