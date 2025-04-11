// humberger start
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    document.querySelector('.menu-icon').classList.toggle('active');

    // Hide the menu when a nav link is clicked
    navLinks.addEventListener('click', () => {
        navLinks.classList.remove('active');
        document.querySelector('.menu-icon').classList.remove('active');
    });
}
// humberger end

// Nice Select
$(document).ready(function() {
    $('#myselect, #myselect2, #myselect3').niceSelect();
});

// accordion start
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const icon = button.querySelector('.toggle-icon');
        const isOpen = !button.classList.contains('collapsed');
        
        document.querySelectorAll('.toggle-icon').forEach(icon => icon.textContent = '+');
        if (isOpen) {
            icon.textContent = '-';
        }
    });
});
// accordion end

// tabs start
function openCity(evt, cityName) {
    // Hide all tab content sections
    document.querySelectorAll(".tabcontent").forEach(tab => {
        tab.style.display = "none";
    });

    // Remove 'active' class from all tab buttons
    document.querySelectorAll(".tablinks").forEach(btn => {
        btn.classList.remove("active");
    });

    // Show the selected tab content
    document.getElementById(cityName).style.display = "block";

    // Add 'active' class to the clicked button
    evt.currentTarget.classList.add("active");
}


// tabs end

// testimonial start
  $('#testimonial_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    dots:false,
    items:1,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
    
})
// testimonial end


// top button start
window.onscroll = function () {
    let button = document.getElementById("topButton");
    let progressText = document.getElementById("progressText");
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollPercent = Math.round((scrollTop / scrollHeight) * 100);

    // Show button when scrolled 100px
    if (scrollTop > 100) {
        button.style.display = "flex"; // Use flex to center content
    } else {
        button.style.display = "none";
    }

    // Update button background with conic gradient fill
    button.style.background = `conic-gradient(#00BF6F ${scrollPercent}%, #ddd ${scrollPercent}%)`;

    // Update percentage text (Ensuring it's well formatted)
    progressText.innerHTML = `
        <i class="fa-solid fa-angle-up"></i>
        <span>${scrollPercent}%</span>
    `;
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
// top button end

// home slider

$(document).ready(function(){
    $("#home_slider").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        dots:false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});

/*   Active Menu */
document.addEventListener("DOMContentLoaded", function () {
    var sections = document.querySelectorAll("section");
    var navLinks = document.querySelectorAll(".nav_active");

    function changeActiveLink() {
        let scrollPosition = window.scrollY + 150; // Adjust for navbar height

        sections.forEach((section) => {
            if (
                scrollPosition >= section.offsetTop &&
                scrollPosition < section.offsetTop + section.offsetHeight
            ) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === "#" + section.id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", changeActiveLink);
});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("searchForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent page reload

            // Get selected values
            const location = document.getElementById("locationSelect").value;
            const propertyType = document.getElementById("propertyTypeSelect").value;
            const priceRange = document.getElementById("priceRangeSelect").value;

            // Perform an action with the selected values (log or send to server)
            console.log("Location:", location);
            console.log("Property Type:", propertyType);
            console.log("Price Range:", priceRange);

            // Redirect to search results page (if needed)
            // window.location.href = `search-results.html?location=${encodeURIComponent(location)}&propertyType=${encodeURIComponent(propertyType)}&price=${encodeURIComponent(priceRange)}`;
        });
    } 
});
