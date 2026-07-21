function voirPlusUNIKIN() {
  let details = document.getElementById("detailsUNIKIN");

  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}

function voirPlusUPN() {
  let details = document.getElementById("detailsUPN");

  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
function voirPlusUPC() {
  let details = document.getElementById("detailsUPC");

  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
function voirPlusUCC() {
  let details = document.getElementById("detailsUCC");

  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
function voirPlusISTA() {
  let details = document.getElementById("detailsISTA");

  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
function voirPlusISIPA() {
  let details = document.getElementById("detailsISIPA");

  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
function voirPlusULK() {
  let details = document.getElementById("detailsULK");

  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
function voirPlusHEC() {
  let details = document.getElementById("detailsHEC");

  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
function voirPlusISAU() {
  let details = document.getElementById("detailsISAU");

  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
function voirPlusUTBC() {
  let details = document.getElementById("detailsUTBC");

  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
function voirPlusLeadership() {
  let details = document.getElementById("detailsLeadership");

  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
function voirPlusURKIM() {
  let details = document.getElementById("detailsURKIM");

  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
function voirPlusABA() {
  let details = document.getElementById("detailsABA");

  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
function voirPlusUSK() {
  let details = document.getElementById("detailsUSK");

  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
function voirPlusISTM() {
  let details = document.getElementById("detailsISTM");

  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
function rechercherUniversite() {
  let recherche = document.getElementById("recherche").value.toLowerCase();
  let cartes = document.querySelectorAll(".carte");

  cartes.forEach(function(carte) {
    let texte = carte.innerText.toLowerCase();

    if (texte.includes(recherche)) {
      carte.style.display = "block";
    } else {
      carte.style.display = "none";
    }
  });
}
let bouton = document.getElementById("haut");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    bouton.style.display = "block";
  } else {
    bouton.style.display = "none";
  }
};
window.onload = function () {
  document.querySelectorAll('.galerie a').forEach(function(lien) {
    lien.removeAttribute('target');
  });
}; 