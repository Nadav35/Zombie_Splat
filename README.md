###  ZombieSplat is a virtual reality zombie shooter game aiming to implement a immersive environment.

## Background and Overview

Learning new technologies has always been our goal as a group and we ambitiously decided that virtual reality is the technology that we wanted to tackle. We intend to use Mozilla’s A-Frame-React framework to allow us to create an immersive virtual reality environment on the web.

## Functionality and MVP

   - [ ] We will have user authentication.
   - [ ] We will be able to render zombies and animate them to move towards the user
   - [ ] We will build animations for bullets and users shooting at zombies.
   - [ ] We will keep track of high scores and store it in the back end.
   - [ ] We will have a frontend interface that teaches users how to play the game.
## Bonus Features
   - [ ] Allow users to move around while shooting zombies
   - [ ] Allow users to enter different environments

## Technologies & Technical Challenges
  ##### Backend: Express/MongoDB
  ##### Frontend: React/JavaScript/A-Frame


#### Rendering models
  + ##### Accessing 3d models
    + 'Turbo Squid’ has many 3d models that are free for anyone to use. We plan to use .gltf/.obj files to render 3d zombies as our enemies
  + ##### Rendering 3d models
    + We will use A-Frame’s html tags that will allow us to render 3d gltf and obj models.
    + To render the environment, we will use a equirectangular photo to create a 3d environment for the user to interact with.
    + A-Frame also provides environment objects like snow and rocks to interact with.
#### Implementing physics and collisions 

 + ##### Physics and collisions
    + We will use a physic engine that A-Frame provides to handle collision of bullets, players and zombies
	
  #### UX
  + ##### Immersive VR Experience
    - Utilizing A-frame and React we will render a scene in which the user is fully immersed through the browser window or a VR headset
    - The controls that the user will interact with will be the mouse to change their directional view, and space bar / click to shoot at the zombies


  + #### Backend
    + Our backend will be a standard Express build that will be able to receive high scores from the front end when a game has ended.
    + The backend will make a request for the user to log-in before playing the game.

## Project Wireframes
![user-auth](https://s3-us-west-1.amazonaws.com/campout-dev/user_auth.png)

![instructions-view](https://s3-us-west-1.amazonaws.com/campout-dev/instructions.png)

![game-view](https://s3-us-west-1.amazonaws.com/campout-dev/game_play.png)

## Accomplished over the Weekend
 - Completed a React-Aframe tutorial
- Completed most of the user’s auth tutorial and a mongoose tutorial
- Downloaded different 3-D assets we intend to use throughout the game

 
## Group Members & Work Breakdown

**Nadav Noy**,
**Jeffrey Chan**,
**Robert Farb**,

### Day 1
  - Work on the design of the home page and connect it to the backend
  - Add styling to the home page
 **Nadav**
  - Do some research into what audio components we can implement in the game
  - Get some more cool 3-D zombie models online and integrate them to the code base
 **Jeff**
   - Complete the online react-aframe tutorial we started over the weekend
   - Start working on the game-view dashboard that will show the game state
    **Rob**

### Day 2
  - Continue working on the UX.
	  - Try and finish the backend by the end of the day
  **Nadav**
   - Continue work on the React zombie components
   - Do some more research on aframe’s physics and try to get some zombies to move in different directions.
**Jeff**
   - Continue developing the bullets animations
   - Finishing touches on the game view’s dashboard
**Rob**

### Day 3

 
- Have the game state correctly update the screen as calls to the backend are made **TBD**
- Start connecting different events to audio components **TBD**
- Have some bullets rendering to the screen from the user’s perspective **TBD**


### Day 4
  - Implement collision events between zombies and the user **TBD**
  - Get heroku set up **TBD**
  - Have a whole level of game set up with zombies moving around, the user being able to move around the screen and firing at them using a backspace **TBD**

### Day 5
  - Incorporate at least one additional game level the user can enter into once all zombies in another level are removed from the screen
  - Play and move around the game and try to look for any bugs we didn’t encounter previously
  - Add more features to the game’s background
 

### Day 6
 - Finishing touch-ups. Make sure the game works fine on Heroku. Hopefully by now we have some kind of a VR headset we can test the game with
