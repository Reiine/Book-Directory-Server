dotenv.config();
const mongoose = require('mongoose');
mongoose.connect(`${process.env.DB_URL}/booksinfo`)
.then((res)=>{
    console.log("Mongoose Connected");
}).catch((e)=>{
    console.log("Error connecting to mongoose");
});

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true
    },
    pass:{
        type:String,
        required: true
    },

});


const users = new mongoose.model('users', userSchema);

module.exports = users;
