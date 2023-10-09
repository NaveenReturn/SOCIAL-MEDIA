const app = require('./app')
const dotenv = require('dotenv');
const path = require('path');
const connection = require('./config/database');

dotenv.config({path:path.join(__dirname,"config/config.env")})

connection()

app.listen(process.env.PORT,()=>{
      console.log(`server start ${process.env.PORT} port type ${process.env.NODE_MON}`)                             
})