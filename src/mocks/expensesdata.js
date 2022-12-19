class ExpenseData{

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
        const date = new Date(new Date() - Math.random() * (1e+12));
        return date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()
    }

    getCounterparty(){
        // Return random counterpaty
        const counterParty = ["Home", "House", "Gas station", "Estate", "Lands"];
        return counterParty[Math.floor(Math.random() * counterParty.length)];
    }

    getCategory(){
        // Return category of expenses
        const categories = ["Transportation", "Communication", "Rents", "Running Cost"];
        return categories[Math.floor(Math.random() * categories.length)];
    }

    getValue(){
        // Return value/price of expenses
        const values = [200, 230, 600, 120, 310]
        return values[Math.floor(Math.random() * values.length)];
    }
}

export default ExpenseData;