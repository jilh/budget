class ExpenseData{
    categories = ["Transportation", "Communication", "Rents", "Running Cost"];

    constructor(count = 10){
        const container = [];

        for( let i = 1; i <= count; ++i){
            container.push({
                date: this.getDate(),
                counterparty: this.getCounterparty(),
                category: this.getCategory(),
                value: this.getValue(),
            })
        }

        return container;
    }

    getDate(){
        // Return random dates

        let newDate = ''
        let newMonth = ''
        const date = new Date(new Date() - Math.random() * (1e+12));
        // const formattedDate = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()

        if(date.getDate() <= 9){
            newDate = "0" + date.getDate()
        }else{
            newDate = date.getDate()
        }

        if(date.getMonth()+1 <= 9){
            newMonth = "0" + (date.getMonth()+1)
        }else{
            newMonth = (date.getMonth()+1)
        }
        return String(newMonth + "/" + newDate + "/" + date.getFullYear()) // MM/DD/YYYY
    }

    getCounterparty(){
        // Return random counterpaty
        const counterParty = ["Home", "House", "Gas station", "Estate", "Lands"];
        return counterParty[Math.floor(Math.random() * counterParty.length)];
    }

    getCategory(){
        // Return category of expenses
        return this.categories[Math.floor(Math.random() * this.categories.length)];
    }

    getAllCategories(){
        return this.categories
    }

    getValue(){
        // Return value/price of expenses
        const values = [200, 230, 600, 120, 310]
        return values[Math.floor(Math.random() * values.length)];
    }
}


const expenses = new ExpenseData()
console.log("In expenses Directory")
console.log(expenses.getAllCategories)
export default ExpenseData;