
# userlistCrud

A Create-Read-Update-Delete user management app. 

All CRUD functions work.

Mainpage lists all added users in database, limit 10 per page, the rest are show in other pages.

User information can be edited, said information is saved to MongoDB.

Users can be removed both from mainpage, and from editing page. 

Navigational buttons to return to mainpage, create new user. 

Search is fully functional, can search by any alphabetical character.

Uses these dependencies:

` dotenv, ejs, express, express-ejs-layouts, express-flash, express-flash-message, express-session, method-override, mongoose `

Additional devDependency:

`nodemon`

To install all dependencies, open project in terminal and enter:

`npm install`

This should install all required dependencies. 
To start the app, after all dependencies are installed run:

`npm start`

## In **.env** file enter your MongoDB database string.
