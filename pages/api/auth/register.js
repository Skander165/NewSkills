import bcrypt from "bcryptjs";
import User from "../../../models/User";
import dbConnect from "../../../lib/mongo";
export default async function handler(req, res) {
  const { method, body } = req;
  await dbConnect();

  if (method === "POST") {
    const user = await User.findOne({ email: body.email });
    if (user) return res.status(422).json({ message: "User already exists" });
    if (body.password.length < 6)
      return res
        .status(422)
        .json({ message: "Password must exceed 6 characters." });
    try {
      const { fullName, username, email, password } = body;
      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = await User.create({
        fullName,
        username,
        email,
        password: hashedPassword,
      });

      res.status(201).json(newUser);
    } catch (error) {
      {
        error.code === 11000
          ? res.status(422).json({ message: "Username already exists" })
          : res.status(500).json(error);
      }
    }
  }
}
