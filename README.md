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
3. it is considered good practice to change the secret_key once in a while, it does not affect the passwords already stored. I change mine periodically as well.</br>

<h1>Databases: </h1>
My server is connected to a MongoDB, there are multiple sources out there on how to download and set up a local MongoDB. Simply google search how to run MongoDB locally on windows or mac. Another option is using a cloud based database such as Mongo Atlas, however, this is generally more for production rather than development. 

<h1>Huge Pitfall save: </h1>
Apparently, creating .gitignore.txt by right clicking is different from creating it from the git bash by using touch .gitignore command, even though they both have the exact same .gitignore.txt name. If your gitignore isn't ignoring your files properly, try this before looking up other possible errors.
