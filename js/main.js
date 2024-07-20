document.querySelector("#Ghana").addEventListener("click", vacaGhana);
document.querySelector("#Japan").addEventListener("click", vacaJapan);
document.querySelector("#Netherlands").addEventListener("click", vacaNetherlands);
document.querySelector("#Switzerland").addEventListener("click", vacaSwitzerland);
document.querySelector("#Tuvalu").addEventListener("click", vacaTuvalu);

function vacaGhana() {
    document.querySelector("body").style.background = "url('img/Ghana.png') center / cover";
    alert ("Ghana, Africa")
}

function vacaJapan() {
    document.querySelector("body").style.background
= "url('img/japan.png') center / cover"
alert ("Honshū, Japan")
}

function vacaNetherlands() {
    document.querySelector("body").style.background = "url('img/Netherlands.png') center / cover"
    alert ("Noordoostpolder, Netherlands")
}

function vacaSwitzerland() {
    document.querySelector("body").style.background = "url('img/Zermatt-Switzerland.png') center / cover"
    alert ("Zermatt, Switzerland")
}

function vacaTuvalu() {
    document.querySelector("body").style.background = "url('img/Tuvalu.png') center / cover"
    alert ("Funafuti, Tuvalu")
}
