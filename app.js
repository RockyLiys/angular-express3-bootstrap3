var express = require('express')
    , path = require('path')
    , ejs = require('ejs')
    , app = express()
    , server = require('http').createServer(app);

<<<<<<< HEAD

app.set('port', process.env.PORT || 4000);
//templates
app.set('views', __dirname + '/views');
app.engine('.html', ejs.__express);
app.set('view engine', 'html'); //修改文件扩展名ejs为html

=======
app.set('port', process.env.PORT || 4000);
app.set('views', __dirname + '/views');
app.engine('.html', ejs.__express);
app.set('view engine', 'html'); //修改文件扩展名ejs为html
>>>>>>> 46d6bb774e300aa1de6f5ac96870e0359ff30a4f
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'app')));

if (app.get('env') === 'development') {
    app.use(express.errorHandler());
}

// angular启动页
app.get('/', function (req, res) {
    res.sendfile('app/index.html');
});

<<<<<<< HEAD


=======
>>>>>>> 46d6bb774e300aa1de6f5ac96870e0359ff30a4f
server.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});


