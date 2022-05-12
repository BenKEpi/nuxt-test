# Nuxt Test

Application web developpée avec [Nuxt3](https://v3.nuxtjs.org/) basé sur [Vue3](https://vuejs.org/) et [Tailwind](https://tailwindcss.com/) comme framework CSS. Cette application, utilise l'API [PokeAPI](https://pokeapi.co/).

## Fonctionnalités

### Page d'accueil

- Liste des Pokémons (40 élements de base) qui charge automatiquement les Pokémons suivants lorsque l'utilisateur atteint le bas de la liste.
- Possibilité de filtrer les Pokémons (par nom) à l'aide de la barre de recherche.
- Bouton pour ajouter un pokémon à la liste de favoris.
- Liste des pokémons favoris (6 maximum) affichée sur la droite de la liste pour l'affichage Web.
- Pour l'affichage sur mobile, la liste des favoris est accessible à l'aide du bouton 'pokeball' dans la header bar qui affiche une modale.

### Page de détails d'un pokémon

- Affichage de plus d'informations concernant le pokémon.
- Bouton pour retourner à la page d'accueil.
- Bouton pour ajouter un pokémon à la liste de favoris (6 maximum).
- Bouton de suppressions d'un pokémon de la liste de favoris.

### Autre

- La liste des pokémons favoris est enregistrée dans le localStorage du navigateur pour la retrouver lorsqu'on ferme et réouvre son navigateur.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install
```

## Development Server

Start the development server on http://localhost:3000

```bash
yarn run dev
```

## Production

Build the application for production:

```bash
yarn run build
```

Locally preview production build:

```bash
yarn run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment) for more information.
