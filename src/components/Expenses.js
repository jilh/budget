import { SpeedDial, Table, TableBody, TableCell, TableHead, TableRow, TextField } from "@mui/material";
import { Edit, Close, Add } from "@mui/icons-material";
import "../styles/Expenses.css";

const Expenses = () => {
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

            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 20, right: 20 }}
                icon={<Add />}
                className="speed-dial"></SpeedDial>
        </div>
    )
}

export default Expenses;