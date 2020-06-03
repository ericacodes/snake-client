const net = require('net');

// const connectMessage = () => console.log('Successfully connected to game server');

/**
 * Establishes connection with the game server
 */
const connect = function(data) {
  const conn = net.createConnection({ 
    host: '135.23.222.148',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect', () => console.log('Successfully connected to game server'));
  conn.on('data', data => console.log(data));
  conn.on('connect', () => conn.write('Name: ES'));

  return conn;
}

module.exports = { connect }; 