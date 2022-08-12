import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardActions, CardContent, TextField, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import "../styles/Categories.css";

const Categories = () => {
    return(
        <div className="categories-wrapper">
            <Card style={{ marginTop: '20px'}}>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                    Lizard
                    </Typography>
                    <TextField variant="standard" label="Category name" />
                </CardContent>
                <CardActions style={{ justifyContent: 'flex-end', paddingRight: '15px', paddingBottom: '15px' }}>
                    <Button variant="text" style={{textTransform: 'none'}}>Add</Button>
                    <Button variant="text" style={{textTransform: 'none'}}>Add pattern</Button>
                </CardActions>
            </Card>

            <div className="accordion-wrapper">
                <Accordion className="accordion">
                    <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header" >
                        <Typography>Food</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <form className="category-update-form">
                            <TextField variant="standard" type={"text"} size="small" label="Category name" margin="dense" /> <br />
                            <TextField variant="standard" type={"text"} size="small" label="Pattern 0" margin="dense" />
                            <TextField variant="standard" type={"text"} size="small" label="Pattern 1" margin="dense" />
                            <TextField variant="standard" type={"text"} size="small" label="Pattern 2" margin="dense" />
                        </form>


                        <CardActions className="card-action-style">
                            <Button variant="text" style={{textTransform: 'none'}}>Update</Button>
                            <Button variant="text" style={{textTransform: 'none'}}>Add pattern</Button>
                            <Button variant="text" style={{textTransform: 'none'}}>Delete</Button>
                        </CardActions>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordion">
                    <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header" >
                        <Typography>Shopping</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <form className="category-update-form">
                            <TextField variant="standard" type={"text"} size="small" label="Category name" margin="dense" /> <br />
                            <TextField variant="standard" type={"text"} size="small" label="Pattern 0" margin="dense" />
                            <TextField variant="standard" type={"text"} size="small" label="Pattern 1" margin="dense" />
                            <TextField variant="standard" type={"text"} size="small" label="Pattern 2" margin="dense" />
                        </form>


                        <CardActions className="card-action-style">
                            <Button variant="text" style={{textTransform: 'none'}}>Update</Button>
                            <Button variant="text" style={{textTransform: 'none'}}>Add pattern</Button>
                            <Button variant="text" style={{textTransform: 'none'}}>Delete</Button>
                        </CardActions>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordion">
                    <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header" >
                        <Typography>Entertainment</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <form className="category-update-form">
                            <TextField variant="standard" type={"text"} size="small" label="Category name" margin="dense" /> <br />
                            <TextField variant="standard" type={"text"} size="small" label="Pattern 0" margin="dense" />
                            <TextField variant="standard" type={"text"} size="small" label="Pattern 1" margin="dense" />
                            <TextField variant="standard" type={"text"} size="small" label="Pattern 2" margin="dense" />
                        </form>


                        <CardActions className="card-action-style">
                            <Button variant="text" style={{textTransform: 'none'}}>Update</Button>
                            <Button variant="text" style={{textTransform: 'none'}}>Add pattern</Button>
                            <Button variant="text" style={{textTransform: 'none'}}>Delete</Button>
                        </CardActions>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordion">
                    <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header" >
                        <Typography>Transport</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <form className="category-update-form">
                            <TextField variant="standard" type={"text"} size="small" label="Category name" margin="dense" /> <br />
                            <TextField variant="standard" type={"text"} size="small" label="Pattern 0" margin="dense" />
                            <TextField variant="standard" type={"text"} size="small" label="Pattern 1" margin="dense" />
                            <TextField variant="standard" type={"text"} size="small" label="Pattern 2" margin="dense" />
                        </form>


                        <CardActions className="card-action-style">
                            <Button variant="text" style={{textTransform: 'none'}}>Update</Button>
                            <Button variant="text" style={{textTransform: 'none'}}>Add pattern</Button>
                            <Button variant="text" style={{textTransform: 'none'}}>Delete</Button>
                        </CardActions>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordion">
                    <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header" >
                        <Typography>Clothes</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <form className="category-update-form">
                            <TextField variant="standard" type={"text"} size="small" label="Category name" margin="dense" /> <br />
                            <TextField variant="standard" type={"text"} size="small" label="Pattern 0" margin="dense" />
                            <TextField variant="standard" type={"text"} size="small" label="Pattern 1" margin="dense" />
                            <TextField variant="standard" type={"text"} size="small" label="Pattern 2" margin="dense" />
                        </form>


                        <CardActions className="card-action-style">
                            <Button variant="text" style={{textTransform: 'none'}}>Update</Button>
                            <Button variant="text" style={{textTransform: 'none'}}>Add pattern</Button>
                            <Button variant="text" style={{textTransform: 'none'}}>Delete</Button>
                        </CardActions>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default Categories;