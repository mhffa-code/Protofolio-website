// add and remove active class when click
let lis = Array.from(document.querySelectorAll(".links li"));

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
// header responsive 
if (window.innerWidth < 992) {
    document.querySelector(".contact > a").innerHTML = "Download CV";
}
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

setTimeout(() => {
    document.querySelector("header .container > a").style.top = "0";
}, 1000);

}
// scroll event
window.onscroll = function ()  {
    // my skills var
    let skillsIcons = document.querySelectorAll(".skills .icon");
    let skillsSection = document.querySelector(".skills");

    if (this.scrollY >= skillsSection.offsetTop - 200) {

        skillsIcons.forEach((icon) => {
            icon.style.top = "0";
        });
           
    }
    else {

        skillsIcons.forEach((icon) => {
            icon.style.top = "-450px";
        });

    }
        // about var
        let About = document.querySelector(".about");
        let advantagesparaghraf = document.querySelector(".about .my-advantages p");
        let advantagesHeading = document.querySelector(".about .my-advantages h3");
        let advantagesLink = document.querySelector(".about .my-advantages a");

        let detailsSpans = document.querySelectorAll(".about .my-details .details .mini span");
        //  info var
        let temp;
        if (window.innerWidth < 991) {
            temp = 300;
        }else {
            temp = 200;
        }

        if (this.scrollY >= About.offsetTop - temp) {
            advantagesHeading.style.right = "0";
            advantagesparaghraf.style.left = "0";
            advantagesLink.style.right = "0";
            
            detailsSpans.forEach((span) => {
                let target = span.dataset.num;
                setInterval(() => {
                    if (span.textContent == span.dataset.num) {
                        return false;
                    }
                    span.textContent++;
                }, 2000 / target);
            });
         
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

let letter1 = "create your website with the strongest designs that are in line with your business to become stronger in your career, as the website makes it easier for you to reach your customers and makes you distinguished in your career";
let letter2 = "be the first to appear in the searsh result, as this makes it easier for customers to reach your site";
let letter3 = "create your blog linked to your content,it is considered one of the most important tools for content creators";

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

});

// zoom 
let zoomIcons = document.querySelectorAll(".zoom");
let imgs = document.querySelectorAll(".overley img");

zoomIcons.forEach((icon) => {
    icon.addEventListener("click", (e) => {
        document.querySelector(".overley").style.display = "flex";
        let currentEle = e.currentTarget.parentElement.parentElement.parentElement.firstElementChild.firstElementChild;
        imgs.forEach((img) => {
            if (currentEle.src == img.src) {
                img.classList.add("active");
                setTimeout(() => {
                    img.style.right = "0";
                }, 200);
            }
        });
    });
});

document.addEventListener("click", (e) => {
    if (e.target == document.querySelector(".overley")) {
        document.querySelector(".overley").style.display = "none";
        document.querySelector("img.active").style.right = "-900px";
        document.querySelector("img.active").classList.remove("active");
    }
});
// end gallery Section

// canvas
const chart = document.querySelector("canvas").getContext("2d");
    
Chart.defaults.font.size = 11;

new Chart(chart, {
    type: "bar",
    data: {
        labels:[
            "Microsoft Office",
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
                data: [80, 60, 55, 65, 75, 90, 60],
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

document.addEventListener("contextmenu", function (e){
    e.preventDefault();
    alert("Sorry, right click is disabled to prevent leakage of 			confidential functions");
});

