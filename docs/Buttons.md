# Buttons

L'apparence des boutons est gérée grâce aux classes CSS suivantes.

## Déclarer un bouton

```html
<!-- A utiliser de préférence sur les éléments HTML cliquables -->
<a class="btn"></a>
<button class="btn"></button>
```

Par défaut, le bouton sera blanc.

## Types de boutons

| Type de bouton | Couleur | Classe |
|--|--|--|
| primary | Bleu (#546de5) | `btn-primary` |
| secondary | Gris | `btn-secondary` |
| red | Rouge | `btn-red` | 

### Bouton "bordure"

La classe `btn-border` passe le bouton en mode *bordure* : 
- Le texte prend la couleur
- Le fond devient transparent
- La bordure du bouton se colore de la même couleur que le texte

```html
<a href="btn btn-red btn-border">Se connecter</a>
```

Cette classe peut être appliqué à tous les boutons