colors = require("colors")
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  next();
});

app.use('/home', require('./routes/home'));
app.use('/health', require('./routes/health'));

app.listen(process.env.PORT || 3000, () => {
  console.log(colors.blue(`Aplicación escuchando en el puerto ${process.env.PORT || 3000}`));
})
