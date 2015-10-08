var express = require('express');
var app = express();

app.get('/nickname', function(request, response){
    response.send('exuberant-dragonfly');
});

app.listen(process.env.PORT || 4000);