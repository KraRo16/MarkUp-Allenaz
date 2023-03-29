const spi = require('spi-device');
const express = require('express');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
//~ const winston = require('winston');

const spaceMouse = require('./spacemouse').spaceMouse


app.use(express.json());

app.get('/src/components/Layout/AutomaticMode/AutomaticMode.jsx', (req, res) => {
  const id_button = req.body.id_button;
  console.log(id_button);
  res.send('Received POST request');
});









let intervalId;

     let parity = [];
     let debug = [];
     let error = [];
     let warning = [];
     let motionOnGoing = [];
     let onTargetPosition = [];
     let driverState = [];
     let workingMode = [];
     let actualPosition = [];
     let actualTorque = [];   
     let actualFrequency = [];
     let errorCode = [];
     let warningCode = [];



//~ const logger = winston.createLogger({
  //~ level: "info",
  //~ format: winston.format.combine(
    //~ winston.format.timestamp(),
    //~ winston.format.json()),
  //~ transports: [
    //~ new winston.transports.Console(),
    //~ new winston.transports.File({ filename: "test-log.log"})
  //~ ]
  //~ });

const config = {
  mode: 1,
  chipSelect: 0,
  maxSpeedHz: 100000,
  bitOrder: spi.ORDER_MSB_FIRST,
  bitsPerWord: 8,
};
 
const device = spi.open(0, 0, config, err => {
  if (err) throw err;
  console.log('Server is opened');
});

app.use('/css', express.static('css'))     ////////CSS STYLE
 
 app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
 
io.on('connection', socket => {
  const remoteAddress = socket.conn.remoteAddress;      ////////IP ADDRESS
  const array = remoteAddress.split(':')
  const remoteIP = array[array.length - 1]
  console.log('Client is ON! Connection from: ', remoteIP);
  
const messageLength = 58;

socket.on('start', () => {
  console.log('Server is started by: ', remoteIP);
 intervalId = setInterval(() => {
  const message = [{
    sendBuffer: Buffer.from([
    spaceMouse.x >> 8, spaceMouse.x,
    spaceMouse.y >> 8, spaceMouse.y,
    spaceMouse.z >> 8, spaceMouse.z,
    spaceMouse.a >> 8, spaceMouse.a,
    spaceMouse.b >> 8, spaceMouse.b,
    spaceMouse.c >> 8, spaceMouse.c,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff
    ]),
    receiveBuffer: Buffer.alloc(messageLength),
    byteLength: messageLength,
    speedHz: 100000
  }];

  
  device.transfer(message, (err, message) => {
  if (err) throw err;
  
  
  for(let i = 0; i < messageLength - 2; i++) {
  message[0].receiveBuffer[i] = message[0].receiveBuffer[i + 2];
  }
/////////////////////FIRST PACKAGE////////////////////////
  
  for(let i = 0; i < 4; i++) {
  
  let receiveData1 = message[0].receiveBuffer[i*14];
  
  parity[i] = (receiveData1 & 0b10000000) >> 7;
  debug[i] = (receiveData1 & 0b01000000) >> 6;
  error[i] = (receiveData1 & 0b00001000) >> 3;
  warning[i] = (receiveData1 & 0b00000100) >> 2;
  motionOnGoing[i] = (receiveData1 & 0b00000010) >> 1;
  onTargetPosition[i] = receiveData1 & 0b00000001;

console.log(message[0].receiveBuffer);
  console.log(`Parity: ${parity}`);
  console.log(`Debug: ${debug}`); 
  console.log(`Error: ${error}`); 
  console.log(`Warning: ${warning}`); 
  console.log(`MotionOnGoing: ${motionOnGoing}`); 
  console.log(`OnTargetPosition: ${onTargetPosition}`); 
  
/////////////////////SECOND PACKAGE////////////////////////
  
  let receiveData2 = message[0].receiveBuffer[i*14+1];
  
  driverState[i] = (receiveData2 & 0b11110000) >> 4;
  workingMode[i] = receiveData2 & 0b00001111;
  
  console.log(`DriverState: ${driverState}`);
  console.log(`WorkingMode: ${workingMode}`); 
  
/////////////////////POSITION PACKAGE////////////////////////
  
  //~ let actualPosition = (message[0].receiveBuffer[2] << 8) + message[0].receiveBuffer[3];
  
   actualPosition[i] = message[0].receiveBuffer.readInt16LE(i*14+2);
  
  console.log(`ActualPosition: ${actualPosition}`); 
  
/////////////////////TORQUE PACKAGE////////////////////////


  //~ let actualTorque = (message[0].receiveBuffer[4] << 8) + message[0].receiveBuffer[5];
  
  actualTorque[i] = message[0].receiveBuffer.readInt16LE(i*14+4);
  
  console.log(`ActualTorque: ${actualTorque}`); 
  
/////////////////////FREQUENCY PACKAGE////////////////////////

  
  //~ let actualFrequency = (message[0].receiveBuffer[6] << 24) + (message[0].receiveBuffer[7] << 16) + (message[0].receiveBuffer[8] << 8) + message[0].receiveBuffer[9];
  
  actualFrequency[i] = Math.round(message[0].receiveBuffer.readFloatLE(i*14+6));
  
  console.log(`ActualFrequency: ${actualFrequency}`); 
  
/////////////////////ERROR/WARNING CODE PACKAGE(x2)////////////////////////

  errorCode[i] = message[0].receiveBuffer.readInt16LE(i*14+10);
  warningCode[i] = message[0].receiveBuffer.readInt16LE(i*14+12);
//  errorCode = Math.floor(Math.random() * 6);
//  warningCode = Math.floor(Math.random() * 5) + 6;
  
 
  console.log(`Error Code: ${errorCode}`); 
  console.log(`Warning Code: ${warningCode}`); 
  

/////////////////////SOCKET EMIT////////////////////////
  
}
    console.log('SpaceMouse X: ', spaceMouse.x)
    console.log(message[0].sendBuffer);


   //~ setInterval(() => {
  //~ logger.log('info', `Data: ${data}`);
//~ }, 10);
  });
io.emit('data', {    
      parity: parity,
      debug: debug,
      error: error,
      warning: warning,
      motionOnGoing: motionOnGoing,
      onTargetPosition: onTargetPosition,
      driverState: driverState,
      workingMode: workingMode,
      actualPosition: actualPosition,
      actualTorque: actualTorque,     
      actualFrequency: actualFrequency,
      errorCode: errorCode,
      warningCode: warningCode,
   });




},100);
});  




  socket.on('', () => {
    console.log('Data received');
    const message = {
      parity: parity,
      debug: debug,
     error: error,
      warning: warning,
      motionOnGoing: motionOnGoing,
      onTargetPosition: onTargetPosition,
      driverState: driverState,
    workingMode: workingMode,
      actualPosition: actualPosition,
      actualTorque: actualTorque,     
      actualFrequency: actualFrequency,
      errorCode: errorCode,
      warningCode: warningCode,
   };
    io.emit('data', message);
  });
    
  socket.on('stop', () => {
    clearInterval(intervalId);
    console.log('Server is stopped by:', remoteIP)
    });
  
socket.on('disconnect', () => {
  console.log('Client ', remoteIP, 'disconnected!');
  });
}); 



server.listen(3000, () => {
  console.log('Server started on port 3000');
});









