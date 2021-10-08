# Projets

Les projets sont identifiables deux éléments : 
- ID, Integer, (Clé primaire)
- Nom, String, Unique

## Page Projet

La page projet permet d'accéder à la description d'un projet. Son url se décompose ainsi:

`/project/:id/:nom`

Avec :
- `id` : ID du projet
- `nom` : Nom du projet sans espace

Lorsque la page se charge, on vérifie que le nom sans espace correspond à l'ID, si ce n'est pas le cas, on affiche une erreur 404.

Cette page est modifiée dynamiquement depuis des objets JSON, qui seront dans le futur obtenus via la SashAPI.