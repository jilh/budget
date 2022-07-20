import { Button, TextField } from "@mui/material";
import "../styles/Recover.css";
const Recover = () => {
    return(
        <div className="recover-wrapper">
            <div className="form-wrapper">
                <form className="recover-form" action="#" method="POST">
                    <b>Recover your password</b>
                    <TextField label="Email *" type={"text"} variant="standard" color="error" fullWidth margin="normal" />
                    <Button variant="contained" disableElevation color="error" className="recover-button" fullWidth disabled>Recover Password</Button>
                </form>
            </div>
        </div>
    )
}

export default Recover;