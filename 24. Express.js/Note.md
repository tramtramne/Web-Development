// touch server.js

//npm init -> create file .json 

// npm install express
 
 We get a get request from a browser that is targeting this route, which is the home route, then we're going to respond with this callback. Now we can respond to different routes

app.get("/contact", function(req, res){
  res.send("Contact me at: ngoctram091903@gmail.com");
}); 


Nodemon is a utility depended on about 3 million projects, that will monitor for any changes in your source and automatically restart your server. Perfect for development.

Swap nodemon instead of node to run your code, and now your process will automatically restart when your code changes. To install, get Node.js, then from your terminal run: npm install -g nodemon


Features
  Automatic restarting of application.
  Detects default file extension to monitor.
  Default support for node but easy to run any executable, such as python, ruby, make, etc.
  Ignoring specific files or directories.
  Watch specific directories.
  Works with server applications or one time run utilities and REPLs.
  Scriptable through node require statements.
  Open source and available on github.



### npm install body-parser ---------
it allows you to go into any of your routes, and you can tap into something called request.body,and this is the parsed version of the HTTP request.


### npm install body-parser ---------
HTTP request logger middleware for node.js