export const waait = () => new Promise(res => setTimeout(res, Math.random() * 800))



const generateRandomColor = () => {
    const existingBudgetsLength = fetchData("budgets")?.length ?? 0
    return `${existingBudgetsLength * 34} 65% 50%`
}

//Local storage
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key))
}
//create budget
export const createBudget = ({
    name, amount
}) => {
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        createAt: Date.now(),
        amount: +amount,
        color: generateRandomColor()
    }
    const existingBudgets = fetchData("budgets") ?? []
    return localStorage.setItem("budgets", JSON.stringify([...existingBudgets, newItem]))
}
export const createExpense = ({
    name, amount, budgetId
}) => {
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        createAt: Date.now(),
        amount: +amount,
        budgetId: budgetId
    }
    const existingExpenses = fetchData("expenses") ?? []
    return localStorage.setItem("expenses", JSON.stringify([...existingExpenses, newItem]))
}

//delete item


//totalspent

export const calculateSpentBudget = (budgetId) => {
    const expenses = fetchData("expenses") ?? [];
    const budgetSpent = expenses.reduce((acc, expense) => {
        //check if the expense.id = budget.id
        if (expense.budgetId !== budgetId) return acc

        return acc += expense.amount
    }, 0)
    return budgetSpent
}

///formating

export const formatCurrency = (amt) => {
    return amt.toLocaleString(undefined, {
        style: "currency",
        currency: "INR"
    })
}

//Formating percentages

export const formatPercentage = (amt) => {
    return amt.toLocaleString(undefined, {
        style: 'percent',
        minimumFractionDigits: 0
    })
}

export const formatDateToLocaleString = (epoch) =>
    new Date(epoch).toLocaleDateString()


export const getAllMatchingItems = ({ category, key, value }) => {
    const data = fetchData(category) ?? []
    return data.filter((item) => item[key] === value)
}

//delete item

export const deleteItem = ({ key, id }) => {
    const existingData = fetchData(key)
    if (id) {
        const newData = existingData.filter((item) => item.id !== id)
        return localStorage.setItem(key, JSON.stringify(newData))
    }
    return localStorage.removeItem(key)
}