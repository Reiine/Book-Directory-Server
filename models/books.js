dotenv.config();
const mongoose = require('mongoose');
mongoose.connect(`${process.env.DB_URL}/booksinfo`)
.then((res)=>{
    console.log("Mongoose Connected");
}).catch((e)=>{
    console.log("Error connecting to mongoose");
});

const booksSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    author:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
});


const books = new mongoose.model('books', booksSchema);

module.exports = books;
