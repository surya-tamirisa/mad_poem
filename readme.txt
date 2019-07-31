1) Download the project, and install it using 'npm install' in the root folder.

2) install mongodb, by opening mongo console (mongo.exe), execute the following:
>use poemdb 
>db.createCollection("poem_table",{})

*You can do the above using a GUI in MongoDB compass, as well.

3)run the server with 'npm start' from root directory, and the client with 'npm start' from client directory.

4) open http://localhost:3000/ in your browser, 

5) fill the form and hit Generate Poem, to generate a poem template with randon words, and store it in the data base with a timestamp.

6) Hit Retrieve all poems will fetch all the stored poems from the database.

Please feel free to contact me @ surya.tamirisa@gmail.com in case you are unable to run the project.




