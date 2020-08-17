import mongoose from 'mongoose'

const connection = {}

const dbConnect = async () => {
if (connection.isConnected) {
  return
} 
 const db = await mongoose.connect(process.env.MONGO_URI, {
   DB_NAME: process.env.DB_NAME,
   DB_USER: process.env.DB_USER,
   DB_PASS: process.env.DB_PASS,
   useNewUrlParser: true,
   useUnifiedTopology: true
 })

 connection.isConnected = db.connections[0].readyState
 console.log(connection.isConnected, 'Db connected')
}

export default dbConnect
