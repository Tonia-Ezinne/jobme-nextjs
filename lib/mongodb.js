// import mongoose from "mongoose";

// const connectMongoDB =async ()=>{
//     try {
//         await mongoose.connect(process.env.MONGODB_URI)
//         console.log("Connected to MongoDB");
//     } catch (error){
//         console.log("Error connecting to mongoDB", error);
//     }
// }
// export default connectMongoDB


import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error("MONGODB_URI is not defined");
        }
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

export default connectMongoDB;
