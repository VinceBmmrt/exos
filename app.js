// Petit exo en solo pour réviser les tableaux

// On a le tableau suivant :

const animaux = [
  ["renard", "chacal", "coyote", "lycaon"],
  ["tigre", "lion", "panthère", "leopard"],
  ["merle", "mésange", "pinson", "rougegorge"],
];

animaux[0].push("chien");
animaux[1].splice(0, 0, "Minouche");

animaux.pop;

for (let index = 0; index < animaux.length; index++) {
  const family = animaux[index];
  family.forEach((element) => console.log(element));
}

// 1- Selectionner le lion et l'afficher en console
// 2- Selectionner le merle et l'afficher en console
// 3- Ajouter "chien" en dernière position dans le tableau des canidés (le premier tableau)
// 4- Ajouter "Minouche" en première position dans le tableau des félins
// 5- Supprimer le tableau des oiseaux
// Bonus- Faire une boucle pour afficher chaque élément de chaque tableau (Vous avez dit une boucle dans une boucle ?)
