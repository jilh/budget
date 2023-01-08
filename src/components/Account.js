import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow, TextField } from "@mui/material";
import { useState } from "react";
import "../styles/Account.css";

const Account = () => {

    const [openDialog, setOpenDialog] = useState(false)
    const [emailAddress, setEmailAddress] = useState('')
    const [userRole, setUserRole] = useState('')
    const [accountUsers, setAccountUsers] = useState([])

    const handleEmailAddress = (e) => {
        setEmailAddress(e.target.value)
    }

    const handleUserRole = (e) => {
        setUserRole(e.target.value)
    }

    const handleDialogOpen = () => {
        setOpenDialog(true)
    }

    const handleDialogClose = () => {
        setOpenDialog(false)
    }

    const handleDialogSave = () => {
        if(emailAddress !== '' && userRole !== ''){
            const newUser = {
                emailAddress: emailAddress,
                role: userRole,
                confirmed: true,
            }

            setAccountUsers([...accountUsers, newUser])
            handleDialogClose()
        }
    }


    return(
        <div className="account-wrapper">
            <Card>
                <CardContent>
                   <h2>User Profile</h2>
                   <p>john@app.com</p>
                </CardContent>
            </Card>

            <Card style={{ marginTop: '20px'}}>
                <CardContent>
                   <h2>Account users</h2>
                   <Table aria-label="Expense Table" className="expense-table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">User email</TableCell>
                                <TableCell align="left">Role</TableCell>
                                <TableCell align="left">Confirmed</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            
                                {
                                    accountUsers.map((users, index) => {
                                        return(
                                            <TableRow key={index}>
                                                <TableCell align="left">{ users.emailAddress }</TableCell>
                                                <TableCell align="left">{ users.role }</TableCell>
                                                <TableCell align="left">{ users.confirmed ? "Yes" : "No" }</TableCell>
                                                <TableCell align="right">Actions</TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            
                        </TableBody>
                    </Table>
                </CardContent>
                <CardActions style={{ justifyContent: 'flex-end', paddingRight: '15px', paddingBottom: '15px' }}>
                    <Button variant="contained" style={{textTransform: 'none'}} onClick={ handleDialogOpen }>Add user</Button>
                </CardActions>
            </Card>

            <Dialog open={ openDialog } onClose={ handleDialogClose }>
                <DialogTitle>Add new user</DialogTitle>
                <DialogContent>
                    <TextField type={"text"} label="User email" variant="standard" onChange={ (event) => handleEmailAddress(event) } color="error" margin={"dense"} fullWidth required />

                        <FormControl variant="standard" margin={"dense"} color="error" fullWidth>
                            <InputLabel>Role</InputLabel>
                            <Select defaultValue={''} onChange={(e) => handleUserRole(e)} required>
                               <MenuItem value={"OWNER"}>OWNER</MenuItem>
                               <MenuItem value={"READER"}>READER</MenuItem>
                            </Select>
                        </FormControl>                    
                </DialogContent>
                <DialogActions>
                    <Button onClick={ handleDialogClose }>Cancel</Button>
                    <Button onClick={ handleDialogSave } disabled={ !emailAddress || !userRole } >Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Account;