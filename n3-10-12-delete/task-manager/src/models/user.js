const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique:true,
        required:true,
        trim: true,
        lowercase: true
    },
    age: {
        type: Number,
        default:0
    },
    password: {
        type: String,
        required:true,
        trim:true,
        minLength: 8,
        max:24

    },
    tname: {
        type: String,
        required:true,
        trim:true,
        min: 8,
        max:24
    },favTeam: {
        type: String,
        required:true,
        trim:true
    },tokens: [{
        token:{
            type:String,
            required:true
        }
    }]

})
//generate token
userSchema.methods.generateAuthToken = async function() {
    const user = this
    const token = jwt.sign({_id: user._id.toString()}, 'thisismytoken',{expiresIn : '7 days'})

    user.tokens = user.tokens.concat({ token })

    await user.save()

    return token

}


userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email})

    if(!user) {
        throw new Error('unable to login')
    }
    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
        throw new Error ('unable to login')
    }

    return user
}


//hash plain text passs bef saving
userSchema.pre('save', async function (next) {
    const user = this

    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

const User = mongoose.model('Users', userSchema)

module.exports = User