const net = require('net');

const connectMessage = () => console.log('Successfully connected to game server');
// const sendMessage = (conn, message) => conn.write(message);

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
  conn.on('connect', connectMessage); // on function doesnt want parameters for the function
  conn.on('connect', () => {
    conn.write('Name: ES');
    // setInterval(() => conn.write('Move: up'), 50); (callback does not take in parameters)
    // setTimeout(() => conn.write('Move: left'), 100); (callback does not take in parameters)
  });

  conn.on('data', data => console.log(data));
  return conn;
}

module.exports = { connect }; 