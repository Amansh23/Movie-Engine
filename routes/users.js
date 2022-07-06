const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/movieengine");

const userSchema = mongoose.Schema({
    productname:String,
    productimage:String,
    producttheme:String,
});

module.exports = mongoose.model("users",userSchema);