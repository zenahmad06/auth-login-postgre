
const express = require('express');
var logger = require('morgan');

const authRouter = require('./routes/auth');


const app = express();
const cookieParser = require('cookie-parser')
const cors = require('cors')


app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser())


app.use(cors({
  origin:'http://localhost:5173', //sumber request yang menggunakan backend kita
  credentials:true //biar bisa ngirim cookie lintas domain/lintas port
}))

app.use('/api/auth', authRouter);

//middleware error
app.use((err,req,res,next) => {
  console.log(err.stack)
})

module.exports = app;
