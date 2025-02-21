import { Button, TextField } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLogiks } from "../../store/logiks";

const Signup = () => {

    const { registration } = useLogiks()
    const navigate = useNavigate();


    const [userName, setUserName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    function register() {
        const newUser = {
            userName: userName,
            email: email,
            phoneNumber: phoneNumber,
            password: password,
            confirmPassword: confirmPassword
        }
        registration(newUser,navigate)
    }



    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-center">Create an account</h1>
            <p className="text-gray-500 text-center mb-4">Enter your details below</p>
            <div className="flex flex-col gap-[20px]">

                <TextField value={userName} onChange={(e) => setUserName(e.target.value)} label="Name" variant="outlined" fullWidth className="mb-4" />
                <TextField value={email} onChange={(e) => setEmail(e.target.value)} label="Phone number" variant="outlined" fullWidth className="mb-4" />
                <TextField value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} label="Email" variant="outlined" fullWidth className="mb-4" />
                <TextField value={password} onChange={(e) => setPassword(e.target.value)} label="Password" variant="outlined" type="password" fullWidth className="mb-4" />
                <TextField value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} label="Confirm Password" variant="outlined" type="password" fullWidth className="mb-4" />

                <Button variant="contained" color="error" fullWidth className="mb-4" onClick={() => register()}>
                    Create Account
                </Button>

                <Button variant="outlined" fullWidth startIcon={<GoogleIcon />} className="mb-4">
                    Sign up with Google
                </Button>

                <p className="text-center text-gray-500">
                    Already have an account? <Link to="/login" className="text-blue-500">Log in</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
