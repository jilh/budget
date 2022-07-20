import { Button, TextField, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/Signup.css";
const Signup = () => {
    return(
        <div className="signup-wrapper">
            <div className="form-wrapper">
                <form className="signup-form" action="#" method="POST">
                    <b>Create your account</b>
                    <TextField label="Email *" type={"text"} variant="standard" color="error" fullWidth margin="normal" />
                    <TextField label="Password *" type={"password"} variant="standard" color="error" fullWidth margin="normal" />
                    <Button variant="contained" disableElevation color="error" className="signup-button" fullWidth disabled>Signup</Button>
                    <Divider className="signup-divider">OR</Divider>
                    <Link to="/login"><Button className="other-button" variant="outlined" disableElevation fullWidth>Login</Button></Link>
                </form>
            </div>
        </div>
    )
}

export default Signup;