const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

// Add click event to toggle 'active' class on nav list
menuToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
});
