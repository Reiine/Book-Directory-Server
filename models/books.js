const mongoose = require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/booksinfo`)
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