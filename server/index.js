const express = require('express');
const cors = require('cors');
const Path = require('path');

const app = express();
app.use( cors() );

app.use( express.static( `${ __dirname }/../build` ) );
app.get('*', ( req, res, next ) => {
  res.sendFile( Path.resolve( `${ __dirname }/../build/index.html` ) );
});

app.listen( 3001, () => console.log('Server listening on port 3001.') );