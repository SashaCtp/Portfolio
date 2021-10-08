# Page format

Une page formatable se décompose en 3 parties distinctes

**Rows** -> **Columns** -> **Components**

## Page

- `title` - String

- `subtitle` - String - *Facultatif*

- `rows` - Array

  Liste qui contient les différentes lignes qui composent la page

```json
{
  "title": "Page d'exemple",
  "subtitle": "Elle montre l'exemple au autres !",
  "rows": [
    {
      // Ligne
      "type": ...,
      "cols": [
        {
          // Colonne
        }
      ]
    }
  ]
}
```

## Row

- `type` - String - *Facultatif*
  
  ...

- `cols` - Array

  Liste des colonnes composant la ligne

  **Exemple**

  ```json
  {
      "type": "colored",
      "cols": [

      ]
  }
  ```

## Col

- `type` - String - *Facultatif*
  
  * default : *normal*
    
    Colonne classique

  * timeline
    
    Colonne chronologique

- `elements` - Array
  
  Liste des éléments qui composent la page

  **Exemple**

  ```json
  {
      "type": ...,
      "elements" : [
          
      ]
  }
  ```

## Element

Un élément se définit avec **au moins** deux propriétés :

- `type` - String
  
  Type de l'élément à afficher, cf 

- `content` - Change en fonction des types
  
  Contenu de l'élément, cela peut être une simple chaîne de caractère, ou une liste, etc.

  Il faut donc se référer aux informations ci-dessous.

**Exemple**
```json
{
  "type": "...",
  "content": ...
}
```

Voici les différents types d'éléments :

### 👑 Title

```json
{
  "type": "title"
}
```

Titre de la colonne

### 📃 Paragraph

```json
{
  "type": "paragraph"
}
```

- `content` - String

  Texte du paragraphe (accepte les éléments de style Markdown).

- `align` - String - *Facultatif*

  Alignement du texte

  Valeurs acceptées : `left, center, right, justify`

  Par défaut : *justify*

### Item

### 📊 Tableaux

Les tableaux se décomposent de la façon suivante :

- `head` - Array
  
  ```json
  {
    "head": [
      // Cells
    ]
  }
  ```

- `body` - Array
  
  ```json
  {
    "body": [
      // Cell rows
    ]
  }
  ```

#### Cellule

Une cellule représente une balise `<td>`, elle prend les même paramètres :

- `content` - String

- `colspan` - Integer - *Facultatif* - *Default : 1*

### Button

### 📷 Image