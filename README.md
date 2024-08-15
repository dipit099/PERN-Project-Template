# PERN-Project-Template
Template for PERN Project ( Postgres + Reactjs + Nodejs )

## Download the Github Zip file and extract it in your project folder
Now run this cmds to install all the dependencies!

```bash
cd backend
npm install
nodemon index
```

```bash
cd frontend
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
### Backend :
Create a folder "backend" ,then open your terminal , and follow the steps below one by one.
```bash
cd backend
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


### Frontend :
```bash
npx create-react-app frontend
cd frontend
npm start
```
Install nesesary packages for frontend.
###  To preview md Files by keyboard , press `"Ctrl + Shift + V"`

## Expose your Localhost to the 

Copy and paste it in package.json file of client folder.
```bash
"start": "react-scripts start --host 0.0.0.0",
```
Then go to ur IP address and port number to access the app from any device in the same network.
eg. http://192.168.1.ipnumber:3000/


## Github Repo Collaboratoration:

```bash
git checkout -b branchname  #only do this once
git add .
git commit -m "message"
git push -u origin branchname
    
# pull first before pushing
git fetch origin main
git pull origin main
```
To Open md files in vscode - `Ctrl + Shift + V`

