// user controller 
import connectMongoDB from "../../../../lib/mongodb";
import User from "../../../../models/users";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
if(req.method === "POST"){
    const {firstname, lastname, email, password} = req.body;

    try {
        console.log("connecting to database");
        await connectMongoDB()
        console.log("mongodb connected successfully");
        //check if user exist in database
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(409).json({message: 'User already exists'})
        }

        //hashed password: 
        const hashedPassword = await bcrypt.hash(password, 10)
        console.log('creating new user...');
        const newUser = await User.create({
          firstname,
          lastname,
          email,
          password: hashedPassword,
        });
        console.log('New user created', newUser);

    res.status(201).json({
        message: "User registered successfully",
        data: { newUser},
    })
    } catch (error) {
        console.error("Error details:", error);
        res.status(500).json({
            message: "Internal server Error",
        })
    }
}else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}