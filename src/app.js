import express from 'express';
import mongoose from 'mongoose';
import logger from 'morgan';
import config from './config/index.js';
import root from './routes/index.js';
const app = express();
//config
app.set('port',config.server.port);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//routes
app.use(root);


//404 error
app.use((req, res, next) => {
  const error404 = new Error('Not found');
  error404.status = 404;
  next(error404);
});
//Error Handling
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = (process.env.NODE_ENV !== 'development')
    ? err.message || 'Ups, Something went wrong...'
    : err.stack

    res.status(status).json({
      status: status,
      error: message
    })
})
//connect to db

const options = {
  useNewUrlParser: true, 
  useUnifiedTopology: true
};
mongoose.connect(config.database.uri, options)
.then(() => console.log('Connected to db'))
.catch((err) => console.error('Something happend \n ' + err));

export default app;