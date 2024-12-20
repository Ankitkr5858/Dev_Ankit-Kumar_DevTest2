document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.info-button');
  
    buttons.forEach(button => {
      const tooltip = button.parentElement.querySelector('.tooltip');
  
      button.addEventListener('mouseover', () => {
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
      });
  
      button.addEventListener('mouseout', () => {
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
      });
    });
  });
  



document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.getElementById("hamburgerIcon");
    const crossIcon = document.getElementById("crossIcon");
    const dropdownMenu = document.getElementById("dropdownMenu");

    // Toggle Menu Function
    function toggleMenu() {
        // Check if dropdown menu is visible
        const isOpen = dropdownMenu.style.display === "block";

        if (isOpen) {
            // Close the dropdown and reset icons
            dropdownMenu.style.display = "none";
            crossIcon.style.display = "none";
            hamburgerIcon.style.display = "block";
        } else {
            // Open the dropdown and switch icons
            dropdownMenu.style.display = "block";
            crossIcon.style.display = "block";
            hamburgerIcon.style.display = "none";
        }
    }

    // Event listeners for both icons
    hamburgerIcon.addEventListener("click", toggleMenu);
    crossIcon.addEventListener("click", toggleMenu);
});


document.addEventListener("DOMContentLoaded", function () {
    // Select all navigation links
    const navLinks = document.querySelectorAll(".nav_links a");

    // Set "Home" as default active
    navLinks[0].classList.add("active");

    // Function to handle click and update active class
    function setActiveLink(event) {
        event.preventDefault(); // Prevent default link behavior

        // Remove 'active' class from all links
        navLinks.forEach(link => link.classList.remove("active"));

        // Add 'active' class to the clicked link
        this.classList.add("active");
    }

    // Add click event listeners to all nav links
    navLinks.forEach(link => {
        link.addEventListener("click", setActiveLink);
    });
});


    document.addEventListener('DOMContentLoaded', function () {
        const buttonNav = document.querySelector('.buttonnav');
        const dropdownMenu = document.querySelector('.dropdown_menu');

        buttonNav.addEventListener('click', function () {
            if (dropdownMenu.classList.contains('active')) {
                // Hide dropdown
                dropdownMenu.classList.remove('active');
            } else {
                // Show dropdown
                dropdownMenu.classList.add('active');
            }
        });
    });


    
    document.addEventListener("DOMContentLoaded", function () {
        const contactForm = document.getElementById("contactForm");
    
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent default form submission
    
            // Define form fields
            const formFields = [
                { field: document.getElementById("first-name"), error: "First Name is required." },
                { field: document.getElementById("last-name"), error: "Last Name is required." },
                { field: document.getElementById("email"), error: "Email is required." },
                { field: document.getElementById("company"), error: "Company is required." },
                { field: document.getElementById("country"), error: "Country is required." }
            ];
    
            let isValid = true;
    
            // Iterate and validate fields
            formFields.forEach(({ field }) => {
                const errorMsg = field.parentElement.querySelector(".error-msg");
                const label = field.parentElement.querySelector("label");
    
                // Check if the input is empty
                if (!field.value.trim()) {
                    field.classList.add("input-error"); // Add red border
                    if (label) label.style.color = "rgba(255, 119, 119, 1)"; // Change label color
                    errorMsg.style.display = "block"; // Show error message
                    isValid = false;
                } else {
                    field.classList.remove("input-error"); // Remove red border
                    if (label) label.style.color = ""; // Revert label color
                    errorMsg.style.display = "none"; // Hide error message
                }
    
                // Add input event listener to remove error dynamically
                field.addEventListener("input", function () {
                    if (field.value.trim()) {
                        field.classList.remove("input-error");
                        if (label) label.style.color = ""; // Revert label color
                        errorMsg.style.display = "none";
                    }
                });
            });
    
            // Redirect if all fields are valid
            if (isValid) {
                window.location.href = "thankyou.html";
            }
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
        const buttonNav = document.querySelector('.buttonnav');
    
        // Function to toggle visibility based on screen width
        function toggleButtonNav() {
            if (window.innerWidth > 560) {
                buttonNav.style.display = "none"; // Hide if screen width > 560px
            } else {
                buttonNav.style.display = "block"; // Show if screen width <= 560px
            }
        }
    
        // Run on page load
        toggleButtonNav();
    
        // Listen for window resize events
        window.addEventListener("resize", toggleButtonNav);
    });
        
    