import mongoose from 'mongoose'

const connection = {}

const dbConnect = async () => {
if (connection.isConnected) {
  return
} 
 const db = await mongoose.connect(process.env.MONGO_URI, {
   dbName: process.env.DB_NAME,
   user: process.env.DB_USER,
   pass: process.env.DB_PASS,
   useNewUrlParser: true,
   useUnifiedTopology: true
 })

 connection.isConnected = db.connections[0].readyState
 console.log(connection.isConnected, 'Db connected')
}

export default dbConnect
