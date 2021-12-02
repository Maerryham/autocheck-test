function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
    console.log('Redirect to secure');
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}
const express = require('express');
const app = express();
app.use(requireHTTPS);
console.log('Used express');
app.use(express.static('./dist/check/'));
console.log('Created Build');
app.get('/*', function(req, res) {
  console.log('Opening Build');
  res.sendFile('index.html', {root: 'dist/check/'}
);
});
app.listen(process.env.PORT || 8080);
