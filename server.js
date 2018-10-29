import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import swaggerTools from 'swagger-tools';
import jsyaml from 'js-yaml';
import fs from 'fs';
import path from 'path';
import helmet from 'helmet';
import cors from 'cors';
import os from 'os';
import config from './config/config';
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/* Importing all modules */

import user from './routes/user';


io.on('connection', function (socket) {
    console.log('a user connected ' + socket.id,);
    socket.on('disconnect',()=>{
        console.log(socket.id +" is dicconnected")
    })
    socket.on("addToSever",(userinfo)=>{
        console.log(userinfo)
        socket.join(userinfo.email);

    })
    socket.on("sendMessage",(data)=>{
        console.log(data)
        io.sockets.in(data.email).emit('new_msg', data.msg);
    })
});



app.set('case sensitive routing', true);
app.set('env', config.ENV);
app.set('port', config.PORT);

let spec = fs.readFileSync(path.join(__dirname, 'apidocs/swagger.yaml'), 'utf8');
let swaggerDoc = jsyaml.safeLoad(spec);

// console.log(spec);
if (app.get('env') === 'production') {
    swaggerDoc.host = 'expressapp-api.herokuapp.com';
}
else {
    swaggerDoc.host = `${os.hostname()}:${config.PORT}`;
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

app.get('/test', (req, res) => {
    res.send("Testing")
})

// app.use('/uploads', express.static('uploads'));
app.use('/utils', express.static('utils'));
app.use('/api', user);

app.use((req, res, next) => {
    return res.status(404).send({ success: false, msg: 'Routes not found', data: {} });
});

app.use((err, req, res, next) => {
    return res.status(500).send({ success: false, msg: 'Someting went wrong', data: err.stack });
});




http.listen(app.get('port'), () => {
    console.log(`Server is listening on http://${os.hostname()}:${app.get('port')}`);
});


