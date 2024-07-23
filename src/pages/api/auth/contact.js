//user controller
import connectMongoDB from "../../../../lib/mongodb";
import User from "../../../../models/users";
import bcrypt from "bcryptjs/dist/bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phonenumber, subject, message } = req.body;

    try {
      console.log("connecting to database");
      await connectMongoDB();
      console.log("mongodb connected successfully");
      //check if user exist in database
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
      }
      const nweContact = await User.create({
        name,
        email,
        phonenumber,
        subject,
        message,
      });
      console.log('New contact created', nweContact);
      res.status(201).json({
        message: "User registered successfully",
        data: {newUser},
      });
    } catch (error) {
      console.error("Error details:", error);
      res.status(500).json({
        message: "Internal server Error",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
