// "Go up" pogas funkcija

    window.onscroll = function() {scroll()};

    function scroll() {
        if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
            document.getElementById("go_up").style.display = "block";
        } else {
            document.getElementById("go_up").style.display = "none";
        }
    }             

    // body - Safari
    // document.Element - Chrome, Firefox, IE and Opera

    function scroll_up() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    }


// attaisīt navigāciju
    function open_nav() {
        document.getElementById("overlay_navigation").style.height = "100%";
        document.getElementById("go_up").style.zIndex = "-1";
        document.getElementById("close_nav").style.display = "block";

    }

    function close_nav() {
        document.getElementById("overlay_navigation").style.height = "0%";
        document.getElementById("go_up").style.zIndex = "2";
        document.getElementById("close_nav").style.display = "none";

    }