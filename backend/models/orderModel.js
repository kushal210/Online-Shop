import mongoose, { Mongoose } from 'mongoose'

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    idAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User