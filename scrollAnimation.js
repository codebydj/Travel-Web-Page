// Select all sections
var sections = document.querySelectorAll(".section");

// Function to check if a section is in view
function isSectionInView(sec) {
  let top = window.scrollY;
  let offset = sec.offsetTop - 400; // Adjust the offset as needed
  let height = sec.offsetHeight;
  return top >= offset && top < offset + height;
}

// Function to handle scroll event
function handleScroll() {
  sections.forEach((sec) => {
    if (isSectionInView(sec)) {
      sec.classList.add("showAnimate");
    } else {
      sec.classList.remove("showAnimate");
    }
  });
}

// Attach scroll event listener
window.addEventListener("scroll", handleScroll);

// Initially call handleScroll to check sections on page load
handleScroll();
