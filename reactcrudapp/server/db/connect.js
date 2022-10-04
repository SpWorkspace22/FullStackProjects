const mongoose = require('mongoose')

const connectDB = (url) => {
    mongoose.connect(url).then((res,rej)=>{
        console.log("Db Connected")
    })
}

module.exports = connectDB