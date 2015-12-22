var http = require('http')
var port = process.env.PORT || 1337;

app.get('/',function(req,res){
res.json({message:'hooray! welcome to our api!'});
});


app.listen(port);
