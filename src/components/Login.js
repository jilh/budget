import { Button, Paper, TextField, Divider } from "@mui/material";
import "../styles/Login.css";
const Login = () => {
    return(
        <div className="login-wrapper">
            <div className="form-wrapper">
                <Paper variant="outlined" elevation={0} className="login-paper">
                    <p><b>john@app.com</b> - Owner role</p>
                    <p><b>mike@app.com</b> - reader role</p>
                    <p>password: 123</p>
                </Paper>

                <form className="login-form" action="#" method="POST">
                    <b>Login to your account</b>
                    <TextField label="Email *" type={"text"} variant="standard" color="error" fullWidth margin="normal" defaultValue={"john@app.com"}/>
                    <TextField label="Password *" type={"password"} variant="standard" color="error" fullWidth margin="normal" defaultValue={"123"}/>
                    <Button variant="contained" disableElevation color="error" className="login-button" fullWidth>Login</Button>
                    <Divider className="login-divider">OR</Divider>
                    <Button className="other-button" variant="outlined" disableElevation fullWidth>Signup</Button>
                    <Button className="other-button" variant="outlined" disableElevation fullWidth>Recover</Button>
                </form>
            </div>
        </div>
    )
}

export default Login;