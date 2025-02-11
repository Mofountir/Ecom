// Sélection des éléments DOM
const signInBtn = document.querySelector("#btnConnexion");
const signUpBtn = document.querySelector("#btnInscription");
const signInForm = document.querySelector("#sign-in-form");
const signUpForm = document.querySelector("#sign-up-form");
const errorMsg = document.querySelector("#error-msg");
const successMsg = document.querySelector("#success-msg");

// Fonction pour basculer entre les formulaires
function toggleForms(showSignIn) {
  const activeForm = showSignIn ? signInForm : signUpForm;
  const inactiveForm = showSignIn ? signUpForm : signInForm;
  const activeBtn = showSignIn ? signInBtn : signUpBtn;
  const inactiveBtn = showSignIn ? signUpBtn : signInBtn;

  activeForm.classList.remove("hidden");
  inactiveForm.classList.add("hidden");
  activeForm.classList.add("active-form");
  inactiveForm.classList.remove("active-form");

  activeBtn.classList.add("active-tab");
  inactiveBtn.classList.remove("active-tab");

  // Réinitialiser les messages et les formulaires
  clearMessages();
  resetForms();
}

// Écouteurs d'événements pour les boutons de basculement
signUpBtn.addEventListener("click", () => toggleForms(false));
signInBtn.addEventListener("click", () => toggleForms(true));

// Validation en temps réel des champs
const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("input", () => validateField(input));
  input.addEventListener("blur", () => validateField(input));
});

// Gestion de l'affichage/masquage du mot de passe
const togglePasswordBtns = document.querySelectorAll(".toggle-password");
togglePasswordBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const input = this.previousElementSibling;
    const type =
      input.getAttribute("type") === "password" ? "text" : "password";
    input.setAttribute("type", type);
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
  });
});

// Fonction de validation des champs
function validateField(input) {
  const inputGroup = input.closest(".input-group");
  const errorText = inputGroup.querySelector(".error-text");
  let isValid = true;
  let errorMessage = "";

  // Réinitialiser les classes
  inputGroup.classList.remove("valid", "error");

  // Validation spécifique selon le type de champ
  switch (input.id) {
    case "nom":
      if (input.value.length < 2) {
        isValid = false;
        errorMessage = "Le nom doit contenir au moins 2 caractères";
      }
      break;

    case "email_cnx":
    case "email_ins":
      if (!validateEmail(input.value)) {
        isValid = false;
        errorMessage = "Veuillez entrer une adresse email valide";
      }
      break;

    case "password_cnx":
    case "password_ins":
      if (!validatePassword(input.value)) {
        isValid = false;
        errorMessage =
          "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre";
      }
      break;
  }

  // Mettre à jour l'affichage
  if (input.value === "") {
    inputGroup.classList.remove("valid", "error");
    errorText.textContent = "";
  } else if (isValid) {
    inputGroup.classList.add("valid");
    inputGroup.classList.remove("error");
    errorText.textContent = "";
  } else {
    inputGroup.classList.add("error");
    inputGroup.classList.remove("valid");
    errorText.textContent = errorMessage;
  }

  return isValid;
}

// Validation de l'email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Validation du mot de passe
function validatePassword(password) {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return re.test(password);
}

// Gestion des messages
function showMessage(type, message) {
  const messageElement = type === "error" ? errorMsg : successMsg;
  messageElement.textContent = message;
  messageElement.classList.remove("hidden");

  // Animation de fade-in
  messageElement.style.opacity = "0";
  messageElement.style.transform = "translateY(-20px)";
  setTimeout(() => {
    messageElement.style.opacity = "1";
    messageElement.style.transform = "translateY(0)";
  }, 10);

  // Auto-hide après 5 secondes
  setTimeout(() => {
    messageElement.classList.add("hidden");
  }, 5000);
}

function clearMessages() {
  errorMsg.classList.add("hidden");
  successMsg.classList.add("hidden");
}

// Réinitialisation des formulaires
function resetForms() {
  signInForm.reset();
  signUpForm.reset();
  document.querySelectorAll(".input-group").forEach((group) => {
    group.classList.remove("valid", "error");
    group.querySelector(".error-text").textContent = "";
  });
}

// Simulation de chargement pour les formulaires
function simulateLoading(form, success = true) {
  const button = form.querySelector(".btn");
  button.classList.add("loading");
  button.disabled = true;

  setTimeout(() => {
    button.classList.remove("loading");
    button.disabled = false;

    if (success) {
      showMessage(
        "success",
        form.id === "sign-in-form"
          ? "Connexion réussie !"
          : "Inscription réussie ! Vous pouvez maintenant vous connecter."
      );

      if (form.id === "sign-up-form") {
        setTimeout(() => toggleForms(true), 2000);
      }
    }
  }, 1500);
}

// Gestion de la soumission des formulaires
signInForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.querySelector("#email_cnx");
  const password = document.querySelector("#password_cnx");

  if (validateField(email) && validateField(password)) {
    simulateLoading(signInForm);
  } else {
    showMessage("error", "Veuillez corriger les erreurs dans le formulaire");
  }
});

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#nom");
  const email = document.querySelector("#email_ins");
  const password = document.querySelector("#password_ins");

  if (validateField(name) && validateField(email) && validateField(password)) {
    simulateLoading(signUpForm);
  } else {
    showMessage("error", "Veuillez corriger les erreurs dans le formulaire");
  }
});
