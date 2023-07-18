// add and remove active class when click
let lis = document.querySelectorAll(".links li");

lis.forEach((ele) => {
  ele.addEventListener("click", (e) => {
        lis.forEach(element => {
            element.classList.remove("active");
            if (e.currentTarget) {
                 e.currentTarget.classList.add("active");
            }
        });
    });
});
// load event
window.onload = function () {

document.querySelector(".logo").style.opacity = "1";

setTimeout(() => {
    lis.forEach((li) => {
        li.style.bottom = "0";
    });
}, 0);

setTimeout(() => {
    document.querySelector(".links li:first-child").classList.add("active");
}, 2000);

}
// scroll event
window.onscroll = function ()  {
    // my skills var
    let skillSpans = document.querySelectorAll(".my-skills span");

    if (this.scrollY >= 550) {

        skillSpans.forEach( (span) => {
            span.style.width = span.dataset.custom;
        });
           
    }
    else {

        skillSpans.forEach( (span) => {
            span.style.width = "0";
        });

    }
        // about var
        let About = document.querySelector(".about");
        let advantagesparaghraf = document.querySelector(".about .my-advantages p");
        let advantagesHeading = document.querySelector(".about .my-advantages h3");
        let advantagesLink = document.querySelector(".about .my-advantages a");
        //  info var
        if (this.scrollY >= About.offsetTop - 120) {
            advantagesHeading.style.right = "0";
            advantagesparaghraf.style.left = "0";
            advantagesLink.style.right = "0";
        }
        else {
            advantagesHeading.style.right = "460px";
            advantagesparaghraf.style.left = "650px";
            advantagesLink.style.right = "220px";
        }

}

// services Section
let servBoxs = document.querySelectorAll(".services .container .service-box");

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("front")) {
        e.target.parentElement.style.transform = "rotatey(-180deg)";
    }else if (e.target.parentElement.classList.contains("front")) {
        e.target.parentElement.parentElement.style.transform = "rotatey(-180deg)";
    }
    else if (!e.target.classList.contains("back") && !e.target.parentElement.classList.contains("back")) {
        servBoxs.forEach((box) => {
            box.style.transform = "rotate(0)";
        });
    }
});

let letter1 = "create your website with the strongest designs that are in line with your business to become stronger in your career,as the website makes it easier for you to reach your customers and makes you distinguished in your career";
let letter2 = "be the first to appear in the searsh result, as this makes it easier for customersto reach your site";
let letter3 = "create your blog linked to your content,it is considered one of the most important tools for content markers";

function typingAnimation(letter, target) {

    let array = [];
    let selector = document.querySelector(target);
    let counter = 0;

    setInterval(() => {
        array.push(letter[counter]);
        counter++;
        selector.textContent = array.join("");
    }, 50);

}

document.querySelectorAll(".service-box").forEach((box) => {

    box.addEventListener("click", (e) => {
        if (e.currentTarget === document.querySelectorAll(".service-box")[0]) {
            if (document.querySelector(".web-Dev").textContent == "") {
                typingAnimation(letter1, ".web-Dev");
            }
        }
        if (e.currentTarget === document.querySelectorAll(".service-box")[1]) {
            if (document.querySelector(".marketting").textContent == "") {
                typingAnimation(letter2, ".marketting");
            }
        }
        if (e.currentTarget === document.querySelectorAll(".service-box")[2]) {
            if (document.querySelector(".e-blogs").textContent == "") {
                typingAnimation(letter3, ".e-blogs");
            }
        }
    });

});
// end services Section

// start gallery Section
let galleryLis = document.querySelectorAll(".gallery ul li");
let galleryBoxes = document.querySelectorAll(".gallery .box");

galleryLis.forEach((li) => {

    li.addEventListener("click", (e) => {
        galleryLis.forEach((btn) => {
            btn.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        galleryBoxes.forEach((box) => {
            box.classList.add("shrink");
        });
        document.querySelectorAll(e.currentTarget.dataset.type).forEach((box) => {
            box.classList.remove("shrink");
        });
        if (e.currentTarget.textContent == "All") {
            galleryBoxes.forEach((box) => {
                box.classList.remove("shrink");
            });
        }
    });

})
// end gallery Section

// effect of about section 
let aboutSpan = document.querySelector(".about .my-advantages h3 span");

let spansContent = [" Designer", " Developer"];

function changeEffect() {

    setTimeout(() => {
        aboutSpan.textContent = spansContent[0];
    }, 3000);

    setTimeout(() => {
        aboutSpan.textContent = spansContent[1];
    }, 6000);

}

// trigger to execute the action
changeEffect();
// then repeating the function
setInterval(changeEffect, 6000);

// canvas
const chart = document.querySelector("canvas").getContext("2d");
    
Chart.defaults.font.size = 11;

new Chart(chart, {
    type: "bar",
    data: {
        labels:[
            "Digital marketting",
            "communication",
            "SEO",
            "English",
            "Social Media mangment",
            "Proplem solving",
            "operating system"
        ],
        datasets: [
            {
                borderColor: [
                    'rgba(255, 99, 132, 0.9)',
                    'rgba(255, 159, 64, 0.9)',
                    'rgba(255, 205, 86, 0.9)',
                    'rgba(75, 192, 192, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(153, 102, 255, 0.9)',
                    'rgba(201, 203, 207, 0.9)',
                    'rgba(201, 203, 207, 0.9)'
                ],
                borderWidth: 1,
                label: "Knowledge Percentage",
                data: [80, 60, 55, 60, 75, 90, 60],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                barPercentage: 0.6
            },
        ]
    },
    options: {
        scales : {
            y : {
                ticks : {
                    color: "white",
                    stepSize: 5,
                    maxTicksLimit: 120
                },
                grid: {
                    color: "rgba(0, 0, 0, 0.719)"
                }
            },
            x : {
                ticks : {
                    color: "white",
                },
                grid: {
                    color: "rgba(0, 0, 0, 0.719)"
                }
            }
        },
        responsive: true
    },
});




