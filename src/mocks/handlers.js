import { rest } from 'msw';
import ExpenseData from './expensesdata';

export const handlers = [
    //Handles a POST /login request
    rest.post('/api/login', (req, res, ctx) => {
        // sessionStorage.setItem('is-authenticated', 'true')
        // const { email } = req.params
        // console.log(req);
        // const accessType = email == "john@app.com" ? "Owner" : "Reader"
        return res(
            // Respond with a 200 status code
            ctx.status(200),
            ctx.json({
                jwt: 'xdhdodfhabdfnbdkskndfikndfdndfddhf',
                // accessType: accessType
            })
        )
    }),

    // Handles a GET /user request
    rest.get('/api/user', (req, res, ctx) => {
        // Check if the user is authenticated in this session
        const isAuthenticated = sessionStorage.getItem('is-authenticated')
        
        if(!isAuthenticated){
            // If not authenticated, respond with a 403 error
            return res(
                ctx.status(403),
                ctx.json({
                    errorMessage: 'Not authorized',
                }),
            )
        }

        //If authenticated, return a mocked user details
        return res(
            ctx.status(200),
            ctx.json({
                username: 'admin',
            }),
        )
    }),

    // Request handlers for Expenses

    rest.get('/api/expenses', (req, res, ctx) => {
        const isAuthenticated = sessionStorage.getItem('is-authenticated')

        if(!isAuthenticated){
            return res(
                ctx.status(403),
                ctx.json({
                    errorMessage: 'Not authorized',
                }),
            )
        }

        const expenses = new ExpenseData()
        return res(
            ctx.status(200),
            ctx.json({
                expenses: expenses,
            })
        )
    }),

    rest.get('/api/expenses/categories', (req, res, ctx) => {
        const isAuthenticated = sessionStorage.getItem('is-authenticated')

        if(!isAuthenticated){
            return res(
                ctx.status(403),
                ctx.json({
                    errorMessage: 'Not authorized',
                }),
            )
        }

        // const expenses = new ExpenseData()
        // const allCategories = expenses.getAllCategories()

        return res(
            ctx.status(200),
            ctx.json({
                categories: ["Transportation", "Communication", "Rents", "Running Cost"],
            })
        )
    })
]