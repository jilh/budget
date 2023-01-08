import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardActions, CardContent, TextField, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import "../styles/Categories.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../requests";

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios({
            method: 'GET',
            url: baseURL + 'api/expenses/categories'
        }).then((response) => {
            setCategories(response.data.categories);
        })
    }, [])

    // const [newCategoryName, setNewCategoryName] = useState('')
    const [newCategory, setNewCategory] = useState([])
    const [newCategoryPattern, setNewCategoryPattern] = useState([])
    const [newCategoryPatternInput, setNewCategoryPatternInput] = useState([])

    const handleNewCategory = (e) => {

        let createdCategory = [...newCategory]
        let specificCategory = {...createdCategory[0]}

        specificCategory.name = e.target.value
        specificCategory.patterns = []
        

        createdCategory[0] = specificCategory


        setNewCategory(createdCategory)
    }

    const addNewCategoryPatternInput = (e) => {
        e.preventDefault()

        const pattern = {
            type: 'text',
            value: '',
        }

        setNewCategoryPatternInput([...newCategoryPatternInput, pattern])
    }

    const handleNewCategoryPattern = (e, i) => {
        let patterns = [...newCategoryPattern]
        patterns[i] = e.target.value;

        setNewCategoryPattern(patterns)
    }

    const addCategory = () => {
        let category = [...newCategory]
        category[0].patterns = [...newCategoryPattern]

        setCategories([...categories, category[0]])
        setNewCategoryPatternInput([])
    }

    return(
        <div className="categories-wrapper">
            <Card style={{ marginTop: '20px'}}>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                    Lizard
                    </Typography>
                    <TextField variant="standard" label="Category name" onChange={ handleNewCategory } fullWidth/>
                    {
                        newCategoryPatternInput.map((pattern, index) => {
                            return(
                                <TextField variant="standard" type={"text"} size="small" onChange={ (e, i) => handleNewCategoryPattern(e, index) } id={"pattern" +index} label={"Pattern " + index} margin="dense" fullWidth />
                            )
                        })
                    }
                </CardContent>
                <CardActions style={{ justifyContent: 'flex-end', paddingRight: '15px', paddingBottom: '15px' }}>
                    <Button variant="text" style={{textTransform: 'none'}} onClick={ addCategory }>Add</Button>
                    <Button variant="text" style={{textTransform: 'none'}} onClick={ (e) => addNewCategoryPatternInput(e) }>Add pattern</Button>
                </CardActions>
            </Card>

            <div className="accordion-wrapper">

                {
                    categories.map((category, index) => {
                        return(
                            <Accordion className="accordion" key={index}>
                                <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id={"panel"+index+"a-header"} >
                                    <Typography>{ category.name }</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <form className="category-update-form">
                                        <TextField variant="standard" type={"text"} size="small" value={ category.name } label="Category name" margin="dense" fullWidth /> <br />

                                        {
                                            category.patterns.map((pattern, index) => {
                                                return(
                                                    <TextField variant="standard" type={"text"} size="small" value={ pattern } label={"Pattern " + index} margin="dense" fullWidth />
                                                )
                                            })
                                        }
                                    </form>


                                    <CardActions className="card-action-style">
                                        <Button variant="text" style={{textTransform: 'none'}}>Update</Button>
                                        <Button variant="text" style={{textTransform: 'none'}}>Add pattern</Button>
                                        <Button variant="text" style={{textTransform: 'none'}}>Delete</Button>
                                    </CardActions>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Categories;