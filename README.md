# Book-Directory-Server
[SERVER] Books Directory that uses CRUD operation and mongodb as database

# Requirements
1. MongoDB Database
2. Node.js

# Setup
1. After cloning the repository, navigate to the folder in the terminal and run the command "npm i" or "npm install" to download the dependencies.
2. Create a new .env file inside the folder and set a value for "SECRET_TOKEN". This is used for signing and verifying the jwt token.
3. If you wish to change the mongodb server link, navigate  to the models folder and change the link in the files. The default is the local mongodb server link.
4. Now in terminal, run the command "npm start" to start the server.
5. Check the api connection through postman or your browser.

# API Routes
1. **POST** /login :- **important** After you post your "email" and "pass" in this route, you will receive a jwt token. This jwt token is used if you want to access other routes.<br>
body:- {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"email" : "my_email@gmail.com",<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"pass"&nbsp;&nbsp;: "mypassword"<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}

3. **GET** /books :- Route to fetch book data with pagination. Query example: http://localhost:3001/books?page=1&limit=5.
4. **POST** /books :- Route to add a book.<br>
if logged in header should contain authorization token<br>
body:- {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "book name",<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"author": "author name",<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"description":"description"<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}

6. **GET** /books/:id :- Route to find book of a specific id.
7. **PUT** /books/:id :- Route to update a book.<br>
if logged in header should contain authorization token<br>
body:- {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "book name",<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"author": "author name",<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"description":"description"<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
8. **DELETE** /books/:id :- Route to delete a book.<br>
if logged in header should contain authorization token

