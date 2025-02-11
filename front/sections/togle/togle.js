const menuToggle = document.querySelector(".container");

const sidebar = document.querySelector(".sidebar");
const childElements = document.querySelectorAll(".child");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  childElements.forEach((child) => {
    child.style.backgroundColor = "black";
  });
  // Si la sidebar est active, on change la couleur du toggle
  if (sidebar.classList.contains("active")) {
    childElements.forEach((child) => {
      child.style.backgroundColor = "white";
    });
    // Si la sidebar est active, on rotate et transtlate l'enfant 1 de 45deg et l'enfant 3 de -45deg
    // il doit revenir a sa position initiale quand on clique sur le toggle
    childElements[0].style.transform = "translateY(10px) rotate(45deg)";
    childElements[2].style.transform = "translateY(10px) rotate(-45deg)";
    childElements[1].style.opacity = "0";
  } else {
    childElements[0].style.transform = "translateY(0px) rotate(0deg)";
    childElements[2].style.transform = "translateY(0px) rotate(0deg)";
    childElements[1].style.opacity = "1";
  }
});

// gerer le bouton login
const loginButton = document.querySelector(".login");
loginButton.addEventListener("click", () => {
  // Rediriger vers la page de login
  window.location.href = "auth.html";
});

