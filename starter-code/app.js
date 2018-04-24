const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
  });

  app.use(express.static('public'));

  // home page
app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home-page.html');
  });

// photo gallery page
  app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/gallery-page.html');
  });

  // about page
  app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about-page.html');
  });