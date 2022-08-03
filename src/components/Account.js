import { Button, Card, CardActions, CardContent, CardHeader, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import "../styles/Account.css";

const Account = () => {
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
                            <TableRow>
                                
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
                <CardActions style={{ justifyContent: 'flex-end', paddingRight: '15px', paddingBottom: '15px' }}>
                    <Button variant="contained" style={{textTransform: 'none'}}>Add user</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Account;