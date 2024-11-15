const { z } = require("zod");

//Create an object schema
const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleast 3 characters" })
    .max(255, { message: "Name cannot exceed 255 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be atleast 3 characters" })
    .max(255, { message: "Email cannot exceed 255 characters" }),
  phone: z
    .string({ required_error: "Phone number is required" })
    .min(7, { message: "Password must be  atleast 6 characters" })
    .max(100, { message: "Password cannot exceed 100 characters" }),
});
module.exports = signupSchema;

