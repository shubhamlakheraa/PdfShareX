const mongoose = require('mongoose')


const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            // useCreateIndex: true, 
            // useUnifiedTopology: true,
            // useNewUrlParser: true,
            // useFindandModify: true,
            
        })
        
    } catch (error) {
        console.log("Connection Failed", error.message)
    }

    const connection = mongoose.connection
    if(connection.readyState >= 1){
        console.log("Connected to database")
        return
    }
    connection.on("error", () => console.log("Connection failed"))

}
module.exports =  connectDB

