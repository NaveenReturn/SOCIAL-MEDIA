const mongoose = require('mongoose')

const connection =()=>{
  mongoose.connect(process.env.DB_LOCAL,{
      useNewUrlParser:true,
       useUnifiedTopology:true                            
}).then(con=>{
    console.log(`Database Connection ${con.connection.host}`)                               
})
}

module.exports = connection;