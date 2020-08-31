import app from './src/app.js';

app.listen(app.get('port'),(err) => {
  if(err) {
    console.error('Someting happend running server');
  }

  console.log(`Listening on port: ${app.get('port')}`);
})