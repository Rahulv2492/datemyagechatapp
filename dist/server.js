'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _swaggerTools = require('swagger-tools');

var _swaggerTools2 = _interopRequireDefault(_swaggerTools);

var _jsYaml = require('js-yaml');

var _jsYaml2 = _interopRequireDefault(_jsYaml);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

var _user = require('./routes/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/* Importing all modules */

io.on('connection', function (socket) {
    console.log('a user connected ' + socket.id);
    socket.on('disconnect', function () {
        console.log(socket.id + " is dicconnected");
    });
    socket.on("addToSever", function (userinfo) {
        console.log(userinfo);
        socket.join(userinfo.email);
    });
    socket.on("sendMessage", function (data) {
        console.log(data);
        io.sockets.in(data.email).emit('new_msg', data.msg);
    });
});

app.set('case sensitive routing', true);
app.set('env', _config2.default.ENV);
app.set('port', _config2.default.PORT);

var spec = _fs2.default.readFileSync(_path2.default.join(__dirname, 'apidocs/swagger.yaml'), 'utf8');
var swaggerDoc = _jsYaml2.default.safeLoad(spec);

// console.log(spec);
if (app.get('env') === 'production') {
    swaggerDoc.host = 'expressapp-api.herokuapp.com';
} else {
    swaggerDoc.host = _os2.default.hostname() + ':' + _config2.default.PORT;
}

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());
app.use((0, _cors2.default)());
app.use((0, _morgan2.default)('dev'));
app.use((0, _helmet2.default)());

app.get('/test', function (req, res) {
    res.send("Testing");
});

// app.use('/uploads', express.static('uploads'));
app.use('/utils', _express2.default.static('utils'));
app.use('/api', _user2.default);

app.use(function (req, res, next) {
    return res.status(404).send({ success: false, msg: 'Routes not found', data: {} });
});

app.use(function (err, req, res, next) {
    return res.status(500).send({ success: false, msg: 'Someting went wrong', data: err.stack });
});

http.listen(app.get('port'), function () {
    console.log('Server is listening on http://' + _os2.default.hostname() + ':' + app.get('port'));
});