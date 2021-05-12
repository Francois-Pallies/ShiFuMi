// Rose = 1 / Main = 2 / cetoine = 3

//Déclaration compteurs de score
let victoireJoueur = 0
let victoireOrdi = 0

//Effets produits a l'enfoncement du click (remise a ezéro de la zone de jeu)
$(".drag").on('mousedown', function(){
    $('#timer').removeClass('on')
    $('#choixOrdi p').text('?')
    $('#choixOrdi').removeClass('cetoine rose main')
    $('#choixJoueur').removeClass('cetoine rose main')
    $('#ordiAnimation').removeClass('win eq loose')
    $('#playerAnimation').removeClass('win eq loose')
    $('#ordiAnimation').removeClass('cetoine rose main')
    $('#playerAnimation').removeClass('cetoine rose main')
    $('#gameArena').removeClass(`score`)
})

//Effets produits au relachement du click
$(".drag").on('mouseup', function(){   
    choixJoueur = this.id;
    /* victoireJoueur
    victoireOrdi */
    // Choix Ordinateur
    choixOrdinateur = (Math.floor(Math.random() * 3) + 1)   
    if (choixOrdinateur === 1) {
        choixOrdinateur = 'rose'
    }
    else if (choixOrdinateur === 2) {
        choixOrdinateur = 'main'
    }
    else if (choixOrdinateur === 3) {
        choixOrdinateur = 'cetoine'
    }   
})

//Lancement de la phase de jeu
$(function() {
    $('.drag').draggable({revert: true})
    $('#choixJoueur').droppable({
        drop: function(event, ui){        
            $(this).addClass(`${choixJoueur}`)           
            $('#timer').addClass('on')
            setTimeout(function(){  
                resultat()
                affichageOrdi()
                                    }, 3000)
            console.log(`Ordinateur: ${choixOrdinateur} Joueur ${choixJoueur}`) 
        }
    })
})

//Détermination du vaiqueur
function resultat() {
    if (choixJoueur === 'rose' &&  choixOrdinateur === 'main' ||
            choixJoueur === 'main' &&  choixOrdinateur === 'cetoine' ||
            choixJoueur === 'cetoine' &&  choixOrdinateur === 'rose') {
                victoireJoueur+= 1
                $('#victoireJoueur').text(`${victoireJoueur}`)
                if (victoireJoueur === 3) {           
                    console.log(`Joueur Gagne`)
                } 
                else {
                    //Ajout de classe egalité pour l'animation
                    $('#ordiAnimation').addClass(`loose ${choixOrdinateur}`)
                    $('#playerAnimation').addClass(`win ${choixJoueur}`)
                    $('#gameArena').addClass(`score`)
                    //Annonce du résultat
                    $('#resultat p').text(`Vous avez gagné`)
                    $('#victoireJoueur').text(`${victoireJoueur}`)
                }
    } else if (choixJoueur === choixOrdinateur) {
                //Annonce du résultat   
                $('#resultat p').text(`Égalité`)
                //Ajout de classe egalité pour l'animation
                $('#ordiAnimation').addClass(`eq ${choixOrdinateur}`)
                $('#playerAnimation').addClass(`eq ${choixJoueur}`)
                $('#gameArena').addClass(`score`)
    } else {
        victoireOrdi+=1
        $('#victoireOrdi').text(`${victoireOrdi}`)
            if (victoireOrdi === 3) {
                console.log(`Ordinateur gagne la partie`)
            } 
            else {
            //Ajout de classe egalité pour l'animation
            $('#ordiAnimation').addClass(`win ${choixOrdinateur}`)
            $('#playerAnimation').addClass(`loose ${choixJoueur}`)
            $('#gameArena').addClass(`score`)
            //Annonce du résultat
            $('#resultat p').text(`C'est perdu`)
            $('#victoireOrdi').text(`${victoireOrdi}`)
            }
    }   
}

//Détermination du fond de cadre de jeu Ordinateur
function affichageOrdi() {
    if (choixOrdinateur === 'main') {
        $('#choixOrdi p').text('')
        $('#choixOrdi').addClass('main')
    }
    if (choixOrdinateur === 'rose') {
        $('#choixOrdi p').text('')
        $('#choixOrdi').addClass('rose')
    }
    if (choixOrdinateur === 'cetoine') {
        $('#choixOrdi p').text('')
        $('#choixOrdi').addClass('cetoine')
    }
    
}

/* reset
victoireJoueur = 0
$('#victoireJoueur').text(`${victoireJoueur}`)
victoireOrdi = 0
$('#victoireOrdi').text(`${victoireOrdi}`)    */