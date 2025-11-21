import User from "../models/users.js";

const login = (req, res) => {
    try {
        
    } catch (error) {
        
    }
};

const register = async (req, res) => {
    try {
        const {email, password} = req.body;
        
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }

        const isRegistered = await User.findOne({ email });
        if (isRegistered) {
            return res.status(400).json({
                success: false,
                message: "This email is already registered"
            });
        }

        const newUser = new User({
            email: email,
            password: password
        });
        await newUser.save();

        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: { id: newUser._id, email: newUser.email },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating user",
            error: error.message
        });
    }
};

export {login, register};