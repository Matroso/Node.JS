var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use( bodyParser.urlencoded({extended: true}));
app.use( bodyParser.json() );

var posts = [
    { title: "Add Post", content:"Add new post"},
    { title: "My First Post", content:"VS Code does a background check to detect if the installation has been changed on disk and if so, you will see the text '[Unsupported]' in the title bar. This is done since some extensions directly modify (patch) the VS Code product in such a way that is semi-permanent (until the next update) and this can cause hard to reproduce issues. We are not trying to block VS Code patching, but we want to raise awareness that patching VS Code means you are running an unsupported version. Reinstalling VS Code will replace the modified files and silence the warning." },
    { title: "My 2 Post", content:"VS Code does a background check to detect if the installation has been changed on disk and if so, you will see the text '[Unsupported]' in the title bar. This is done since some extensions directly modify (patch) the VS Code product in such a way that is semi-permanent (until the next update) and this can cause hard to reproduce issues. We are not trying to block VS Code patching, but we want to raise awareness that patching VS Code means you are running an unsupported version. Reinstalling VS Code will replace the modified files and silence the warning." },
    { title: "My 3 Post", content:"VS Code does a background check to detect if the installation has been changed on disk and if so, you will see the text '[Unsupported]' in the title bar. This is done since some extensions directly modify (patch) the VS Code product in such a way that is semi-permanent (until the next update) and this can cause hard to reproduce issues. We are not trying to block VS Code patching, but we want to raise awareness that patching VS Code means you are running an unsupported version. Reinstalling VS Code will replace the modified files and silence the warning." },
    
    
];

app.get( "/", function( req, res ){
    res.render( 'index.ejs', {posts: posts} );
    //res.send("Hello, my Friend!");
});

app.get( "/post/:id", function( req, res ) {
    var id = req.params.id;
    res.render( 'post.ejs', {post: posts[ id - 1 ]} );
});

app.get( '/write', function( req, res ){
    res.render( 'write.ejs');
});

app.post( '/write', function( req, res ){
    var 
        title = req.body.title;
        content = req.body.content;

    posts.push( { title: title, content: content } );

    res.redirect( '/' );
});

app.listen(3000, function(){
    console.log('Work on port 3000');
});