import { Button, Dialog, DialogActions, DialogContent,DialogTitle, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import "../styles/Expenses.css";
import { useEffect, useState } from "react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"
import moment from "moment";

const EditExpenseDialog = ({ isOpen, handleClose, payload, expensesCategory }) => {

    // const [openDialog, setOpenDialog] = useState(dialogOpen);

    const test = moment(payload.date, "MM/DD/YYYY").toDate().toString()
    const [date, setDate] = useState(new Date());
    
    console.log(date)
    console.log(test)
    console.log(payload.date)
    
    useEffect(() =>{
        setDate(test)
        console.log(test)
    }, [])



    // // const handleClickDialogOpen = () => {
    // //     setOpenDialog(true);
    // // };
    // if(dialogOpen === true){
    //     console.log("Opened finally");
    // }
    // const handleDialogClose = () => {
    //     setOpenDialog(false);
    // };

    const handleSave = () => {
        console.log("Hello")
    };


    return(
        <Dialog open={ isOpen } onClose={ handleClose }>
                <DialogTitle>Edit { payload.title }</DialogTitle>
                <DialogContent>
                    {/* <TextField type={"date"} defaultValue={currentDate} label="Date of expense" variant="standard" color="error" margin={"dense"} fullWidth /> */}

                    <LocalizationProvider dateAdapter={ AdapterMoment }>
                        <DatePicker
                            views={['day']}
                            label="Date of expense"
                            inputFormat="MM/DD/YYYY"
                            value={date}
                            onChange={(newValue) => {
                                setDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} helperText={null} variant="standard" color="error" margin="dense" fullWidth />}
                        />
                    </LocalizationProvider>

                    <TextField type={"text"} label="Couterparty" variant="standard" color="error" margin={"dense"} value={payload.counterparty} fullWidth />
                    <FormControl variant="standard" margin={"dense"} color="error" fullWidth>
                        <InputLabel>Expense Category</InputLabel>
                        <Select defaultValue={payload.category}>
                            {
                                expensesCategory.map((category, index) => {
                                    return(
                                        <MenuItem key={index} value={category}>{category}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>
                    <TextField type={"text"} label="Amount Spent" variant="standard" color="error" margin={"dense"} value={payload.value} fullWidth  InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={ handleSave }>Save</Button>
                    <Button onClick={ handleClose }>Cancel</Button>
                </DialogActions>
            </Dialog>
    )
}

export default EditExpenseDialog;