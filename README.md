# reac*rcade
# HeroBuilder

Test my game out here: [reac*Rcade](https://smd9788.github.io/battlegame-client/#/)

If you want to work on this app for yourself follow these steps to clone:
## Preparation

1. Fork and clone this repository.
1. Create a new branch for your work and change into it.
1. Install dependencies with `npm install`

## About

This app is a foundation for a React based browser arcade. The first game in the arcade is HeroBuilder, an RPG game that allows users to create heros with their own unique nickname and class. Users can view their own heros, edit them, and delete them.

### Current state of app:
In the current version I aimed to CRUD all user resources and allow users to create heros. Game logic is a W.I.P.

Repositories:
Back end:
Front end:

Deployed Sites:
Back end:
Front end:

### Technology used:
  - HTML5/CSS3 (gameboard arranged in a flex-box)
  - Bootstrap for React (for alerts only)
  - JavaScript
  - React.js

### User Stories:
1. As a user, I want to sign in and out.
2. As a signed in user, I want to change passwords and sign out.
3. As a signed in user, I want to create a hero.
4. As a signed in user, I want to view my created heros.
5. As a signed in user, I want to edit the heros I created.
6. As a signed in user, I want to delete the heros I created with a second confirmation so I don't delete by mistake.

### WireFrames/ERD:
![View](https://imgur.com/hh2729K)
NEED TO UPDATE for new app direction

### Process:
1. Create foundation for game. User CRUD actions
2. Create CRUD components for user Characters
#### NEXT STEPS
1. Fix styling bugs that make menus/forms look weird.
2. Create XP table in api to translate XP into level
3. Create seed date for bosses, that user can 1v1 in game
4. Create some components with methods that simulate an attack on boss
5. Create some components with methods that simulate an attack from boss on user
6. handle result of battle. store xp and stats in api
7. add unique abilities to each class
8. TRANSFORM game into a simple component of the overall arcade where user can click a screenshot-esque thing to link over to the game
