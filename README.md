
# userlistCrud

A Create-Read-Update-Delete user management app. 

All CRUD functions work.

Mainpage lists all added users in database, limit 10 per page, the rest are show in other pages.

User information can be edited, said information is saved to MongoDB.

Users can be removed both from mainpage, and from editing page. 

Navigational buttons to return to mainpage, create new user. 

Search is fully functional, can search by any alphabetical character.

Uses these dependencies:
` "dependencies": {
        "dotenv": "^16.3.1",
        "ejs": "^3.1.9",
        "express": "^4.18.2",
        "express-ejs-layouts": "^2.5.1",
        "express-flash": "^0.0.2",
        "express-flash-message": "^2.1.0",
        "express-session": "^1.17.3",
        "method-override": "^3.0.0",
        "mongoose": "^7.3.4"
      },
      "devDependencies": {
        "nodemon": "^3.0.1"
      }`
