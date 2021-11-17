// "Go up" pogas funkcija
window.onscroll = function() {scroll()};

function scroll() {
    if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
        document.getElementById("go-up").style.display = "block";
    } else {
        document.getElementById("go-up").style.display = "none";
    }
}             

function scrollUp() {
    document.body.scrollTop = 0;  // body - Safari
    document.documentElement.scrollTop = 0;  // document.Element - Chrome, Firefox, IE and Opera
}

//  navigācijas pogas
function openNav() {
    document.getElementById("overlay-navigation").style.height = "100%";
    document.getElementById("go-up").style.zIndex = "-1";
    document.getElementById("close-nav").style.display = "block";
    document.getElementById("main-logo").style.position = "fixed";
}

function closeNav() {
    document.getElementById("overlay-navigation").style.height = "0%";
    document.getElementById("go-up").style.zIndex = "2";
    document.getElementById("close-nav").style.display = "none";
    document.getElementById("main-logo").style.position = "absolute";
}

//validācija

function validateForm() {
    var bigText;
    var smallerText; 

        //vards, uzvards
        var x2 = document.forms["sazinaForm"]["name"].value;
        if (x2 == "") {
            bigText = "Lūdzu ievadiet savu vārdu!";
            document.getElementById("big-sent").innerHTML = bigText;
            return false;
        }

        //epasts
        var x1=document.forms["sazinaForm"]["email"].value;
        var atpos=x1.indexOf("@");
        var dotpos=x1.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x1.length) {
            bigText ="Nederīgs e-pasts!";
            document.getElementById("big-sent").innerHTML = bigText;
            return false;
        }
       
         //telefons
        var x3 = document.forms["sazinaForm"]["phone"].value;
        if (x3 == "") {
            bigText = "Lūdzu ievadiet tālruņa numuru!";
           document.getElementById("big-sent").innerHTML = bigText;
           return false;
         }

         //teksts
         var x4=document.forms["sazinaForm"]["message"].value;
         if (x4 == "") {
            bigText = "Lūdzu ievadiet tekstu!"; 
             document.getElementById("big-sent").innerHTML = bigText;
             return false;
         }
         
        //ja viss veiksmīgi aizpildīts
         bigText = "Paldies, ka sapņo!"; 
         document.getElementById("big-sent").innerHTML = bigText;
         smallerText = "Ja Tavs sapnis tiks izvēlēts, mēs ar Tevi sazināsimies."; 
         document.getElementById("smaller-sent").innerHTML = smallerText;
         document.getElementById("sending-btn").style.display = "none";
         return false; //lai lapa nepārlādējas
    }
    

// Atvērt video

function openVid() {
    document.getElementById("toggle-vid").style.display = "block";
}

function closeVid() {
    document.getElementById("toggle-vid").style.display = "none";
}

// atbalstītāji

function checkOpt() {
    var s1 = document.getElementById("opt-vieta").value;
    var s2 = document.getElementById("opt-veids").value;
    if (s1 == "riga" && s2 == "edinasana") {
        document.getElementById("sponsors").style.display = "block";
    } else {
        document.getElementById("sponsors").style.display = "none";
    }
}

// Skatīt vairāk

function showRest() {
    document.getElementById("btn-cont").style.display = "none";
    var collapse = document.getElementsByClassName("grid-collapse");
    var i;
    for (i = 0; i < collapse.length; i++) {
        collapse[i].style.display = 'block';
    }
}

//video
function playVideo() {
    document.getElementById("thumbnail").style.display = "none";
    document.getElementById("play").style.display = "none";
    document.getElementById("video-player").style.display = "block";
}
