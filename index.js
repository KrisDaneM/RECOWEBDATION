function hamburger() {
    var menu = document.getElementById("menu-links");
    
    if (menu.style.display === "block") {
        menu.style.transition = "transform 0.3s ease, opacity 0.3s ease";
        menu.style.transform = "translateY(-10px)";
        menu.style.opacity = "0";

        setTimeout(function() {
            menu.style.display = "none";
            menu.style.transform = "translateY(0)";
            menu.style.opacity = "1";
        }, 300);
    } else {
        menu.style.display = "block";
        menu.style.transition = "transform 0.3s ease, opacity 0.3s ease";
        menu.style.transform = "translateY(0)";
        menu.style.opacity = "1";
    }
}


