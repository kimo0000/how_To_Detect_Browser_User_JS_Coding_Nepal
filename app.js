let browserAgent = navigator.userAgent;
// console.log(browserAgent.slice(-15));
// console.log(browserAgent.slice(-15).includes("Firefox"));

let browser;

if (browserAgent.slice(-15).includes("Safari")) {
  browser = "Chrome";
} else if (browserAgent.slice(-15).includes("OPR")) {
  browser = "OPR";
} else if (browserAgent.slice(-15).includes("Firefox")) {
  browser = "Firefox";
} else if (browserAgent.slice(-15).includes("Edg")) {
  browser = "Edg";
} else {
  alert("Another Browser!");
}

let logo = document.querySelector(`.logo .${browser}`);
// console.log(logo);
logo.style.opacity = 1;
