// 1 - clique sur le footer, affiche ''clique dans la console''

// var footerClick= document.getElementsByTagName("footer");
// console.log(footerClick);

// var footerClick1 = footerClick[0];

// footerClick1.addEventListener('click', Text1);
    
//     function Text1() {
//         console.log("clique dans la console");
//     }


// 1 bis - clic numéro X

// var footerClick= document.getElementsByTagName("footer");
// var footerClick1 = footerClick[0];
// let compteur = 0;

// footerClick1.addEventListener('click', Text1);
    
//     function Text1() {
//         console.log("clique dans la console");

//     if (footerClick1 === true);
//             compteur += 1;

//     console.log(`clic numéro ${compteur}`);

//     }


// *************************************************************************************************

// 2 - class Id navbar perde sa classe "collapse" si on clique et retrouve sa class collapse si on reclique dessus

// var modify1 = document.getElementById("navbarHeader");
// var clickon = document.getElementsByClassName("navbar-toggler-icon")[0];

//   clickon.addEventListener('click', Collapse);

//     function Collapse (){
//         if (modify1.classList.contains("collapse"))
//         {
//             modify1.classList.remove("collapse");
//         }
//         else 
//         {
//         modify1.classList.add("collapse");
//         }
//     }

// console.log(clickon);

// ******************************************************************************************************


// 3 - si on clique sur "edit" de la 1ere card, le texte de la card se met en rouge

// var button = document.getElementsByClassName("btn-outline-secondary")[0];
// var speech = document.getElementsByClassName("card-text")[0];

// console.log(speech);

//     button.addEventListener('click', red);

//     function red () {
//        speech.style.color = "#FF0000";
//     }




// *****************************************************************************************************

// 4 - clique sur le Edit de la 2e card = vert, puis re-clique = noir

// var button = document.getElementsByClassName("btn-outline-secondary")[1];
// var speech = document.getElementsByClassName("card-text")[1];


// console.log(speech);

//         button.addEventListener('click', () => {
//             speech.classList.toggle('green')
//         });

    
    
    
// **************************************************************************************************

// 5 - double click pour désactiver le CDN boostrap et encore double click pour remettre(pas fini)

// var lien = document.getElementsByTagName("link")[0];
// var navbar = document.getElementsByClassName("navbar")[0];

// console.log(lien);

// navbar.addEventListener('dblclick', supprimer);



//     function supprimer () {
//         lien.href="";        
//     }

    
    
  
// console.log(lien.collapse);
// ********************************************************************************************


// 6 - sur passe souris sur une view d'une card, le texte disparait, image se réduit à 20%. ET si on repasse dessus tout redevient normal.

var image = document.querySelectorAll(".card-img-top")[0];
var paragraph = document.querySelectorAll(".card-text")[0];
var button = document.getElementsByClassName("btn-success")[0];

console.log(image);

button.addEventListener('mouseover', disapeare);

    function disapeare () {
        paragraph.textContent ="";
        image.style.transform = "scale(0.2)";
    }

    // function disapeare () {
    //     if (paragraph.textContent ="")
    //     {
    //     paragraph.textContent ="";
    //     image.style.transform = "scale(0.2)";
    //     }
    //     else
    //     {
    //     image.style.transform = "scale(0.2)";
    //     }