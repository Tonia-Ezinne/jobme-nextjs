import mongoose, {Schema, models} from "mongoose";

const contactSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phonenumber: { type: String, required: true, trim: true },
    subject: { type: String, required: true,  trim: true },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

//checks if models.user exist, if it doesnt create a new model
const Contact = models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;

