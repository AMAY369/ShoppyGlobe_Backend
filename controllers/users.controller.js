import User from "../models/user.model.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";

// post user 
export const registerUser = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) return res.status(400).json({ message: "User already exists" })

        // encrypting password 
        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = new User({ name, email, password: hashPassword })
        await newUser.save();

        return res.status(201).json({ message: 'User registered successfully', user: newUser })
    }
    catch (error) {
        return res.status(500).json({ message: 'Server error :', error: error.message })
    }
}

// post user(login) 
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid email or password' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

        // generating token for authentication
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '30M' });

        return res.status(200).json({ message: 'Login successful', token: token });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};
