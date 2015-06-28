var express = require( 'express' );
var app     = express();
var http    = require( 'http' ).Server( app );

app.use( express.static( 'public_html' ) );

http.listen( 8080, function() {
  console.log( 'listening on *:8080' );
} );
