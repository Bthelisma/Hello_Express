var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.render('index', { title: "my Express project" });
});
// route to process new user form data:
app.post('/users', function(req, res) {
    console.log("POST DATA \n\n", req.body)
        //code to add user to db goes here!
        // code to add user to db goes here!
        // redirect the user back to the root route. 
        // All we do is specify the URL we want to go to:
    res.redirect('/');
})

app.get("/users", function(request, response) {
    // hard-coded user data
    var users_array = [
        { name: "Michael", email: "michael@codingdojo.com" },
        { name: "Jay", email: "jay@codingdojo.com" },
        { name: "Brendan", email: "brendan@codingdojo.com" },
        { name: "Andrew", email: "andrew@codingdojo.com" }
    ];
    response.render('users', { users: users_array });
})




app.listen(8000, function() {
    console.log("listenning on port 8000");
})