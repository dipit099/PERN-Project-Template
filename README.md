# PERN-Project-Template
Template for PERN Project ( Postgres + Nodejs + Reactjs )

## Download the Github Zip file and extract it in your project folder
Now run this cmds to install all the dependencies!

```bash
cd server
npm install
nodemon index
```

```bash
cd client
npm install
npm start
```
```bash
For Database, change the db.js file(in server folder) with your database Credentials.
 ```
## Happy Coding !
## Happy Coding !
## Happy Coding !

## Also If You Want to manually Create then follow the below steps [optional]
### Server :
Create a folder "server" ,then open your terminal , and follow the steps below one by one.
```bash
cd server
npm init
```
And keep pressing 'enter' until it asks for 'yes' , then type 'yes' and press 'enter'.Now in the terminal,paste these one by one.
```bash
npm i express pg cors
npm i nodemon
touch index.js
write given copy and paste my code of that file, with a PORT number.
```
Now paste this `nodemon index` in terminal to start the server .


### Client :
```bash
npx create-react-app client
cd client
npm start
```

###  To preview md Files by keyboard , press `"Ctrl + Shift + V"`

## Expose your Localhost to the network
Copy and paste it in package.json file of client folder.
```bash
"start": "react-scripts start --host 0.0.0.0",
```
Then go to ur IP address and port number to access the app from any device in the same network.
eg. http://192.168.1.ipnumber:3000/
