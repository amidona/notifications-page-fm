const markRead = document.querySelector("h2 > a");
const names = document.querySelectorAll(".name");
const postText = document.querySelectorAll(".post-text");
const groups = document.querySelectorAll(".group");
const pm = document.querySelectorAll(".pm");

const notification = document.querySelectorAll(".notification");
const redDot = document.querySelectorAll("i");

// Link mouseover events
markRead.onmouseover = () => markRead.style.color = "hsl(219, 85%, 26%)";
markRead.onmouseout = () => markRead.style.color = "hsl(219, 12%, 42%)";

names.forEach(names => names.onmouseover = () => names.style.color = "hsl(219, 85%, 26%)");
names.forEach(names => names.onmouseout = () => names.style.color = "hsl(224, 21%, 14%)");

postText.forEach(postText => postText.onmouseover = () => postText.style.color = "hsl(219, 85%, 26%)");
postText.forEach(postText => postText.onmouseout = () => postText.style.color = "hsl(219, 12%, 42%)");

groups.forEach(groups => groups.onmouseover = () => groups.style.color = "hsl(219, 85%, 26%)");
groups.forEach(groups => groups.onmouseout = () => groups.style.color = "hsl(219, 12%, 42%)");

pm.forEach(pm => pm.onmouseover = () => pm.style.background = "hsl(211, 68%, 94%)");
pm.forEach(pm => pm.addEventListener("mouseout", function () {
    let pmlink = pm.parentElement;
    let pmNotifText = pmlink.parentElement;
    let pmNotif = pmNotifText.parentElement;
    pm.style.background = pmNotif.style.background
}))

// Read notifications



