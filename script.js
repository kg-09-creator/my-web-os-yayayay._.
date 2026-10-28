var biggestIndex = 1
var selectedIcon = undefined 

var welcomeScreen = document.querySelector("#welcome")
var welcomeScreenClose = document.querySelector("#welcomeclose")
var welcomeScreenOpen = document.querySelector("#welcomeopen")

var notesScreen = document.querySelector("#wavenotes")
var notesScreenClose = document.querySelector("#notesclose")

setInterval(function () {
            document.querySelector("#timeElement").innerHTML = new 
            Date().toLocaleString();
            }, 1000);

function dragElement(element) {
    var initialX = 0;
    var initialY = 0;
    var currentX = 0;
    var currentY = 0;

    if(document.getElementById(element.id + "header")) {
        document.getElementById(element.id + "header").onmousedown = startDragging;
    } else {
        element.onmousedown = startDragging;
    }

    function startDragging(e) {
        e = e || window.event;
        e.preventDefault();
        initialX = e.clientX;
        initialY = e.clientY;

        document.onmouseup = stopDragging;
        document.onmousemove = moveElement;
    }

    function moveElement(e) {
        e = e || window.event;
        e.preventDefault();

        currentX = initialX - e.clientX;
        currentY = initialY - e.clientY;
        initialX = e.clientX;
        initialY = e.clientY;

        element.style.top = (element.offsetTop - currentY) + "px";
        element.style.left = (element.offsetLeft - currentX) + "px";
    }

    function stopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}    

function closeWindow(element) {
    element.style.display = "none"
}

function selectIcon(element) {
    element.classList.add("selected");
    selectedIcon = element
}

function deselectIcon(element) {
    element.classList.remove("selected")
    selectedIcon = undefined
}

function handleIconTap (element) {
    if(element.classList.contains("selected")) {
        deselectIcon(element)
        openWindow(window)
    } else {
        selectIcon(element)
    }
}

function openWindow(welcomeScreen) {
    welcomeScreen.style.display = "flex";
    welcomeScreen.style.flexDirection = "column";
    biggestIndex++;
    welcomeScreen.style.zIndex = biggestIndex;
    topBar.style.zIndex = biggestIndex + 1;
}

function addWindowTapHandling(welcomeScreen) {
    element.addEventListener("mousedown", () =>
    handleWindowTap(welcomeScreen))
}

function handleWindowTap(welcomeScreen) {
    biggestIndex++;
    welcomeScreen.style.zIndex = biggestIndex;
    topBar.style.zIndex = biggestIndex + 1;
    deselectIcon(selectedIcon)
}

function openNotesWindow(notesScreen) {
    notesScreen.style.display = "flex";
    biggestIndex++;
    element.style.zIndex = biggestIndex;
    topBar.style.zIndex = biggestIndex + 1;
}

function addWindowTapHandling(notesScreen) {
    element.addEventListener("mousedown", () =>
    handleWindowTap(notesScreen))
}

function handleWindowTap(notesScreen) {
    biggestIndex++;
    notesScreen.style.zIndex = biggestIndex;
    topBar.style.zIndex = biggestIndex + 1;
    deselectIcon(selectedIcon)
}

dragElement(document.getElementById("welcome"));
dragElement(document.querySelector("#wavenotes"))

welcomeScreenClose.addEventListener("click", function() {
    closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function () {
    openWindow(welcomeScreen);
});

notesScreenClose.addEventListener("click", () => closeWindow(notesScreen));

var notesIcon = document.querySelector("#notesIcon");

if(notesIcon) {
    notesIcon.addEventListener("click", function() {
        handleIconTap(notesIcon, notesScreen)
    });
}

var showd = document.querySelector("#showd")
if(showd) {
    showd.addEventListener("click", function(){
        closeWindow(welcomeScreen);
        closeWindow(notesScreen)
    });
}