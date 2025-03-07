/* Home/Back Button Start */

function Refresh() {
    location.reload();
}

function goBackHome() {
    document.getElementById("starting-stuff").style.display = "block";
    document.getElementById("petter-stuff").style.display = "none";
}

function goBackPetterStuff() {
    document.getElementById("petter-stuff").style.display = "block";
    document.getElementById("petekrafter-stuff").style.display = "none";
    document.getElementById("games-stuff").style.display = "none";
}

/* Home/Back Button End */
/* Areas Start */

function showPetterStuff() {
    document.getElementById("starting-stuff").style.display = "none";
    document.getElementById("petter-stuff").style.display = "block";
    document.getElementById("back-button").style.display = "block";
}

function goToPeteKrafter() {
    document.getElementById("petter-stuff").style.display = "none";
    document.getElementById("petekrafter-stuff").style.display = "block";
}

function goToGames() {
    document.getElementById("petter-stuff").style.display = "none";
    document.getElementById("games-stuff").style.display = "block";
}

/* Areas End */
/* Loading Start */

function peteKrafter() {
    var peteKrafterUrl = "https://www.youtube.com/channel/UCqUcNq1DoCftpt_s1gDE4gQ";
    window.open(peteKrafterUrl, "_blank");
}

function TTD() {
    var TTDUrl = "https://www.roblox.com/games/13775256536/CLASSIC-Toilet-Tower-Defense";
    window.open(TTDUrl, "_blank");
}

function roblox() {
    var robloxUrl = "https://www.roblox.com/home";
    window.open(robloxUrl, "_blank");
}

function minecraft() {
    var minecraftUrl = "https://www.minecraft.net/en-us";
    window.open(minecraftUrl, "_blank");
}

/* Loading End */