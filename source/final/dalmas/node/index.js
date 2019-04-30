var app = require('express')(); // Implement express module
var http = require('http').Server(app); // Implement HTTP module and use it with Express
var io = require('socket.io')(http); // Implement socket.io module and use it with HTTP
var port = 3000;
var users = {}; // The set of all users connected to the server.
// A 2d array of pixels for the picture. Format: picture[col][row] = pixel RGB color
var picture = [...Array(42)].map(e => Array(64).fill("rgb(255, 255, 255)")); // JavaScript does not have a nice way to make 2d arrays.
var name_dict = []; // Used as a hash map to check if there are duplicated user names.

// Discussed earlier, some routing through Express.
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

// Also discussed earlier, asynchronous listen that runs when port is established.
http.listen(port, function() {
    console.log('Server is running on port ' + port);
});

// Also asynchronous, runs when a user connects to the server.
io.on('connection', function(socket) {
    // Set up default user data for the user who connected to the server.
    users[socket.id] = {};
    users[socket.id].username = "Unconnected";
    users[socket.id].name_chosen = false;
    users[socket.id].user_color = "rgb(0, 0, 0)";

    // Tell the client (and only this client, that's why it's io.to) that they connected to the server.
    io.to(socket.id).emit('on page loaded', picture);

    // This runs when the user tries to change their user color.
    socket.on('update user color', function(color) {
        // If their request color is valid, set it to that, otherwise set it to a default color.
        var local_color = "rgb(0, 0, 0)";
        if (isValidColor(color)) local_color = color; 

        // Don't bother changing it if it's the same color.
        if (local_color !== users[socket.id].user_color) {
            users[socket.id].user_color = local_color;
            io.emit('userlist update color', users[socket.id]); // update this color in user list as well
        }
    });

    // Runs when a user sends a message.
    socket.on('chat message', function(msg){
        /* The input box for the chat and the username input are the same. So, when they send a message
            it needs to check whether they are sending a chat message or inputting their username.
        */
        if (users[socket.id].name_chosen) { 
            // If they are sending a chat message, send it to all connected clients.
            io.emit('chat message', users[socket.id].username, msg, users[socket.id].user_color, "");
        } else {
            // If they are inputting their username, set up the following,

            // don't allow two users to have the same name
            var temp_name = msg.substring(0, 20); // limit usernames to 20 characters

            if (name_dict[temp_name] === undefined) {
                name_dict[temp_name] = 0;
            } else {
                // If two users have the same name, make the new user have a number after their name.
                name_dict[temp_name] = name_dict[temp_name] + 1;
                temp_name = msg.substring(0, 17) + name_dict[temp_name];
            }

            users[socket.id].username = temp_name; // set their username
            users[socket.id].name_chosen = true;

            // Send a message to all clients telling them that someone has joined the chat.
            io.emit('chat message', "", "", 'green', users[socket.id].username + " has connected to the chat.");
            io.to(socket.id).emit('on chat join', msg); // Tell the client that they set their username and have joined successfully.

            // Update the user list.
            var local_user_data = [];

            for (var temp in users) {
                local_user_data.push(users[temp]);
            }

            io.emit('userlist update', local_user_data);
        }
    });

    // Runs when a user clicks on a pixel.
    socket.on('box clicked', function(click_data) {
        // Only allow users who have selected a username to edit the picture.
        if (users[socket.id].name_chosen) {
            // Have default color be red, if the user has a valid selected color set it to that instead.
            var local_color = "rgb(200, 20, 20)";
            if (isValidColor(click_data.color)) local_color = click_data.color;

            // Set the new color of the pixel for the client and server.
            picture[click_data.x][click_data.y] = local_color;
            io.emit('update box', click_data);
        }
    });

    // Runs when a user leaves the chat.
    socket.on('disconnect', function() {
        // Send a message to all clients that someone left.
        io.emit('chat message', "", "", 'red', users[socket.id].username + " has left the chat.");
        io.emit('userlist remove', users[socket.id]); // remove them from the user list
        users[socket.id] = null; // remove their information from the server
    });

    // This method uses regex to check that a color is in valid rgb format so that it can be inserted into the
    // picture array without issues.
    function isValidColor(color_str) {
        var check = /^[r][g][b][(]\d{1,3}[,]\s?\d{1,3}[,]\s?\d{1,3}[)]$/;
        return check.test(color_str);
    }
});