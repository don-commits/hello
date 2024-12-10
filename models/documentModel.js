const { Schema, model, default: mongoose } = require("mongoose")

const DocumentSchema = new Schema({
    document_name: {
        type: String,
        required: true
    },
    public_add: {
        type: String,
    },
    type: {
        type: String
    },
    cid : {
        type : String,
        required : true
    },
    status: {
        type: String,
        enum: ['Pending', 'Verified', 'Rejected'],
        default: 'Pending'
    },
    lead_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'lead',
        // required: true
    },
    user_id : {
        type : mongoose.Schema.ObjectId,
        ref : 'user'
    },
    verifier_id : {
        type : mongoose.Schema.ObjectId,
        ref : 'verifier'
    }
}, {
    timestamps: true
})

const Document = model('document', DocumentSchema)

module.exports = Document