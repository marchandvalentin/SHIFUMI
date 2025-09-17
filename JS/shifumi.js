//Selection des bouttons
let pierreBtn = document.getElementById("Pierre");
let feuilleBtn = document.getElementById("Feuille");
let ciseauxBtn = document.getElementById("Ciseaux");

//btn reset
let resetBtn = document.getElementById("reset");

//resultat
let outcome = document.getElementById("outcome");

//choix affiché du player et du pc
let choix_ordi = document.getElementById("choix_ordi");
let choix_user = document.getElementById("choix_user");

//score du matchup
let user_score = document.getElementById("user_score");
let ordi_score = document.getElementById("ordi_score");

//valeur du joueur(son choix)
val_joueur = 0;

//score du joueur et de l'ordi
score_ordi = 0;
score_user = 0;




//ajout listeners aux bouttons 
pierreBtn.addEventListener("click", ()=>{ 

    val_joueur = 1;
    val_ordi = compChoice();
    updateOutcome(val_joueur, val_ordi);

    switch(val_ordi) {
        case 1:
            outcome.textContent = "Egalité";
            break;
        case 2:
            outcome.textContent = "Perdu";
            score_ordi += 1;
            break;
        case 3:
            outcome.textContent = "Gagné";
            score_user += 1;
            break;
    }

    user_score.textContent = score_user;
    ordi_score.textContent = score_ordi;
});

feuilleBtn.addEventListener("click", ()=>{ 
    val_joueur = 2;
    val_ordi = compChoice();
    updateOutcome(val_joueur, val_ordi);

    switch(val_ordi) {
        case 1:
            outcome.textContent = "Gagné";
            score_user += 1;
            break;
        case 2:
             outcome.textContent = "Egalité";
            break;
        case 3:
            outcome.textContent = "Perdu";
            score_ordi += 1;
            break;
    }

    user_score.textContent = score_user;
    ordi_score.textContent = score_ordi;
});

ciseauxBtn.addEventListener("click", ()=>{ 
    val_joueur = 3;
    val_ordi = compChoice();
    updateOutcome(val_joueur, val_ordi);

    switch(val_ordi) {
        case 1:
            outcome.textContent = "Perdu";
            score_ordi += 1;
            break;
        case 2:
            outcome.textContent = "Gagné";
            score_user += 1;
            break;
        case 3:
            outcome.textContent = "Egalité";
            break;
    }

    user_score.textContent = score_user;
    ordi_score.textContent = score_ordi;
}); 

//reset la page
resetBtn.addEventListener("click", ()=>{
    window.location.reload();
});

//choix aleatoire de l'ordi entre 1 et 3
function compChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

//retransforme le score en string
function updateOutcome(userResult, compResult ) {
    switch(userResult) {
        case 1:
            choix_user.textContent = "Pierre";
            break;  
        case 2:
            choix_user.textContent = "Feuille";
            break;
        case 3:
            choix_user.textContent = "Ciseaux";
            break;
    }

    switch(compResult) {
        case 1:
            choix_ordi.textContent = "Pierre"; 
            break;
        case 2:
            choix_ordi.textContent = "Feuille"; 
            break; 
        case 3:
            choix_ordi.textContent = "Ciseaux"; 
            break; 
    }
}