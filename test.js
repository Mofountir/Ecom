// switch entre connection et inscription
const sign_in_btn = document.querySelector("#btnConnexion");
const sign_up_btn = document.querySelector("#btnInscription");

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



// Inscription
//recuperer les valeurs des champs
const nom = document.querySelector("#nom").value;
const email = document.querySelector("#email_ins").value;
const password = document.querySelector("#password_ins").value;

//recuperer les messages d'erreur
const nomMessage = document.querySelector("#nom_message");
const emailMessage = document.querySelector("#email_ins_message");
const passwordMessage = document.querySelector("#password_ins_message");

// verifier si les champs sont remplis
if (!nom) {
    nomMessage.textContent = "Veuillez remplir tous les champs";
    nomMessage.style.color = "red";
    nomMessage.style.fontSize = "12px";
}
if (!email) {
    emailMessage.textContent = "Veuillez remplir tous les champs";
    emailMessage.style.color = "red";
    emailMessage.style.fontSize = "12px";
}






