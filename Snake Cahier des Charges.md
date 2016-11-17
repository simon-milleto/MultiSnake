#Snake Multijoueur

##Système de jeu
Les joueurs contrôlent une longue et fine ligne semblable à un serpent, qui doit slalomer entre les autres joueurs pour survivre. Pour gagner en puissance, le joueur doit faire manger à son serpent un certain nombre de pommes, allongeant à chaque fois la taille du serpent. Alors que le serpent avance inexorablement, le joueur ne peut que lui indiquer une direction à suivre (en haut, en bas, à gauche, à droite) afin d'éviter que la tête du serpent ne touche les autres joueurs, auquel cas il risque de mourir.

##Règles du jeu
- Le serpent avance tout seul dans une direction choisit aléatoirement au début du jeu
- Le serpent peut se déplacer seulement à droite, gauche, en haut ou en bas. Pas de déplacement en diagonale ou en cercle
- La vitesse du serpent est la même pour tout le monde
- 2 serpents qui entrent en collision en tête à tête meurent
- Des pommes apparaissent aléatoirement sur la carte.
- Une pomme apparrait toute les 2 secondes sur la carte
- Si un serpent atteint le bord de la carte, il passe de l'autre côté
- Un serpent qui meurt revient dans la partie 5 secondes après.

##Déroulement d'une partie
- Le nombre de joueurs maximum dans une partie est de 10
- Une partie commence une fois que 10 joueurs ont rejoint un salon ou à la fin d'un compteur (1 minute d'attente par exemple)
- 10 couleurs différents sont disponible au début de la partie
- Le joueur à la possibilité de rentrer un pseudo (Si le joueur ne rentre rien on lui assigne un pseudo aléatoirement)
- Le temps d'une partie est de 3 minutes

##Map
- La taille du terrain de jeu est limité dans un rectangle de 1600x900px.
- La couleur de fond sera noir
- Les pommes en rouge

##Condition de Victoire
- Les joueurs accumulent un certain nombre de points au fur et à mesure qu'ils survivent.
- Les joueurs gagnent des points supplémentaire à chaques pommes ramassées.
- Le joueur ayant le plus de point à la fin de la partie gagne.
