import { Button, Dialog, DialogActions, DialogContent,DialogTitle, FormControl, InputAdornment, InputLabel, MenuItem, Select, SpeedDial, Table, TableBody, TableCell, TableHead, TableRow, TextField } from "@mui/material";
import { Edit, Close, Add } from "@mui/icons-material";
import "../styles/Expenses.css";
import { useState } from "react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"

const Expenses = () => {
    const [ openDialog, setOpenDialog ] = useState(false);
    const [date, setDate] = useState(new Date());

    const handleClickDialogOpen = () => {
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    const handleDialogSave = () => {
        setOpenDialog(false);
    };

    return(
        <div className="expenses-wrapper">
            <div className="expense-search">
                <TextField type={"text"} label="Filter by category" variant="standard" color="error" fullWidth />
            </div>
            <Table aria-label="Expense Table" className="expense-table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Date</TableCell>
                        <TableCell align="left">Counterparty</TableCell>
                        <TableCell align="left">Category</TableCell>
                        <TableCell align="right">Value</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="left">03/03/22</TableCell>
                        <TableCell align="left">Gas station</TableCell>
                        <TableCell align="left">Transport</TableCell>
                        <TableCell align="right">$181.42</TableCell>
                        <TableCell align="right"> <Edit className="action-buttons"/>&nbsp;&nbsp;<Close className="action-buttons"/> </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <SpeedDial ariaLabel="Add expense speed dial" sx={{ position: 'absolute', bottom: 20, right: 20 }} icon={ <Add /> } className="speed-dial" onClick={ handleClickDialogOpen }></SpeedDial>
            <Dialog open={ openDialog } onClose={ handleDialogClose }>
                <DialogTitle>Add new expenses</DialogTitle>
                <DialogContent>
                    {/* <TextField type={"date"} defaultValue={currentDate} label="Date of expense" variant="standard" color="error" margin={"dense"} fullWidth /> */}

                    <LocalizationProvider dateAdapter={ AdapterMoment }>
                        <DatePicker
                            views={['day']}
                            label="Date of expense"
                            value={date}
                            onChange={(newValue) => {
                                setDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} helperText={null} variant="standard" color="error" margin="dense" fullWidth />}
                        />
                    </LocalizationProvider>

                    <TextField type={"text"} label="Couterparty" variant="standard" color="error" margin={"dense"} fullWidth />
                    <TextField select label="Expense Category" variant="standard" margin={"dense"} color="error" fullWidth>
                        <MenuItem key="1" value="James">James</MenuItem>
                        <MenuItem key="2" value="Rohn">Rohn</MenuItem>
                        <MenuItem key="3" value="Key">Key</MenuItem>
                    </TextField>
                    <TextField type={"text"} label="Amount Spent" variant="standard" color="error" margin={"dense"} fullWidth  InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={ handleDialogSave }>Save</Button>
                    <Button onClick={ handleDialogClose }>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Expenses;