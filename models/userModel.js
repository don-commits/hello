const {Schema, model, default: mongoose} = require("mongoose")

const UserSchema = new Schema({
    user_name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    phone_no : {
        type : Number,
    },
    token : {
        type : String,
        default : ""
    },
    public_add : {
        type : String,
    },
    document_count : {
        type : Number,
    },
    accepted: {
        type : Number,
    },
    rejected : {
        type : Number,
    },
    document_id : [{
        type : mongoose.Schema.ObjectId, 
        ref : "document"
    }],
}, {
    timestamps : true
})

const User = model('user', UserSchema)

module.exports = User