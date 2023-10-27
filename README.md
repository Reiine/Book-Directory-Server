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
1. <font color='seagreen'>**POST**</font>&nbsp;&nbsp;&nbsp;&nbsp;/login &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:- **important** After you post your "email" and "pass" in this route, you will receive a jwt token. This jwt token is used if you want to access other routes.
2. <font color='dodgerblue'>**GET**</font>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/books &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:- Route to fetch book data with pagination. Query example: http://localhost:3001/books?page=1&limit=5.
3. <font color='seagreen'>**POST**</font>&nbsp;&nbsp;&nbsp;&nbsp;/books &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:- Route to add a book.
4. <font color='blue'>**GET**</font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /books/:id :- Route to find book of a specific id.
5. <font color='orange'>**PUT**</font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /books/:id :- Route to update a book.
6. <font color='red'>**DELETE**</font> /books/:id :- Route to delete a book.


