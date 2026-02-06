var icon1= document.getElementById("icon-1")
var icon3 = document.getElementById("icon-4")
var headerImg = document.getElementById("headerImage")
var desc1= document.getElementById("descPart1")
var desc2= document.getElementById("descPart2")
var timelineTitle = document.getElementById("timelineTitle");
var timelineBox = document.querySelectorAll(".timelineBox");
var timelineBoxes = document.querySelectorAll(".timelineBoxes");

if(window.innerWidth>768){
    setInterval(icon1Sleep,1100);
    setInterval(icon4Sleep,1100);
}else{
    setInterval(icon1Sleep2,1100)
    setInterval(icon4Sleep2,1100)
}

setInterval(sleepImage,2200)
setInterval(sleepDesc,3000)

function sleepDesc(){
    desc1.style.color="#fff"
    desc2.style.color="#fff"
}

function icon1Sleep(){
    icon1.style.left="20%"
    icon1.style.color="#fff"
}
function icon4Sleep(){
    icon3.style.right="20%"
    icon3.style.color="#fff"
}
function sleepImage(){
    headerImg.style.opacity="100%"
}
function icon1Sleep2(){
    icon1.style.left="13%"
    icon1.style.color="#fff"
}
function icon4Sleep2(){
    icon3.style.right="13%"
    icon3.style.color="#fff"
}

function revealTitle() {
    const pos = timelineTitle.getBoundingClientRect().top;
    const screenPos = window.innerHeight * 0.75;

    if (pos < screenPos) {
        timelineTitle.classList.add("show");
    }
}

window.addEventListener("scroll", revealTitle);

function revealtimelineBox() {
    timelineBox.forEach(box => {
        const pos = box.getBoundingClientRect().top;
        const screenPos = window.innerHeight * 0.95;

        if (pos < screenPos) {
            box.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealtimelineBox);

var timelineBoxes = document.querySelector(".timelineBoxes");

function revealTimelineBoxes() {
    const pos = timelineBoxes.getBoundingClientRect().top;
    const screenPos = window.innerHeight * 0.90;

    if (pos < screenPos) {
        timelineBoxes.classList.add("show");
    }
}

window.addEventListener("scroll", revealTimelineBoxes);