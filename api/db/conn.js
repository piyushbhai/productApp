const mongoose = require('mongoose');
// const db = 'mongodb://localhost:27017/productApp';
const db = 'mongodb+srv://piyush:PJMaBqUST8tN7YPB@productapp.tazel8g.mongodb.net/';

mongoose.connect(db,{
    useNewUrlParser:true,
    // useCreateIndex:true,
    useUnifiedTopology:true,
    // useFindAndModify:false
}).then(()=>{
    console.log("connection successful");    
}).catch((err)=>{
    console.log(err);
    console.log("No connection");
})
