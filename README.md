<h1>For Server Code (In terminal): </h1>
npm init -y </br>
npm install </br>
npm init and npm install is just to make sure all the dependencies and start up codes are installed </br>
<h2>To run the actual code: </h2>
node index.js or nodemon </br>

<h1>For Client Code (In terminal): </h1>
npm start </br>
As simple as that for the client side</br>

<h1>NOTE: </h1>
The secret key inside the .env file is used to sign and decode the jsonwebtoken. You can make it literally anything you want, but please hide the key if planning to run in production. The .env file is not the secret key used in the development of this project, I just put it there to showcase what it looks like. </br>

<h2>How to hide .env file from committing to github:</h2>
1. create a .gitignore text file at root of repository </br>
2. inside the .gitignore text file add .env on its own line </br>
3. from now on any commits will not be updated for .env specifically. for ex: whenever I commit, .env stays as the fake key that I put in rather than updating it to be the key that I'm actually using.
