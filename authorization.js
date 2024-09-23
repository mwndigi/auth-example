const http = require('http');

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/authorization',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

const data = JSON.stringify({
  authorizationKey: '1b39cf6e-0f4e-4c44-96c3-7fbed7de3024'
});

const req = http.request(options, (res) => {
  let response = '';

  res.on('data', (chunk) => {
    response += chunk;
  });

  res.on('end', () => {
    console.log('Response:', response);
    if (res.statusCode === 200) {
      console.log('Authorized!');
    } else if (res.statusCode === 401) {
      console.log('Not authorized!');
    }
    
  });
});

req.on('error', (error) => {
  console.error('Error:', error);
});

req.write(data);
req.end();
