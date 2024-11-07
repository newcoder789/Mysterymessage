import mongoose from "mongoose";


type ConnectionObject = {
    isConnected?: number  // by ?-- we meant check isCOnnected onlyif that is present
}

const connection: ConnectionObject = {}

async function dbConnect():Promise <void>  {
    if(connection.isConnected){
        console.log("already connected");
        return
    }
    else{
        try{
            const db = await mongoose.connect(process.env.MONGODB_URI || '', {})
            console.log(db)
            connection.isConnected = db.connections[0].readyState
            console.log(connection.isConnected)
            console.log("Database Connected")
        }catch(error){
            console.log(error)
            process.exit(1)// gracefully connect
        }
    }
}



export default dbConnect