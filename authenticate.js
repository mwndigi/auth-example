const http = require('http');

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/authenticate',
  method: 'GET'
};

const req = http.request(options, (res) => {
    let data = '';
  
    res.on('data', (chunk) => {
      data += chunk;
    });
  
    res.on('end', () => {
      console.log('Response Data:', data);
    });
  });
  
  req.on('error', (error) => {
    console.error('Error:', error);
  });
  
  req.end();