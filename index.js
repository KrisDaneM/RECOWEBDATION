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


// FOR SUBMIT FORM
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission behavior

    const form = e.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            document.getElementById('success').style.display = 'block';
            document.getElementById('error').style.display = 'none';
            form.reset(); // Reset form after successful submission
        } else {
            document.getElementById('error').style.display = 'block';
            document.getElementById('success').style.display = 'none';
        }
    }).catch(error => {
        document.getElementById('error').style.display = 'block';
        document.getElementById('success').style.display = 'none';
    });
});
