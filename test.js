// switch entre connection et inscription
const sign_in_btn = document.querySelector("#btnConnexion");
const sign_up_btn = document.querySelector("#btnInscription");
console.log(sign_in_btn);
console.log(sign_up_btn);

// quand je suis sur la page de connexion et que je clique sur inscription, je suis redirigé vers la page d'inscription
sign_up_btn.addEventListener("click", () => {
  sign_in_btn.classList.remove(".active-tab");
  sign_up_btn.classList.add(".active-tab");

  // changer le form
  const sign_in_form = document.querySelector("#sign-in-form");
  const sign_up_form = document.querySelector("#sign-up-form");
  sign_in_form.classList.add("hidden");
  sign_up_form.classList.remove("hidden");
  sign_in_form.classList.remove("active-form");
  sign_up_form.classList.add("active-form");

  // changer le style du border-bottom du bouton connexion et du font color
  sign_in_btn.style.borderBottom = "none";
  sign_up_btn.style.borderBottom = "2px solid var(--violet)";
  sign_in_btn.style.color = "#fff";
  sign_up_btn.style.color = "var(--violet)";
});
sign_in_btn.addEventListener("click", () => {
  sign_in_btn.classList.add(".active-tab");
  sign_up_btn.classList.remove(".active-tab");
  
  // changer le form    
  const sign_in_form = document.querySelector("#sign-in-form");
  const sign_up_form = document.querySelector("#sign-up-form");
  sign_in_form.classList.remove("hidden");
  sign_up_form.classList.add("hidden");
  sign_in_form.classList.add("active-form");
  sign_up_form.classList.remove("active-form");

  // changer le style du border-bottom du bouton inscription
  sign_in_btn.style.borderBottom = "2px solid var(--violet)";
  sign_up_btn.style.borderBottom = "none";
  sign_in_btn.style.color = "var(--violet)";
  sign_up_btn.style.color = "#fff";
});


