//user controller
import connectMongoDB from "../../../lib/mongodb";
import Contact from "../../../models/Contact";


export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phonenumber, subject, message } = req.body;

    try {
      console.log("connecting to database");
      await connectMongoDB();
      console.log("mongodb connected successfully");

      // Add validation
      if ( !name || !email || !phonenumber || !subject || !message ) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      //check if user exist in database
      // const existingUser = await User.findOne({ email });
      // if (existingUser) {
      //   return res.status(409).json({ message: "User already exists" });
      // }
      const nweContact = await Contact.create({
        name,
        email,
        phonenumber,
        subject,
        message,
      });
      console.log("New contact created", nweContact);
      res.status(201).json({
        message: "Message received",
        data: { nweContact },
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
